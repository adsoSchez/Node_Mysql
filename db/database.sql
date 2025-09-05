CREATE DATABASE IF NOT EXISTS `companydb`;

USE `companydb`;

CREATE TABLE `employee` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT DEFAULT NULL, 
  PRIMARY KEY(id)
);

CREATE TABLE `proveedores` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  telefono VARCHAR(15) NOT NULL,  
  descripcion VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);


INSERT INTO employee VALUES 
  (1, 'Joe', 1000),
  (2, 'Henry', 2000),
  (3, 'Sam', 2500),
  (4, 'Max', 1500);

INSERT INTO proveedores VALUES
  (1, 'juan', '3126159527', 'proveedor de bebidas'),
  (2, 'daniel', '3125342456', 'proveedor de servilletas'),
  (3, 'carlos', '3326159527', 'proveedor de libros');