import { createContext } from "react";
import api from "../api";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const currentUser = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.me);
      console.log("from context", res.data.me);
    } catch (err) {
      console.log("not logged in");
      setUser(null);
    }
  };
  useEffect(() => {
    currentUser();
  }, []);

  const login = async (userData) => {
    try {
      if (!userData.email || !userData.password) {
        toast.error("All fields are required");
        return;
      }
      const res = await api.post("/auth/login", userData);
      if (res.status !== 200) {
        toast.error(res.data.message);
        return;
      }

      toast.success(res.data.message);
      await currentUser()
      if (res.data.user.role === "provider") navigate("/edit");
      if (res.data.user.role === "user") navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <UserContext.Provider value={{ currentUser, login }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
