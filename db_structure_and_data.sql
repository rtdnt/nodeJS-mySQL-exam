-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: expenseapp
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  `updatedAt` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `usergroups` (`id`),
  CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,1,1,'CURRENT_TIMESTAMP','CURRENT_TIMESTAMP');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `amount` float NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `usergroups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (1,1,50,'Food');
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usergroups`
--

DROP TABLE IF EXISTS `usergroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usergroups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  `updatedAt` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usergroups`
--

LOCK TABLES `usergroups` WRITE;
/*!40000 ALTER TABLE `usergroups` DISABLE KEYS */;
INSERT INTO `usergroups` VALUES (1,'Friends','CURRENT_TIMESTAMP','CURRENT_TIMESTAMP'),(2,'Group 2','2023-01-22 18:20:51','2023-01-22 18:20:51');
/*!40000 ALTER TABLE `usergroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ruta','rutadan@gmail.com','123','2022-01-21 22:00:00'),(2,'Ruta','mykolass17@gmail.com','$2b$10$oYcG8vlWNi8z.ID1kyadUeX3KnFqEB/GhsZD8YnXeNYIEuxxAA4rK','2023-01-22 13:36:13'),(3,'mykolas','mykolas@gmail.com','$2b$10$.gMgNCmZehfa5mfc2q8DWuoIPgMjZSXu.4yY1z87C/45zwyHUQCBm','2023-01-22 14:28:21'),(12,'gffAS','sdfgdfghdasdf@gmail.com','$2b$10$W3pnOKesjSUhqwUjU.e3SusXzpCbOoP69M0vHaWSgeH5inVIywVpO','2023-01-22 16:15:45'),(13,'gffASasdas','sdfgdfghdasdasdf@gmail.com','$2b$10$O8Z9SLfWCTjA4xO6YWWgLuJ97zffx6fTZR8spv5WosS4oJI/yzS8q','2023-01-22 16:15:48'),(14,'gffAfdSasdas','sdfgdfghddfasdasdf@gmail.com','$2b$10$n.FhGKu7eiFH8mit3QsHuOjOHZEBupuqIk1mk9A0S2HN/r8kT1h7K','2023-01-22 16:16:42'),(15,'gffAfdSafsdas','sdfgdfghddfdfasdasdf@gmail.com','$2b$10$pVsonlNEMmlduhvbVGTLYOrmc6alifwcgIkIK92y5Pdzu5JfJag.6','2023-01-22 16:17:00'),(16,'gffAfdSafsdfdas','sdfgdfghdddffdfasdasdf@gmail.com','$2b$10$EoRj4PNgOE1hR6vGlRXQpuOVKk12UV2Jq8lyFfmtF.AM4ZkbdG3K.','2023-01-22 16:17:25'),(17,'gffAfdfdSafsdfdas','sdfgdfghdsfdddffdfasdasdf@gmail.com','$2b$10$9PgWcM/NemnN7g4mPszgCOK6U3sYPG4XnZpEltN.uZbVv4fBNOGSu','2023-01-22 16:17:37'),(18,'afsdfdas','sdafsdf@gmail.com','$2b$10$22SUkCcmWZR0RO.nnEDLluEM/aG4STSLfqQvEGq5aIgakXXDEPFlS','2023-01-22 16:18:09'),(19,'aff','sdfdf@gmail.com','$2b$10$B83PPMa/fLvDO8H79et2TutxNnxGnRZk92wSML0mrfQUHWXxO48zy','2023-01-22 16:18:42'),(20,'agdff','gf@gmail.com','$2b$10$QkHza0PrwvvXIR0irdDD0u9MJFnwhxwjSnf.QGljNYA5vNZUW/LLG','2023-01-22 16:25:06'),(21,'Ieva','ieva@ieva.lt','$2b$10$KaD7T1OWFF2W9Xxs2VtxTuOBz5uA5d0Cd7QgfyhQO/RlqffWkgw2q','2023-01-22 18:20:28'),(22,'Ieva','monika@gmail.com','$2b$10$c6V5ifIzNzIggPcNCLaJ9eK1fKLiExZc3dtvNjvmSiH49Ckn/DrWy','2023-01-22 19:01:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-22 21:27:02
