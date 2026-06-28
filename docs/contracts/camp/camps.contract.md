# camps

## backend api response

```javascript
{
"message": "Camp fetched successfully",

"data": {
    "camp": {
       "id": "...",

      "title": "...",
      "slug": "...",
      "content": "...",

      "author": {
        "id": "...",
        "username": "alex_dev"
      },

      "community": {
        "id": "...",
        "name": "react"
      },

      "tags": [],

      "media": [],

      "metrics": {
        "votes": 120,
        "comments": 34,
        "views": 2300,
        "shares": 10
      },

      "viewer": {
        "hasVoted": false,
        "hasBookmarked": false
      },

      "createdAt": "...",
      "updatedAt": "..."
    }

},

"meta": {}
}
```

## frontend contract

```javascript
camp = {
  id,

  title,
  slug,
  content,

  author: {
    id,
    username,
  },

  community: {
    id,
    name,
  },

  tags: [],

  media: [
    {
      type,
      url,
    },
  ],

  metrics: {
    votes,
    comments,
    views,
    shares,
  },

  viewer: {
    hasVoted,
    hasBookmarked,
  },

  createdAt,
  updatedAt,
};
```
