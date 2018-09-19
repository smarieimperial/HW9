CREATE DATABASE friend_db;

USE friend_db;

CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    question_no DECIMAL(2) NOT NULL,
    user_result DECIMAL(2) NOT NULL,
    PRIMARY KEY (id)
);