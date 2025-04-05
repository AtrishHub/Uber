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