# Day 6 AM: Planning the Database Schema

Let's make a Mini FaceBook app! Before we start building the database, however, we need to come up with a schema--or an outline for how it should look. Our database should contain at least 3 tables: users, posts, and friends. The users table should contain personal data pertaining to a particular user, such as first & last name, date of birth, password, a short bio, etc. The posts table (we'll just do text-only posts for now) should store a string of text, a date posted, and the number of likes. The friends table tracks data pertaining to an individual "friendship"--this means it should store the user ID of the "requestor" and "requested", a date requested, a status (whether it has been accepted/declined/requested), and anything else you want associated with a friendship.

The task: Under Design.md, explain and outline how your relational database will work. List the tables, their associated columns, and the data type that will be stored in each column (string, number, boolean, enum, date, etc.). Feel free to add onto what is given above. It might be helpful to get some paper to draw tables and arrows representing connections between data.


# Day 6 PM: Building & Seeding the Database

Now that we've planned out the structure of our database, let's build it! To allow us to see our database in real time, download [Postico](https://eggerapps.at/postico/) if you're on MacOS and [DBeaver](https://dbeaver.io) otherwise. Next, we need to actually create a Database. We'll host our database in cloud with ElephantSQL:

  - Sign up for a free personal account [here](https://customer.elephantsql.com/login). There is also a log in with Github option.
  - Once you have signed in, click the **Create New Instance** button on the top right.
  - Add a name, probably something like `app-name-db` and keep it on the free `Tiny Turtle` plan. You shouldn't need to add any payment information! Press **Select Region**.
  - Select the `US-East-1` as the region and press **Review**. and then **Create Instance**.
  - This should take you back to your list of your created instances (databases). Click on the one you just made.
  - Under the Details section you should see **Server**, **User & Default database**, and **Password**. These are the credentials you need to connect to the database

* Connect to the database

  - Add all the credentials from ElephantSQL to the corresponding fields in the .env file. It should probably end up looking something like this:

  ```
  DB_HOST=salt.db.elephantsql.com
  DB_DATABASE=abcdefgh
  DB_USER=abcdefgh
  DB_PASSWORD=abcdefghabcdefghabcdefghabcdefgh
  DB_PORT=5432
  NODE_ENV=development
  ```

### Migrations
Start by writing all the migrations for your database. Remember, create a new migration for a new table with `npx knex migrate:make <TABLE_NAME>`. The migration for the `users` table is started for you.

### Seeds
Once you have written your migrations, use [Casual.js](https://www.npmjs.com/package/casual) to create seed data under `/data`. Remember to also to create a new seed file under `/seeds` using `npx knex seed:make <TABLE_NAME>`. Again, the `users` seed data is already partially completed for your reference.

Depending on the relations you create, you may need to force your seeds to run in a certain order. For example, if you try to insert Post data before User data, an error will be thrown because the foreign User ID key is not yet available. You can order your seeds by prepending the files with numbers (as is done with the users seed).