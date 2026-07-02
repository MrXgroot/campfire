# Shared Responses & Errors

## Location

```text
src/
└── shared/
    ├── errors/
    │   ├── AppError.js
    │   ├── BadRequestError.js
    │   ├── ConflictError.js
    │   ├── ForbiddenError.js
    │   ├── NotFoundError.js
    │   ├── UnauthorizedError.js
    │   └── ValidationError.js
    │
    └── response/
        └── HttpResponse.js
```

---

# HTTP Responses

All successful responses are sent using `HttpResponse`.

## Methods

| Method                     |      Status Code | Purpose                                  |
| -------------------------- | ---------------: | ---------------------------------------- |
| `HttpResponse.ok()`        |         `200 OK` | Successful request                       |
| `HttpResponse.created()`   |    `201 Created` | Resource created                         |
| `HttpResponse.noContent()` | `204 No Content` | Successful request with no response body |

---

## Success Response Format

```json
{
  "message": "...",
  "data": {},
  "meta": {}
}
```

Example

```json
{
  "message": "Camp created successfully.",
  "data": {
    "camp": {}
  },
  "meta": {}
}
```

---

# Custom Errors

All application errors extend `AppError`.

```
AppError
│
├── BadRequestError
├── ValidationError
├── UnauthorizedError
├── ForbiddenError
├── NotFoundError
└── ConflictError
```

---

## Error Types

### AppError

Base class for all custom errors.

Location

```
src/shared/errors/AppError.js
```

---

### BadRequestError

Status Code

```
400 Bad Request
```

Use when

- Invalid request
- Invalid parameters
- Malformed input

Location

```
src/shared/errors/BadRequestError.js
```

---

### ValidationError

Status Code

```
422 Unprocessable Entity
```

Use when

- Request validation fails
- Invalid field values

Location

```
src/shared/errors/ValidationError.js
```

---

### UnauthorizedError

Status Code

```
401 Unauthorized
```

Use when

- User is not authenticated
- Missing or invalid access token

Location

```
src/shared/errors/UnauthorizedError.js
```

---

### ForbiddenError

Status Code

```
403 Forbidden
```

Use when

- User is authenticated but lacks permission
- Resource ownership check fails

Location

```
src/shared/errors/ForbiddenError.js
```

---

### NotFoundError

Status Code

```
404 Not Found
```

Use when

- Resource does not exist

Examples

- Camp not found
- Community not found
- User not found

Location

```
src/shared/errors/NotFoundError.js
```

---

### ConflictError

Status Code

```
409 Conflict
```

Use when

- Duplicate resource
- Unique constraint violation

Examples

- Email already exists
- Username already exists
- Community already exists
- Camp already exists

Location

```
src/shared/errors/ConflictError.js
```

---

# Error Handling

All errors are forwarded to the global error middleware.

```
Controller
    ↓
next(error)
    ↓
Error Middleware
    ↓
HTTP Response
```
