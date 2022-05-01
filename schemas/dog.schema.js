module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/dogs",
  "title": "Dog",
  "description": "A dog available at the centre",
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the dog",
      "type": "string"
    },
    "gender": {
      "description": "Gender of the dog",
      "type": "string"
    },
    "age": {
      "description": "Age of the dog",
      "type": "float",
      "minimum": 0.1
    },
    "breed": {
      "description": "Breed of the dog",
      "type": "string"
    },
    "imageurl": {
      "description": "URL for main image to show the dog",
      "type": "uri"
    },
    "status": {
      "description": "Is the dog healthy or not",
      "type": "boolean"
    },
    "summary": {
      "description": "A short description of the dog by the staff",
      "type": "string"
    },
  },
  "required": ["name", "gender", "age", "breed", "imageurl" ,"status"]
}