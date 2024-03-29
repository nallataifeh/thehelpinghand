--
-- Database: thehelpinghand_db
--

CREATE DATABASE thehelpinghand_db;

-- ENTITIES

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	dob date ,
	email varchar(130) ,
	firstName varchar(130) ,
	isBusiness bool ,
	lastName varchar(130) ,
	password varchar(130)  NOT NULL,
	profilePicture varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity address
--

CREATE TABLE IF NOT EXISTS "address" (
	city varchar(130)  NOT NULL,
	country varchar(130)  NOT NULL,
	postalCode varchar(130)  NOT NULL,
	province varchar(130)  NOT NULL,
	street varchar(130)  NOT NULL,
	unitNumber varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m _user address - User
ALTER TABLE address ADD COLUMN _user INTEGER  REFERENCES "user"(_id);
