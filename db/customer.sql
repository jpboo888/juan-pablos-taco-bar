DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS order_table;

CREATE TABLE customers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  phone_number VARCHAR(30) NOT NULL,
  customer_address VARCHAR(30) NOT NULL,
);

CREATE TABLE inventory (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  plate VARCHAR(30) NOT NULL,
  pricing VARCHAR(30) NOT NULL,
);

CREATE TABLE order_table (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  order VARCHAR(50) NOT NULL,
  pricing VARCHAR(30) NOT NULL,
);

CREATE TABLE login (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  userPassword VARCHAR(50) NOT NULL,
);