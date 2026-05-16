import { pool } from "../config/db.js";

export const getAllService = async () => {
  const query = `
    SELECT 
      s.*, 
      c.category_name 
    FROM services s
    INNER JOIN Categories c ON s.category_name = c.category_name
    ORDER BY s.created_at DESC
  `;
  const result = await pool.query(query);
  return result.rows;
};

export const getServiceById = async (serviceId) => {
  const query = `
    SELECT s.*, c.category_name, u.* FROM services s 
    LEFT JOIN categories c ON s.category_name = c.category_name 
    LEFT JOIN provider_profile u ON u.user_id = s.provider_id 
    WHERE s.service_id = $1
  `;

  const result = await pool.query(query, [serviceId]);
  return result.rows[0];
};

export const getServicesByCategory = async (category_id) => {
  const query =
    "select s.*,c.category_name from services s INNER JOIN Categories c ON s.category_name = c.category_name where s.category_name = $1";
  const result = await pool.query(query, [category_id]);
  return result.rows;
};

export const getServiceByProviderId = async (providerId) => {
  const query = `   
   SELECT 
      s.*, 
      c.category_name 
    FROM services s
    INNER JOIN Categories c ON s.category_name = c.category_name where s.provider_id = $1 `;

  const result = await pool.query(query, [providerId]);
  return result.rows;
};

// service.Model.js
export const createService = async (serviceData) => {
  const {
    service_name,
    category_name,
    service_description,
    service_image,
    provider_name,
    provider_id,
    starting_price,
  } = serviceData;

  const query = `INSERT INTO services (service_name, category_name, service_description, service_image, provider_name, provider_id, starting_price)
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

  const result = await pool.query(query, [
    service_name,
    category_name,
    service_description,
    service_image,
    provider_name,
    provider_id,
    starting_price,
  ]);
  return result.rows;
};


export const deleteService = async (serviceId)=>
{

const query = `delete from services where service_id = $1 `
const result = await pool.query(query,[serviceId])
return result.rows

}