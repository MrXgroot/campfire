export const mockCamps = [
  {
    id: "1",
    title: "Why React Query changed how I build React apps",
    slug: "why-react-query-changed-how-i-build-react-apps",

    content:
      "I recently migrated my entire project from manual useEffect fetching to React Query. The amount of boilerplate disappeared and caching became almost effortless.",

    author: {
      id: "u1",
      username: "alex_dev",
    },

    community: {
      id: "c1",
      name: "react",
    },

    media: [
      {
        type: "image",
        url: "https://picsum.photos/900/500?random=1",
      },
    ],

    metrics: {
      votes: 342,
      comments: 89,
      views: 4100,
      shares: 26,
    },

    createdAt: "2 hours ago",
  },

  {
    id: "2",
    title: "Finished building my own Reddit clone architecture",
    slug: "reddit-clone-architecture",

    content:
      "After several refactors I finally separated feature logic from UI components. Components are now completely dumb while the feature entry handles queries and mutations.",

    author: {
      id: "u2",
      username: "sarah_codes",
    },

    community: {
      id: "c2",
      name: "architecture",
    },

    media: [],

    metrics: {
      votes: 528,
      comments: 64,
      views: 9700,
      shares: 41,
    },

    createdAt: "5 hours ago",
  },

  {
    id: "3",
    title: "Tailwind CSS v5 preview looks incredible",
    slug: "tailwind-v5-preview",

    content:
      "Container queries, better defaults, and much smaller builds. Excited to migrate my personal projects once it's stable.",

    author: {
      id: "u3",
      username: "tailwindguru",
    },

    community: {
      id: "c3",
      name: "tailwindcss",
    },

    media: [
      {
        type: "image",
        url: "https://picsum.photos/900/500?random=2",
      },
    ],

    metrics: {
      votes: 191,
      comments: 18,
      views: 2400,
      shares: 11,
    },

    createdAt: "Yesterday",
  },
];
