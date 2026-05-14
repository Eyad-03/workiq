import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "Unautherized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(500).json({ message: "internal server error in tokens" });
  }
};
