import { createContext, useState } from "react";
import api from "../api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requestUser, setRequestUser] = useState([]);
  const [request, setRequest] = useState({});
  const [requestProvider, setRequestProvider] = useState([]);
  const { user, loading } = useContext(UserContext);

  const addRequest = async (service) => {
    try {
      const requestPayload = {
        service_id: service.service_id,
        provider_id: service.provider_id,
        consumer_id: user.userid,
        status: "pending",
      };

      const res = await api.post("/create/request", requestPayload);

      console.log(res.data);
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchRequestUser = async () => {
    try {
      const res = await api.get(`/getRequestByUser/${user.userid}`);

      setRequestUser(res.data.requests);
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchRequestById = async (requestid) => {
    try {
      const res = await api.get(`/getRequest/${requestid}`);
      console.log(res.data.request);
      setRequest(res.data.request);
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchRequestByProviderId = async (providerId) => {
    try {
      const res = await api.get(`/getRequest/Provider/${providerId}`);
      console.log(res.data.requests);
      setRequestProvider(res.data.requests);
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  const changeStatus = async (status,note,requestid) => {
    try {
      const res = await api.put(`/change/status/${requestid}`, { status,note });
      
      toast.success(res.data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        addRequest,
        requestUser,
        loading,
        fetchRequestUser,
        fetchRequestById,
        request,
        fetchRequestByProviderId,
        requestProvider,
        changeStatus
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
