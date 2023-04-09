CREATE DATABASE proyectoFinal;
USE proyectoFinal;

CREATE TABLE usuarios(
idEmpleado int not null auto_increment, primary key(idEmpleado),
nombre varchar(25),
idLog varchar(5),
pass varchar(8)
);

CREATE TABLE proveedores(
idProveedor int not null auto_increment, primary key(idProveedor),
nombre varchar(25),
dirección varchar(30),
telefono varchar(8)
);

CREATE TABLE inventario(
idProducto int not null auto_increment, primary key(idProducto),
nombre varchar(25),
descripcion varchar(45),
categoria varchar (15),
precio decimal(7,2),
existencia int
);

CREATE TABLE pedidos(
idPedidos int not null auto_increment, primary key(idPedidos),
nombreProducto varchar(25),
cantidad int,
proveedor varchar(25)
);