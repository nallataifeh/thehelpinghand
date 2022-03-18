--
-- Database: `thehelpinghand_db`
--

CREATE DATABASE IF NOT EXISTS `thehelpinghand_db`;
USE `thehelpinghand_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`dob` date ,
	`email` varchar(130) ,
	`firstName` varchar(130) ,
	`isBusiness` bool ,
	`lastName` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`profilePicture` varchar(130) ,
	`roles` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `thehelpinghand_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `thehelpinghand_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `address`
--

CREATE TABLE IF NOT EXISTS `address` (
	`city` varchar(130)  NOT NULL,
	`country` varchar(130)  NOT NULL,
	`postalCode` varchar(130)  NOT NULL,
	`province` varchar(130)  NOT NULL,
	`street` varchar(130)  NOT NULL,
	`unitNumber` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m _address User - address
ALTER TABLE `user` ADD COLUMN `_address` int(11)  REFERENCES address(_id);


