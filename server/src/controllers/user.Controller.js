import { getAllUser } from "../models/user.Model.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUser();

    if (users.length === 0) {
      return res.status(400).json({ message: "Fetch is Failed", users: [] });
    }

    return res
      .status(201)
      .json({ message: "Fetch users successfully", users: users });
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
