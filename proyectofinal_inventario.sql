-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: proyectofinal
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `categoria` varchar(15) DEFAULT NULL,
  `precio` decimal(7,2) DEFAULT NULL,
  `existencia` int DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
INSERT INTO `inventario` VALUES (1,'Doritos','Bolsa pequeña','Alimentos',5.00,10),(2,'Takis Fuego','Bolsa pequeñal','Alimentos',4.50,50),(3,'Takis Salsa Brava','Bolsa pequeña','Alimentos',4.50,45),(4,'Tortrix','Taco','Alimentos',2.00,10),(5,'Tortrix','Taco Picante','Alimentos',2.00,10),(6,'Jabon en Polvo','Blanca Nieves bolsa Mediana','Higiene',12.00,25),(7,'Jabon en Barra','Punto Azul grande','Higiene',15.00,20),(8,'Salchichas','Paquete de 25 unidades','Alimentos',30.00,123),(9,'Frijoles Volteados','Lata mediana','Alimentos',15.00,13),(10,'Chiles Jalapeños','Lata pequeña','Alimentos',6.00,19),(11,'Durznos en Almibar','Lata Grande','Alimentos',35.00,20),(12,'Paquete de Salchichas','Paquete de 40 unidades','Alimentos',50.00,5),(13,'Pañales','Paquete 10 unidades','Higiene',15.00,30);
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-08 18:22:57
