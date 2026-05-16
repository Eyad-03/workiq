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
category_name VARCHAR(100)
service_name varchar(255) not null,
service_description text,
service_image varchar(255),
provider_name varchar(255) not null,
provider_id INTEGER REFERENCES users(userid)
starting_price DECIMAL(10, 2) NOT NULL,
delivery text
created_at timestamp default current_timestamp 
CONSTRAINT fk_category_name 
    FOREIGN KEY (category_name) 
    REFERENCES Categories(category_name)
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


CREATE TABLE requests (
    requestid SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(service_id),
    provider_id INTEGER REFERENCES users(userid),
    status VARCHAR(50) DEFAULT 'pending' NOT NULL
);