# PetStore Backend Readme

## Overview
This repository contains the backend implementation for the PetStore application, built using NestJS, GraphQL, and PostgreSQL.

## Setup

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Waer1/pets-store-graphql
   ```

2. Install dependencies:
   ```bash
   cd pets-store-graphql
   npm install
   ```

3. Create a `.env` file in the root directory and add the following configuration with your PostgreSQL details:
   ```env
   DB_HOST=127.0.0.1
   DB_PORT=5234
   DB_USERNAME=postgres
   DB_PASSWORD=0
   DB_NAME='pets_db'
   ```

### Running the Application
Start the NestJS server:
```bash
npm run start
```

The server will be running at `http://localhost:3000/graphql`.

## GraphQL API

Explore and interact with the GraphQL API using the GraphQL playground available at `http://localhost:3000/graphql`.

## Additional Configuration

You can customize other configuration options in the `src/config` directory, including GraphQL schema and database models.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
