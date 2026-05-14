create table users(
userid Serial PRIMARY KEY,
name varchar(255) not null,
email varchar(255) not null,
hashed_password varchar(255) not null,
role varchar(50) default 'user',
refresh_token TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE Categories (
    category_id Serial PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


create table services
(

service_id serial primary key,
category_id INTEGER REFERENCES Categories(category_id)
service_name varchar(255) not null,
service_description text,
service_image varchar(255),
provider_name varchar(255) not null,
provider_nickname varchar(255) not null,
rating DECIMAL(2, 1) not null,
review_count INTEGER DEFAULT 0,
starting_price DECIMAL(10, 2) NOT NULL,
currency VARCHAR(3) DEFAULT 'USD',
created_at timestamp default current_timestamp 

)


CREATE TABLE provider_profile (
  profile_id     SERIAL PRIMARY KEY,
  user_id        INT NOT NULL UNIQUE,  -- ← UNIQUE enables upsert
  first_name     VARCHAR(50),          -- ← remove NOT NULL for first insert
  last_name      VARCHAR(50),
  gender         VARCHAR(50),
  country        VARCHAR(50),
  city           VARCHAR(50),
  email          VARCHAR(255),
  phone          VARCHAR(255),
  specialized    VARCHAR(255),
  portfolio      VARCHAR(255),
  experience     INT,
  project_number INT,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(userid)
);