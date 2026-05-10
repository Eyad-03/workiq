import bcrypt from "bcryptjs";

import { findUserByEmail } from "../models/user.Model.js";
import { createUser } from "../models/auth.Model.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Field is Required" });
    }

    const existedUser = await findUserByEmail(email);

    if (existedUser) {
      return res.status(400).json({ message: "Email is already exist" });
    }

    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await createUser(name, email, hashed_password, role);

    if (!newUser) {
      return res.status(400).json({ message: "Failed create user" });
    }

    return res.status(201).json({
      message: "User Created Successfully",
      user: { userid: newUser.userid, name, email, role },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All field is required" });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    const isMatch = await bcrypt.compare(password, user.hashed_password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email or password incorrect" });
    }

    const accessToken = generateAccessTokens(user);
    const refreshToken = generateRefreshTokens(user);
    await saveRefreshToken(user.userid, refreshToken);

    res.status(200).json({
      message: "Logged in successfully",
      user: {
        userid: user.userid,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
