import { pool } from "../config/db.js";

export const changeProfile = async (data) => {
  const {
    user_id, first_name, last_name, gender, country, city,
    email, phone, specialized, portfolio, experience, project_number,
  } = data;

  const query = `
    INSERT INTO provider_profile 
      (user_id, first_name, last_name, gender, country, city, email, phone, specialized, portfolio, experience, project_number)
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    ON CONFLICT (user_id) DO UPDATE SET
      first_name     = EXCLUDED.first_name,
      last_name      = EXCLUDED.last_name,
      gender         = EXCLUDED.gender,
      country        = EXCLUDED.country,
      city           = EXCLUDED.city,
      email          = EXCLUDED.email,
      phone          = EXCLUDED.phone,
      specialized    = EXCLUDED.specialized,
      portfolio      = EXCLUDED.portfolio,
      experience     = EXCLUDED.experience,
      project_number = EXCLUDED.project_number
    RETURNING *;
  `;

  const result = await pool.query(query, [
    user_id, first_name, last_name, gender, country, city,
    email, phone, specialized, portfolio, experience, project_number,
  ]);

  return result.rows;
};


