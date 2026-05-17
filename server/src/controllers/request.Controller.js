import { request } from "express";
import {
  createRequest,
  getRequestById,
  getRequestByUserId,
  getRequestByProviderId,
  changeStatus,
} from "../models/request.Model.js";
import { getServiceByProviderId } from "../models/service.Model.js";

export const createRequestController = async (req, res) => {
  const { service_id, provider_id, consumer_id, status } = req.body;

  try {
    const newRequest = await createRequest({
      service_id,
      provider_id,
      consumer_id,
      status,
    });

    if (!newRequest) {
      return res.status(201).json({ message: "Request Failed" });
    }

    return res
      .status(201)
      .json({ message: "Request successfully", request: newRequest });
  } catch (err) {
    console.error(err.message);
  }
};

export const getRequestByUserIdController = async (req, res) => {
  // Extract from req.params instead of req.body
  const { consumer_id } = req.params;

  try {
    const requests = await getRequestByUserId(consumer_id);

    if (!requests || requests.length === 0) {
      return res
        .status(200)
        .json({ message: "Request is empty", requests: [] });
    }

    return res
      .status(200)
      .json({ message: "fetch request successfully", requests: requests });
  } catch (err) {
    console.error(err.message);
    // Explicitly send a 500 server error status to the client if something breaks
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const getRequestByIdController = async (req, res) => {
  const { requestid } = req.params;

  try {
    const request = await getRequestById(requestid);

    if (!request) {
      return res.status(200).json({ message: "no request", request: [] });
    }

    return res.status(200).json({ message: "fetch done", request: request });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const getRequestByProviderIdController = async (req, res) => {
  const { providerId } = req.params;

  try {
    const requests = await getRequestByProviderId(providerId);

    if (requests.length === 0) {
      return res.status(200).json({ message: "no request", requests: [] });
    }

    return res.status(200).json({ message: "fetch done", requests: requests });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const changeStatusController = async (req, res) => {
const { status,note } = req.body; // properly destructure 'status' out of the object
    const { requestid } = req.params;

  const newStatus =await changeStatus(status,note,requestid)

  try {
    if (newStatus === "Pending") {
      return res.status(201).json({ message: "status not change" });
    }

    return res.status(201).json({ message: "status change" });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
