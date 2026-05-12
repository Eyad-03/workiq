import { pool } from "../config/db.js";

export const getUserById = async (userId) => {
  const query = `select * from users where userId=$1`;
  const result = await pool.query(query, [userId]);
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const query = `select * from users where email = $1`;
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

export const getAllUser = async () => {
  const query = `select * from users`;
  const result = await pool.query(query);
  return result.rows;
};

export const changePassword = async (userId, hashed_password) => {
  const query = `update users set hashed_password = $1 where userId = $2 returning userid, name, email, hashed_password`;
  const result = await pool.query(query, [hashed_password, userId]);
  return result.rows[0];
};

export const deleteUserById = async (userId) => {
  const query = `delete from users where userId = $1`;
  const result = await pool.query(query, [userId]);
};


export const saveRefreshToken =async (userId,refreshToken)=>
{

const query = `update users set refresh_token = $1 where userId=$2`
const result =await pool.query(query,[refreshToken,userId])

}