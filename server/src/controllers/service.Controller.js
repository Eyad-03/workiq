import {
  getAllService,
  getServicesByCategory,
  getServiceById,
  getServiceByProviderId,
  createService,
  deleteService,
} from "../models/service.Model.js";

export const getAllServiceController = async (req, res) => {
  try {
    const services = await getAllService();

    if (!services) {
      return res
        .status(201)
        .json({ message: "Services is empty", services: [] });
    }

    return res.status(201).json({ services: services });
  } catch (err) {
    console.error(err.message);
  }
};

export const getServicesByCategoryController = async (req, res) => {
  const { catId } = req.params;

  try {
    const services = await getServicesByCategory(catId);

    if (!services || services.length === 0) {
      return res
        .status(200)
        .json({ services: [], message: "No services found for this category" });
    }

    return res
      .status(201)
      .json({ message: "Fetch service successfully", services: services });
  } catch (err) {
    console.error(err.message);
  }
};

export const getServiceByIdController = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const service = await getServiceById(serviceId);

    if (!service) {
      return res
        .status(404)
        .json({ message: "Service not found", service: service });
    }

    return res.status(201).json({ service: service });
  } catch (err) {
    console.error(err.message);
  }
};

export const getServiceByProviderIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const services = await getServiceByProviderId(id);

    if (services.length === 0) {
      return res
        .status(200)
        .json({ message: "This provider dont have service", services: [] });
    }

    return res.status(200).json({ message: "", services: services });
  } catch (err) {
    console.error(err.message);
  }
};

export const createServiceController = async (req, res) => {
  const {
    service_name,
    category_name,
    service_description,
    service_image,
    provider_name,
    provider_id,
    starting_price,
  } = req.body;

  try {
    const newService = await createService({
      service_name,
      category_name,
      service_description,
      service_image,
      provider_name,
      provider_id,
      starting_price,
    });

    if (!newService) {
      return res
        .status(201)
        .json({ message: "Failed add new service", newService: newService });
    }

    return res
      .status(201)
      .json({ message: "new service add done", newService: newService });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteServiceController = async (req,res) => {
  const { serviceId } = req.params;

  try {
    const services = await deleteService(serviceId);

    return res
      .status(201)
      .json({ message: "successfully", services: services });
  } catch (err) {
    console.error(err.message);
  }
};
