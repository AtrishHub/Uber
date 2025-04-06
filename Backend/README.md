# Uber Backend API Documentation

This is the backend API for user authentication and profile management. It includes endpoints for user registration, login, profile retrieval, and logout. Below is a detailed explanation of each endpoint and how it works.

---

## Base URL
```
http://localhost:3000
```

---

## Endpoints

### 1. **Register User**
**Endpoint:**  
```
POST /users/register
```

**Description:**  
This endpoint allows a new user to register by providing their first name, last name, email, and password.

**Request Body Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password"
  }
}
```

**What Happens:**
1. The server validates the input data.
2. The password is hashed for security.
3. A new user is created in the database.
4. A JWT token is generated and returned along with the user details.

---

### 2. **Login User**
**Endpoint:**  
```
POST /users/login
```

**Description:**  
This endpoint allows an existing user to log in by providing their email and password.

**Request Body Example:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `password` must be at least 6 characters long.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**What Happens:**
1. The server validates the input data.
2. The server checks if the user exists in the database.
3. The password is compared with the hashed password stored in the database.
4. If valid, a JWT token is generated and sent back to the client.
5. The token is also stored in a cookie for session management.

---

### 3. **Get User Profile**
**Endpoint:**  
```
GET /users/profile
```

**Description:**  
This endpoint retrieves the profile of the currently logged-in user.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

**What Happens:**
1. The server checks the `Authorization` header or the token stored in cookies.
2. The token is verified to ensure it is valid and not expired.
3. The user's profile is retrieved from the database and returned.

---

### 4. **Logout User**
**Endpoint:**  
```
GET /users/logout
```

**Description:**  
This endpoint logs out the currently logged-in user by invalidating their token.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "message": "Logout successfully"
}
```

**What Happens:**
1. The server checks the `Authorization` header or the token stored in cookies.
2. The token is added to a blacklist in the database to prevent further use.
3. The token cookie is cleared from the client.
4. A success message is returned.

---

## Notes
- **JWT Tokens:** Tokens are used to authenticate users. They expire after 24 hours.
- **Token Blacklisting:** When a user logs out, their token is blacklisted to prevent reuse.
- **Validation:** Input data is validated using `express-validator` to ensure correctness.

---

## Example Usage in Postman

### Register User
- **Method:** `POST`
- **URL:** `http://localhost:3000/users/register`
- **Body (JSON):**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Login User
- **Method:** `POST`
- **URL:** `http://localhost:3000/users/login`
- **Body (JSON):**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Get Profile
- **Method:** `GET`
- **URL:** `http://localhost:3000/users/profile`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```

### Logout User
- **Method:** `GET`
- **URL:** `http://localhost:3000/users/logout`
- **Headers:**
  ```
  Authorization: Bearer <your-token>
  ```

---

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   DB_CONNECT=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```
   npm start
   ```
5. Use Postman or any HTTP client to test the endpoints.

---

## Dependencies
- **Express:** Web framework for Node.js.
- **Mongoose:** MongoDB object modeling tool.
- **jsonwebtoken:** For generating and verifying JWT tokens.
- **bcrypt:** For hashing passwords.
- **express-validator:** For validating input data.
- **cookie-parser:** For parsing cookies.

---

## Contact
For any issues or questions, feel free to reach out to the project maintainer.

# Captain Routes Documentation

This document provides details about the Captain-related routes in the Uber backend API. These routes handle operations such as registering a captain.

---

## Base URL
```
http://localhost:3000/captains
```

---

## Endpoints

### 1. **Register Captain**
**Endpoint:**  
```
POST /captains/register
```

**Description:**  
This endpoint allows a new captain to register by providing their personal details, email, password, and vehicle information.

**Request Body Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.
- `vehicle.color` must be at least 3 characters long.
- `vehicle.plate` must be at least 3 characters long.
- `vehicle.capacity` must be an integer greater than or equal to 1.
- `vehicle.vehicleType` must be one of the following: `car`, `motorcycle`, `auto`.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "643f1c2e1c4e4b001c8e4b1a"
  }
}
```

**What Happens:**
1. The server validates the input data using `express-validator`.
2. The server checks if a captain with the provided email already exists.
3. The password is hashed for security.
4. A new captain is created in the database with the provided details.
5. A JWT token is generated and returned along with the captain's details.

**Error Responses:**
- **400 Bad Request:** If validation fails or the captain already exists.
  ```json
  {
    "message": "Captain already exists"
  }
  ```
- **500 Internal Server Error:** If there is an issue with the server or database.

---

## Notes
- **JWT Tokens:** The token is used to authenticate the captain for future requests.
- **Password Security:** Passwords are hashed using `bcrypt` before being stored in the database.
- **Validation:** Input data is validated using `express-validator` to ensure correctness.

---

## Example Usage in Postman

### Register Captain
- **Method:** `POST`
- **URL:** `http://localhost:3000/captains/register`
- **Body (JSON):**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

---

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   DB_CONNECT=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```
   npm start
   ```
5. Use Postman or any HTTP client to test the endpoints.

---

## Dependencies
- **Express:** Web framework for Node.js.
- **Mongoose:** MongoDB object modeling tool.
- **jsonwebtoken:** For generating and verifying JWT tokens.
- **bcrypt:** For hashing passwords.
- **express-validator:** For validating input data.

---

## Contact
For any issues or questions, feel free to reach out to the project maintainer.
# Uber Backend API Documentation

This is the backend API for user and captain authentication and profile management. It includes endpoints for user and captain registration, login, profile retrieval, and logout. Below is a detailed explanation of each endpoint and how it works.

---

## Base URL
```
http://localhost:3000
```

---

## Endpoints

### User Routes Documentation

---

### 1. **Register User**
**Endpoint:**  
```
POST /users/register
```

**Description:**  
This endpoint allows a new user to register by providing their first name, last name, email, and password.

**Request Body Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password"
  }
}
```

---

### 2. **Login User**
**Endpoint:**  
```
POST /users/login
```

**Description:**  
This endpoint allows an existing user to log in by providing their email and password.

**Request Body Example:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `password` must be at least 6 characters long.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### 3. **Get User Profile**
**Endpoint:**  
```
GET /users/profile
```

**Description:**  
This endpoint retrieves the profile of the currently logged-in user.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

---

### 4. **Logout User**
**Endpoint:**  
```
GET /users/logout
```

**Description:**  
This endpoint logs out the currently logged-in user by invalidating their token.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "message": "Logout successfully"
}
```

---

## Captain Routes Documentation

---

### 1. **Register Captain**
**Endpoint:**  
```
POST /captains/register
```

**Description:**  
This endpoint allows a new captain to register by providing their personal details, email, password, and vehicle information.

**Request Body Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### 2. **Login Captain**
**Endpoint:**  
```
POST /captains/login
```

**Description:**  
This endpoint allows an existing captain to log in by providing their email and password.

**Request Body Example:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` must be a valid email address.
- `password` must be at least 6 characters long.

**Response Example (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "643f1c2e1c4e4b001c8e4b1a"
  }
}
```

---

### 3. **Get Captain Profile**
**Endpoint:**  
```
GET /captains/profile
```

**Description:**  
This endpoint retrieves the profile of the currently logged-in captain.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "643f1c2e1c4e4b001c8e4b1a"
  }
}
```

---

### 4. **Logout Captain**
**Endpoint:**  
```
GET /captains/logout
```

**Description:**  
This endpoint logs out the currently logged-in captain by invalidating their token.

**Headers Example:**
```json
{
  "Authorization": "Bearer <your-token>"
}
```

**Response Example (Success):**
```json
{
  "message": "Logged out successfully"
}
```

---

## Notes
- **JWT Tokens:** Tokens are used to authenticate users and captains. They expire after 24 hours.
- **Token Blacklisting:** When a user or captain logs out, their token is blacklisted to prevent reuse.
- **Validation:** Input data is validated using `express-validator` to ensure correctness.

---

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   DB_CONNECT=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```
   npm start
   ```
5. Use Postman or any HTTP client to test the endpoints.

---

## Dependencies
- **Express:** Web framework for Node.js.
- **Mongoose:** MongoDB object modeling tool.
- **jsonwebtoken:** For generating and verifying JWT tokens.
- **bcrypt:** For hashing passwords.
- **express-validator:** For validating input data.
- **cookie-parser:** For parsing cookies.

---

## Contact
For any issues or questions, feel free to reach out to the project maintainer.