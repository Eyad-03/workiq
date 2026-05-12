import { pool } from "../config/db.js";

export const createUser = async (name, email, hashed_password, role) => {
  const query = `insert into users (name,email,hashed_password,role)
values($1,$2,$3,$4) returning userId, name, email, role`;
  const result = await pool.query(query, [name, email, hashed_password, role]);
  return result.rows[0];
};
