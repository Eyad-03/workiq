import { pool } from "../config/db.js";

export const createRequest = async ({
  service_id,
  provider_id,
  consumer_id,
  status,
}) => {
  const query = `insert into requests (service_id,provider_id,consumer_id,status) values($1,$2,$3,$4)`;
  const result = await pool.query(query, [
    service_id,
    provider_id,
    consumer_id,
    status,
  ]);

  return result.rows[0];
};

export const getRequestByUserId = async (consumer_id) => {
  const query = `select 
r.*,
s.service_name,
s.service_description,
u.name
from requests r
left join services s
on s.service_id = r.service_id
left join users u
on r.provider_id=u.userid
where r.consumer_id = $1 and r.status != 'Cancelled' `;

  const result = await pool.query(query, [consumer_id]);

  return result.rows;
};

export const getRequestById = async (requestid) => {
  const query = `select 
r.*,
s.service_name,
s.category_name,
s.delivery,
s.starting_price,
r.created_at::date as created_date,
s.service_description,
u.name,
u.email
from requests r
left join services s
on s.service_id = r.service_id
left join users u
on u.userid=r.consumer_id
where r.requestid = $1`;

  const result = await pool.query(query, [requestid]);

  return result.rows[0];
};

export const getRequestByProviderId = async (providerId) => {
  const query = `select
r.*,
r.status,
s.service_name,
s.starting_price,
s.category_name,
u.name,
u.email
from requests r
left join services s
on s.service_id=r.service_id
left join users u
on u.userid=r.consumer_id where r.provider_id = $1`;

  const result = await pool.query(query, [providerId]);
  return result.rows;
};

export const changeStatus = async (status,note, requestid) => {
  const query = `update requests set status = $1, note=$2 where requestid=$3`;
  const result = await pool.query(query, [status,note ,requestid]);
  return result.rows[0]
};


