-- Create database sylabuddy --
create database sylabuddy;
-- Select the database --
USE syllabuddy;
----------------- User ----------------------------
-- Create Users table --
CREATE TABLE IF NOT EXISTS Users(
    userId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    userType VARCHAR(255),
    lastName VARCHAR(255),
    firstName VARCHAR(255),
    email VARCHAR(255),
    universityID int,
    Constraint FOREIGN KEY (universityID) REFERENCES Universities(universityID),
    phoneNumber int,
    registrationDate TIMESTAMP
);
-- Insert into table Users --
INSERT Ignore INTO Users(
        username,
        password,
        userType,
        firstName,
        lastName,
        email,
        universityID,
        phoneNumber
    )
VALUES(
        'nhattruong',
        '12345678',
        'Student',
        'Nhat',
        'Truong',
        'nhattruong@adelphi.edu',
        2490,
        12345678
    ),
    (
        'robertsiegfried',
        '12345678',
        'Professor',
        'Robert',
        'Siegfried',
        'siegfrie@adelphi.edu',
        2490,
        5168774482
    ),
    (
        'sixiachen',
        '12345678',
        'Professor',
        'Sixia',
        'Chen',
        'schen@adelphi.edu',
        2490,
        5168774487
    ),
    (
        'matthewmassaia',
        '12345678',
        'Professor',
        'Matthew',
        'Massaia',
        'mmassaia@adelphi.edu',
        2490,
        12345678
    ),
    (
        'robinshoemaker',
        '12345678',
        'Professor',
        'Robin',
        'Shoemaker',
        'rshoemaker@adelphi.edu',
        2490,
        9172264057
    ),
    (
        'anthonycordio',
        '12345678',
        'Professor',
        'Anthony',
        'Cordio',
        'acordio@adelphi.edu',
        2490,
        12345678
    ),
    (
        'firstlast',
        '12345678',
        'Professor',
        'First',
        'Last',
        'firstlast@adelphi.edu',
        2490,
        12345678
    );
-- View Users tables --
select *
from Users;
-- Delete values from table --
DELETE FROM Users
where username = 'johndoe';
-- Delete all values from table --
TRUNCATE TABLE Users;
----------------- University ----------------------------
-- Create University table --
CREATE TABLE IF NOT EXISTS Universities(
    universityID int,
    universityName VARCHAR(255),
    address VARCHAR(255),
    yearEstablished VARCHAR(255),
    ranking int
);
-- Create Professor table --
CREATE TABLE IF NOT EXISTS Professor(
    professorID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userID VARCHAR(255),
    universityID int
) AUTO_INCREMENT = 1;
-- Insert into table Professor --
INSERT Ignore INTO Professor(professorID, userID, universityID)
VALUES (1, 9, 2490),
    (2, 10, 2490),
    (3, 11, 2490),
    (4, 12, 2490),
    (5, 13, 2490),
    (6, 14, 2490);
-- Create Course_favorite table --
CREATE TABLE IF NOT EXISTS courseFavorite(
    courseFavoriteID int,
    courseID int,
    userID int
);
-- Create Course_grade table --
CREATE TABLE IF NOT EXISTS courseGrade(
    courseGradeID int,
    registrationID int,
    grade int
);
-- Create Course_registered table--
CREATE TABLE IF NOT EXISTS courseGrade(
    courseRegisteredID int,
    courseID int,
    userID int
);
-- Create Course table--
CREATE TABLE IF NOT EXISTS course(
    courseID int,
    courseCode VARCHAR(255),
    courseName VARCHAR(255),
    professorID int,
    universityID int,
    yearTerm VARCHAR(255),
    courseDescription VARCHAR(255)
);
-- Insert value into course
INSERT Ignore INTO course(
        courseCode,
        courseName,
        professorID,
        universityID,
        yearTerm,
        courseDescription
    )
VALUES (
        'CSC370',
        'Computer Architecture and Organization',
        1,
        2490,
        'Fall2023',
        'abcdef'
    ),
    (
        'CSC440',
        'Software Engineering',
        2,
        2490,
        'Fall2023',
        'abcdef'
    ),
    (
        'HON210',
        'Human Condition 1',
        3,
        2490,
        'Fall2023',
        'abcdef'
    ),
    (
        'FIN450',
        'International Finance',
        4,
        2490,
        'Fall2023',
        'abcdef'
    ),
    (
        'CSC350',
        'Web Programming',
        5,
        2490,
        'Fall2023',
        'abcdef'
    ),
    (
        'HON490',
        'Honors Thesis',
        6,
        2490,
        'Fall2023',
        'abcdef'
    );
-- Query --
-- On Professor Side --
-- 1. How to get info of the professor --
SELECT email,
    phoneNumber
FROM User
Where userType = 'Professor'
    and firstName = 'Nhat'
    and lastName = 'Truong'
SELECT department,
    title
FROM Professor
WHERE userId = (
        SELECT userId
        FROM User
        WHERE firstName = 'Nhat'
            and lastName = 'Truong'
    )
SELECT universityName
FROM Universities
WHERE universityID = (
        SELECT universityID
        from Professor
        WHERE userId = (
                SELECT userId
                FROM User
                WHERE firstName = 'Nhat'
                    and lastName = 'Truong'
            ) -- 2. How to get what course the professor taught --
        SELECT courseName,
            courseCode
        FROM course
        WHERE professorID = (
                SELECT professorID
                from Professor
                WHERE userId = (
                        SELECT userId
                        FROM User
                        WHERE firstName = 'Nhat'
                            and lastName = 'Truong'
                    ) -- 3. Get all professor in one department --
                SELECT firstName,
                    lastName
                FROM User
                WHERE userID = (
                        SELECT userID
                        from Professor
                        Where department = 'Math'
                    )