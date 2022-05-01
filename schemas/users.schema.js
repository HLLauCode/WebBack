module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/users",
  "title": "User",
  "description": "A user registered on the website",
  "type": "object",
  "properties": {
    "email": {
      "description": "Email address of user",
      "type": "string"
    },
    "username": {
      "description": "Username of user",
      "type": "string"
    },
    "password": {
      "description": "Password of user",
      "type": "string"
    },
    "code": {
      "description": "Sige up code of the user (optional)",
      "type": "integer"
    },
  },
  "required": ["email", "username", "password"]
}