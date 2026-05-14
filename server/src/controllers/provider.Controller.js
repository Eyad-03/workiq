import { changeProfile } from "../models/provider.Model.js";

export const changeProviderProfile = async (req, res) => {
  const {
    user_id, first_name, last_name, gender, country, city,
    email, phone, specialized, portfolio, experience, project_number,
  } = req.body;

  try {
    const newProfile = await changeProfile({
      user_id, first_name, last_name, gender, country, city,
      email, phone, specialized, portfolio, experience, project_number,
    });

    return res.status(200).json({ message: "Saved successfully", newProfile });
  } catch (err) {
    console.error("DB ERROR:", err.message);   // ← this will show the real error
    return res.status(500).json({ message: err.message });
  }
};