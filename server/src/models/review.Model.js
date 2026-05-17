import { pool } from "../config/db.js";

export const createReview = async ({rating, comment,type}) => {
  const query = `insert into reviews (rating,comment,type) values ($1,$2,$3) `;
  const result = await pool.query(query, [rating, comment,type]);
  return result.rows[0];
};



