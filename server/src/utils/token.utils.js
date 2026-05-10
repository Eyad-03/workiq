import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECERET;
const REFRESH_SECRET = process.env.JWT_REFRESH_TOKENS;

export const generateAccessTokens = (user) => {
  return jwt.sign(
    {
      userId: user.userId,
      role: user.role,
    },
    ACCESS_SECRET,
    { expiresIn: "1d" },
  );
};


export const verifyAccessToken = (token) => {
    return jwt.verify(token, ACCESS_SECRET)
}
export const generateRefreshTokens = (user) => {
    return jwt.sign({
        userid: user.userid,
    },
        REFRESH_SECRET,
        { expiresIn: "7d" }
    )

}
export const verifyRefreshTokens = (token) => {
    return jwt.verify(token, REFRESH_SECRET)

}