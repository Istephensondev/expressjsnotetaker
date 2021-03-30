DROP DATABASE IF EXISTS  musical_mecca;

CREATE DATABASE  musical_mecca;

USE musical_mecca;

CREATE TABLE studentCard(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  studentName VARCHAR(100),
  instrument VARCHAR(100),
  musicStyle VARCHAR(100),
  bio VARCHAR(100),
  contactInfo VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE teacherCard(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  teacherName VARCHAR(100),
  instrument VARCHAR(100),
  musicStyle VARCHAR(100),
  bio VARCHAR(100),
  contactInfo VARCHAR(100),
  rating VARCHAR(100)
  PRIMARY KEY (id)
);

