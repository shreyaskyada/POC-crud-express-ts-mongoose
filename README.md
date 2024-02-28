# POC-crud-express-ts-mongoose

This is a Proof of Concept (POC) project demonstrating basic CRUD operations using Express.js, TypeScript, and Mongoose for MongoDB integration.

## CRUD operations:

- Get all todos:

```
GET http://localhost:3000/todos
```

- Get a particular todo:

```
GET http://localhost:3000/todos/:id
```

- Create a new todo:

```
POST http://localhost:3000/todos
Content-Type: application/json

{
  "task": "hello",
  "completed": false
}
```

- Update a todo:

```
PATCH http://localhost:3000/todos/:id
Content-Type: application/json

{
  "task": "hello updated"
}
```

- Delete a todo:

```
DELETE http://localhost:3000/todos/:id
```

## Usage

To interact with the APIs, open the requests.rest file. Make sure that you have installed REST client in extension install in your vs code.
