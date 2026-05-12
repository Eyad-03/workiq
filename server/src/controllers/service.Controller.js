import {
  getAllService,
  getServicesByCategory,
} from "../models/service.Model.js";

export const getAllServiceController = async (req, res) => {
  try {
    const services = await getAllService();

    if (!services) {
      return res
        .status(400)
        .json({ message: "Services is empty", services: [] });
    }

    return res.status(201).json({ services: services });
  } catch (err) {
    console.error(err.message);
  }
};

export const getServicesByCategoryController = async (req, res) => {
  const {catId} = req.params;

  try {
    const services = await getServicesByCategory(catId);

if (!services || services.length === 0) {
    return res.status(200).json({ services: [], message: "No services found for this category" });
}

    return res
      .status(201)
      .json({ message: "Fetch service successfully", services: services });
  } catch (err) {
    console.error(err.message);
  }
};
