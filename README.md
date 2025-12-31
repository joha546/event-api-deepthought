# event-api-deepthought

This backend service provides RESTful APIs for managing events and creating associated "nudges". A nudge is a timely notification or reminder that can be scheduled and sent to users regarding a specific event. The service is built with Node.js and Express, and uses MongoDB for data storage.

## Features

### Events
- **Create Events**: Add new events with details like name, tagline, schedule, moderator, and category.
- **Upload Event Images**: Attach a cover image to each event.
- **Retrieve Events**: Fetch a list of events with pagination and sorting options or get a single event by its ID.
- **Update Events**: Modify the details of an existing event.
- **Delete Events**: Remove an event from the system.


## Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **API Documentation**: [Swagger UI](https://swagger.io/tools/swagger-ui/)
- **File Uploads**: Multer (or similar middleware)
- **Environment Management**: dotenv

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud instance like MongoDB Atlas)

## Installation and Setup

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/joha546/event-api-deepthought
    cd event-api-deepthought
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the root of the project and add the necessary environment variables. You can use the `.env.example` file as a template.

    ```env
    # .env.example

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/
    # Add other environment variables as needed
    ```

4.  **Start the server**
    ```bash
    npm run dev
    ```
    The server will start running on `http://localhost:3000`.

## API Documentation

The API endpoints are documented using Swagger. Once the server is running, you can access the interactive documentation to explore and test the endpoints directly from your browser.

**Interactive Swagger UI:** [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

For a detailed markdown-based overview of the Nudge API endpoints, including request/response schemas and examples, please refer to the following file:

**Static API Documentation:** [`docs/API_Documentation.md`](docs/API_doc.md)
