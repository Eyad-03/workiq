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