# API Documentation for Nudge Event API

## Overview

This document outlines the API structure for the Nudge Management System. A **Nudge** is a notification or reminder that users can create and associate with events. Nudges contain a title, description, cover image, icon, one-line invitation text, and a scheduled delivery time. They are designed to provide timely reminders or notifications about events to users.

## Base URL

```
https://api.deepthought.education/api/v3/app
```

## Nudge Data Model

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "cover_image": "string",
  "icon": "string",
  "invitation": "string",
  "scheduled_time": "datetime",
  "event_id": "string",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier for the nudge |
| title | string | Title of the nudge |
| description | string | Detailed description of the nudge |
| cover_image | string | URL to the cover image for the nudge |
| icon | string | URL to the icon for the nudge |
| invitation | string | One-line invitation text shown when nudge is minimized |
| scheduled_time | datetime | Time when the nudge should be sent |
| event_id | string | ID of the event associated with this nudge |
| created_at | datetime | Timestamp when the nudge was created |
| updated_at | datetime | Timestamp when the nudge was last updated |

## API Endpoints

### 1. Create a New Nudge

**Endpoint:** `POST /nudges`

**Description:** Creates a new nudge associated with an event.

**Request Body:** `multipart/form-data`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | Title of the nudge |
| description | string | Yes | Detailed description of the nudge |
| event_id | string | Yes | ID of the associated event |
| invitation | string | Yes | One-line invitation text |
| scheduled_time | string | Yes | ISO datetime when the nudge should be sent |
| cover_image | file | No | Cover image file for the nudge |
| icon | file | No | Icon file for the nudge |

**Response:**

```json
{
  "success": true,
  "message": "Nudge created successfully",
  "data": {
    "id": "nudge_123456",
    "title": "Don't miss our webinar!",
    "description": "Join us for an exciting webinar on AI trends.",
    "cover_image": "https://example.com/uploads/nudge_cover_123456.jpg",
    "icon": "https://example.com/uploads/nudge_icon_123456.png",
    "invitation": "Register now for exclusive insights!",
    "scheduled_time": "2023-12-15T10:30:00Z",
    "event_id": "event_789",
    "created_at": "2023-12-01T08:15:00Z",
    "updated_at": "2023-12-01T08:15:00Z"
  }
}
```

### 2. Get Nudges

**Endpoint:** `GET /nudges`

**Description:** Retrieves a list of nudges or a specific nudge by ID.

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | No | Unique ID of the nudge to retrieve |
| event_id | string | No | ID of the event to get nudges for |
| limit | integer | No | Number of results per page (default: 10) |
| page | integer | No | Page number (default: 1) |
| upcoming | boolean | No | Filter for upcoming nudges only |

**Response (for list):**

```json
{
  "success": true,
  "message": "Nudges retrieved successfully",
  "data": {
    "nudges": [
      {
        "id": "nudge_123456",
        "title": "Don't miss our webinar!",
        "description": "Join us for an exciting webinar on AI trends.",
        "cover_image": "https://example.com/uploads/nudge_cover_123456.jpg",
        "icon": "https://example.com/uploads/nudge_icon_123456.png",
        "invitation": "Register now for exclusive insights!",
        "scheduled_time": "2023-12-15T10:30:00Z",
        "event_id": "event_789",
        "created_at": "2023-12-01T08:15:00Z",
        "updated_at": "2023-12-01T08:15:00Z"
      }
    ],
    "pagination": {
      "total": 25,
      "page": 1,
      "limit": 10,
      "pages": 3
    }
  }
}
```

**Response (for single nudge):**

```json
{
  "success": true,
  "message": "Nudge retrieved successfully",
  "data": {
    "id": "nudge_123456",
    "title": "Don't miss our webinar!",
    "description": "Join us for an exciting webinar on AI trends.",
    "cover_image": "https://example.com/uploads/nudge_cover_123456.jpg",
    "icon": "https://example.com/uploads/nudge_icon_123456.png",
    "invitation": "Register now for exclusive insights!",
    "scheduled_time": "2023-12-15T10:30:00Z",
    "event_id": "event_789",
    "created_at": "2023-12-01T08:15:00Z",
    "updated_at": "2023-12-01T08:15:00Z"
  }
}
```

### 3. Update a Nudge

**Endpoint:** `PUT /nudges/{id}`

**Description:** Updates an existing nudge.

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Unique ID of the nudge to update |

**Request Body:** `multipart/form-data`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | No | Title of the nudge |
| description | string | No | Detailed description of the nudge |
| invitation | string | No | One-line invitation text |
| scheduled_time | string | No | ISO datetime when the nudge should be sent |
| cover_image | file | No | Cover image file for the nudge |
| icon | file | No | Icon file for the nudge |

**Response:**

```json
{
  "success": true,
  "message": "Nudge updated successfully",
  "data": {
    "id": "nudge_123456",
    "title": "Updated: Don't miss our webinar!",
    "description": "Join us for an exciting webinar on AI trends.",
    "cover_image": "https://example.com/uploads/nudge_cover_123456.jpg",
    "icon": "https://example.com/uploads/nudge_icon_123456.png",
    "invitation": "Register now for exclusive insights!",
    "scheduled_time": "2023-12-15T10:30:00Z",
    "event_id": "event_789",
    "created_at": "2023-12-01T08:15:00Z",
    "updated_at": "2023-12-02T14:20:00Z"
  }
}
```

### 4. Delete a Nudge

**Endpoint:** `DELETE /nudges/{id}`

**Description:** Deletes an existing nudge.

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Unique ID of the nudge to delete |

**Response:**

```json
{
  "success": true,
  "message": "Nudge deleted successfully",
  "data": {
    "id": "nudge_123456",
    "deleted": true
  }
}
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request

```json
{
  "success": false,
  "message": "Invalid request data",
  "error": {
    "code": "INVALID_INPUT",
    "details": "The title field is required"
  }
}
```

### 401 Unauthorized

```json
{
  "success": false,
  "message": "Authentication required",
  "error": {
    "code": "UNAUTHORIZED",
    "details": "Please provide valid authentication credentials"
  }
}
```

### 404 Not Found

```json
{
  "success": false,
  "message": "Resource not found",
  "error": {
    "code": "NOT_FOUND",
    "details": "Nudge with ID 'nudge_123456' not found"
  }
}
```

### 500 Internal Server Error

```json
{
  "success": false,
  "message": "Server error",
  "error": {
    "code": "INTERNAL_ERROR",
    "details": "An unexpected error occurred while processing your request"
  }
}
```

## Integration with Events API

The Nudge API integrates with the existing Events API. When creating a nudge, you must provide a valid `event_id` from the Events API. This creates a relationship between the nudge and the event.

## File Uploads

Cover images and icons should be uploaded as multipart/form-data. The following constraints apply:

- Cover images: Maximum size 5MB, formats: JPG, PNG, GIF
- Icons: Maximum size 1MB, formats: PNG, SVG
