DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

USE food_db;

CREATE TABLE fridge(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    amount INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cupboard(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    amount INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE spice(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    amount INT NULL,
    PRIMARY KEY (id)
);

DROP TABLE counter;

INSERT INTO fridge(item_name, category, amount)
VALUES ("Eggs", "dairy", 12);

INSERT INTO cupboard(item_name, category, amount)
VALUES ("Rice", "Grain", 10);

INSERT INTO spice(item_name, category, amount)
VALUES ("Paprika", "Spice", 10);

DROP TABLE spice, cupboard, fridge;

CREATE TABLE stock(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    amount INT NULL,
    PRIMARY KEY (id)
);