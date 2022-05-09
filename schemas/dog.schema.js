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
    "height": {
      "description": "Height of the dog",
      "type": "float",
      "minimum": 10.0
    },
    "weight": {
      "description": "Weight of the dog",
      "type": "float",
      "minimum": 5.0
    },
    "imageurl": {
      "description": "URL for main image to show the dog",
      "type": "uri"
    },
    "summary": {
      "description": "A short description of the dog by the staff",
      "type": "string"
    },
  },
  "required": ["name", "gender", "age", "breed", "height", "weight", "imageurl"]
}
