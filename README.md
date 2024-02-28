# Social-Network-API Gionathan' NoSQL Social Network API

### License: MIT

Description.
Gionathan's NoSQL Social Network API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. This API is built using Node.js and Mongoose, and it provides a simple and scalable way to handle social networking data without the restrictions of traditional relational databases.

## Table of Contents:
Overview
- [THE CHALLENGE](#the-challenge)
- [USAGE INSTRUCTIONS](#usage-instructions)
- [GITHUB](#github-link-httpsgithubcomlilgionatesocial-network-apigit)
- [INSALLATION PROCESS](#installation-process)
- [BUILT WITH](#built-with)
- [WHAT I LEARNED](#what-i-learned)
- [CONTINUED DEVELOPMENT](#continued-development)
- [LICENSE](#license-mit)
- [AUTHOR](#author)


### The Challenge:

The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and must provide endpoints that can handle large amounts of unstructured data.

API must allow users to:

Create and delete user accounts.
Create, read, update, and delete thoughts.
Add and remove reactions to thoughts.
Add and remove friends to a user's friend list.
Test API: use Insomnia or a similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.

Assigned User Story:
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
Acceptance Criteria:
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
GIF:
Figure 1. GIF.
The following animation demonstrates the application functionality:


### Usage Instructions:
Repository: Open documentation run 'npm i' and update '.env'.
Create a .env file in the root directory of the project and add the following variables:
Once the server is running, use a tool like Insomnia to test the API endpoints.
Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.
Available Endpoints:
Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

GET /api/users - get all users
GET /api/users/:userId - get a single user by ID
POST /api/users - create a new user
PUT /api/users/:userId - update a user by ID
DELETE /api/users/:userId - delete a user by ID
GET /api/thought - get all thought
GET /api/thought/:thoughtId - get a single thought by ID
POST /api/thought - create a new thought
PUT /api/thought/:thoughtId - update a thought by ID
DELETE /api/thought/:thoughtId - delete a thought by ID
POST /api/thought/:thoughtId/reactions - add a reaction to a thought
DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

### GitHub Link: https://github.com/lilgionate/Social-Network-API.git

### Installation Process:
Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
Open the cloned (or downloaded) repository in any source code editor.
Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

### Built With:

JSON: JSON

Dynamic JavaScript

Mongoose: 7.0.3

Express: 4.18.2

Node.js: 16.18.1

Insomnia: by Kong

MongoDB: Website

Nodemon: 2.0.12

License Badge: Shields.io

Visual Studio Code: Website

### What I Learned:

Built a RESTful API with Node.js and Mongoose.
Used NoSQL database to handle unstructured data.
Created endpoints for CRUD operations on users, thoughts, and reactions data models.
Implemented endpoints to add and remove friends from a user's friend list.
Tested API endpoints using Insomnia.
Worked with HTTP requests and JSON formatted data.
Utilized environment variables and .env files for sensitive data.

### Continued Development:

Implement additional features to enhance the user experience.
Improve error handling and response messaging for better user feedback.
Optimize database performance to handle large amounts of data efficiently.
Explore different types of NoSQL databases and evaluate their suitability for the project requirements.
Expand API documentation to assist developers with using the API.
License & Copyright ©
License: MIT Open Source Initiative Link

### Author
Follow me on Github at lilgionate! Additional questions or concerns? feel free to contact me at gioanathanv@gmail.com.

© 2023 Gionathan Vargas. Confidential and Proprietary. All Rights Reserved.