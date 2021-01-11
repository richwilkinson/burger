DROP DATABASE IF EXISTS burger_db
CREATE SCHEMA burger_db;
USE burger_db;
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name NOT NULL varchar(200);
    devoured BOOLEAN NOT NULL default false,
);