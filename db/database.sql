CREATE TABLE employee (
  id INT(4) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);
CREATE TABLE proveedores (
id INT(4) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
telefono INT (10) NOT NULL,
descripcion VARCHAR (100) DEFAULT NULL,
);

INSERT INTO employee values 
  ((1),'Joe', 1000),
  ((2),'Henry', 2000),
  ((3),'Sam', 2500),
  ((4),'Max', 1500);

INSERT INTO proveedor values
((1),'juan', 3126159527,'proveedor de bebidas' ),
((2),'daniel', 3125342456,'proveedor de servilletas' ),
((3),'carlos', 3326159527,'proveedor de libros' ),

SELECT * FROM employee;

