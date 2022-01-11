# Day 6 AM: Planning the Database Schema
 
Let's make a Mini FaceBook app! Before we start building the database, however, we need to come up with a schema--or an outline for how it should look. Our database should contain at least 3 tables: users, posts, and friends. The users table should contain personal data pertaining to a particular user, such as first & last name, date of birth, password, a short bio, etc. The posts table (we'll just do text-only posts for now) should store a string of text, a date posted, and the number of likes. The friends table tracks data pertaining to an individual "friendship"--this means it should store the user ID of the "requestor" and "requested", a date requested, a status (whether it has been accepted/declined/requested), and anything else you want associated with a friendship.
 
The task: Under Design.md, explain and outline how your relational database will work. List the tables, their associated columns, and the data type that will be stored in each column (string, number, boolean, enum, date, etc.). Feel free to add onto what is given above. It might be helpful to get some paper to draw tables and arrows representing connections between data.

Users
    id (unsigned int Primary key)
    username (string)
    hashedPassword (string)
    firstName (string)
    lastName (string)
    email (string)
    profilePictureUrl (string)
    bio (string)

Friends
	id (unsigned int Primary key)
	requestorId (unsigned int Foreign key)
	requestedId (unsigned int Foreign key)
    status (enum)
    date (datetime)
	
Posts
    id (unsigned int Primary key)
    userId (unsigned int Foreign key)
    message (string)
    date (datetime)

Comments
	id (Unsigned int Primary key)
	userId (Unsigned int Foreign Key)
	postId (Unsigned int Foreign Key)
	message (string)
	date (datetime)

Likes
	id (unsigned int Primary key)
    userId (unsigned int Foreign key)
	postId (unsigned int Foreign key)
    date (datetime)

