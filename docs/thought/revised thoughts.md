# Feature Ownership & Responsibility

## Core Principle

A component should own **either** presentation **or** business logic, not both.

- **Pages** compose features.
- **Features** own business logic.
- **UI components** render data.

---

# Ownership Hierarchy

```
Page
 ├── Composes features
 ├── Reads route params
 ├── Controls page layout
 └── Never contains feature business logic

Feature
 ├── Owns API calls
 ├── Owns React Query hooks
 ├── Owns mutations
 ├── Owns server state
 ├── Owns feature-specific containers
 └── Exposes reusable UI

UI Components
 ├── Receive props
 ├── Render UI
 ├── Emit events
 └── Never know where data came from
```

---

# Rule 1 — UI Ownership

A page owns **layout**, not feature logic.

Example:

```
<HomePage>

├── Hero
├── FeedToolbar
├── CampFeed
└── Sidebar
```

Although `<FeedToolbar />` feels like part of the Camp feature, the page owns its placement because it belongs to the page layout.

The toolbar itself should remain presentation-only.

---

# Rule 2 — Business Logic Ownership

If a component needs to fetch, mutate, cache, or synchronize data for a domain, it belongs to that feature.

Examples:

```
features/camps
```

owns

- fetchCamp()
- fetchFeed()
- createCamp()
- updateCamp()
- deleteCamp()
- voteCamp()

because those operations belong to the Camp domain.

---

# Rule 3 — API Determines Ownership

The feature responsible for calling an API owns the business logic for that API.

Example

```
GET /api/communities/:communitySlug/camps/:campSlug
```

belongs to

```
features/camps
```

because it loads Camp data.

---

# Rule 4 — Rendering Does NOT Mean Ownership

Rendering another feature does not transfer ownership.

Example

```
CampPage

├── CampDetails
├── CommentList
└── ReplyComposer
```

Even though the Camp page displays comments, it does **not** own the Comment feature.

Instead:

```
<CommentList campSlug={slug} />
```

The page only provides the identifier.

The Comment feature performs:

- fetching comments
- pagination
- sorting
- refreshing
- caching
- mutations

The page simply places it in the layout.

---

# Rule 5 — Dumb Components

Business logic should stop before reaching the presentational components.

Example

```
CommentList

↓

maps

↓

<CommentCard />
```

`CommentCard`

owns only:

- rendering
- formatting
- displaying replies
- click handlers

It should never call APIs.

---

# Rule 6 — Container Components

Container components are the bridge between business logic and UI.

Example

```
CommentList

↓

useComments()

↓

<CommentCard />
```

Responsibilities:

- fetch data
- manage loading
- manage errors
- map server data
- pass props to UI

---

# Rule 7 — Data Flow

```
Page

↓

Feature Container

↓

React Query Hook

↓

API

↓

Server

↓

Feature Container

↓

UI Components
```

The UI should never skip layers.

---

# Ownership Decision Checklist

Ask these questions:

### Does it call an API?

Yes → Feature owns it.

---

### Does it manage React Query?

Yes → Feature owns it.

---

### Does it contain business rules?

Yes → Feature owns it.

---

### Is it only rendering props?

Yes → UI owns it.

---

### Is it arranging sections of a page?

Yes → Page owns it.

---

### Does it only receive an ID or slug and know how to load everything else?

Yes → It is probably a Feature Container.

Example

```
<CommentList campSlug={slug} />
```

The page only supplies the context.

Everything else belongs to the Comment feature.

---

# Mental Model

Think of ownership like responsibility.

The owner is the module that would break if the business rules changed.

Examples:

If comment pagination changes...

```
Only
features/comments
changes.
```

If camp voting changes...

```
Only
features/camps
changes.
```

If the page layout changes...

```
Only
CampPage
changes.
```

The module that carries the business responsibility is the true owner.
