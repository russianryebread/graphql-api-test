# GraphQL Calculator

Very simple POC script to familiarize myself with GraphQL.

## Installation

- `npm install`
- `nodemon index.js # hot reload`
- `node index.js    # regular mode`

--- 

## API

### Add

*Query:*
```javascript
{
    add(a:5,b:2)
}
```
*Response:*
```json
{
    "data": {
        "add": 7
    }
}
```

### Square Root

*Query:*
```javascript
{
    sqrt(num:9)
}
```
*Response:*
```json
{
    "data": {
        "sqrt": 3
    }
}
```