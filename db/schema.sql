DROP DATABASE IF EXISTS burger_db
CREATE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id int NOT NUL AUTO_INCREMENT,
    burger_name varchar(200);
    devoured BOOLEAN NOT NULL default false,
);