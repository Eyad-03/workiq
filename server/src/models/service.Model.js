import { pool } from "../config/db.js";

export const getAllService = async () => {
  const query = `
    SELECT 
      s.*, 
      c.category_name 
    FROM services s
    INNER JOIN Categories c ON s.category_id = c.category_id
    ORDER BY s.created_at DESC
  `;
  const result = await pool.query(query);
  return result.rows;
};

export const getServicesByCategory = async (category_id) => {
  const query = "select * from services where category_id = $1";
  const result = await pool.query(query, [category_id]);
  return result.rows;
};
