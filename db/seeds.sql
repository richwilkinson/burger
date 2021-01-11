USE burger_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("The Real Deal Holyfield", 0);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Momma Big Buns", 1);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Big, Fat and Juicy", 0);

SELECT * FROM burgers;
UPDATE burgers SET devoured = 1 WHERE id = 1;
