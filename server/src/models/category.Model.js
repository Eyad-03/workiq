import { pool } from "../config/db.js";

export const getAllCategories = async () => {
  const query = "select * from categories";
  const result = await pool.query(query);
  return result.rows;
};

export const getCategoryById = async (category_id) => {
  const query =
    "select category_id,category_name,image_url from categories where category_id = $1";
  const result = await pool.query(query, [category_id]);
  return result.rows[0];
};

export const createCategory = async (category_name, description, image_url) => {
  const query =
    "insert into categories (category_name,description,image_url) values($1,$2,$3)";
  const result = await pool.query(query, [
    category_name,
    description,
    image_url,
  ]);
  return result.rows[0];
};
