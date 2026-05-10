create table users(
userId Serial PRIMARY KEY,
name varchar(255) not null,
email varchar(255) not null,
hashed_password varchar(50) not null,
role varchar(50) default 'user',
refresh_token TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)