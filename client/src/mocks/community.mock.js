//=========================================
// V1 CONTRACT COMPLIANT MOCK DATA
//=========================================

export const mockCommunity = {
  id: "comm_9921x",
  name: "ReactJS Development",
  slug: "reactjs",
  description:
    "Everything about React. A high-performance community gathering around modern frontend state paradigms, micro-architectures, engine loops, and compiler implementations.",
  owner: {
    id: "user_0x112",
    username: "alex_dev",
  },
  avatar:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=150&auto=format&fit=crop&q=80",
  banner:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
  metrics: {
    members: 14205,
    camps: 247,
  },
  createdAt: "Jan 12, 2026",
  updatedAt: "Jun 28, 2026",
};

export const mockCommunityCamps = [
  {
    id: "camp_01",
    author: "alex_dev",
    camp: "reactjs",
    time: "2 hours ago",
    title:
      "Why Signals might completely replace standard state management in 2026",
    content:
      "After rewriting our core internal dashboard using Signals, the memory footprint dropped drastically. No more unnecessary re-renders across parent components. What's your take on the current state of vanilla React state?",
    upvotes: 342,
    comments: 89,
    userVoted: "up",
  },
  {
    id: "camp_02",
    author: "sukesh_dev",
    camp: "reactjs",
    time: "1 day ago",
    title:
      "React 20 introduces parallel Canvas threading via structural ECS mutations",
    content:
      "The newly proposed architecture introduces explicit structural mutations off the main thread. By decoupling rendering passes from reconciliation cycles, we can maintain steady 60fps execution metrics on standard physics calculations without mutating layout states directly inside the virtual DOM runtime layer.",
    upvotes: 184,
    comments: 31,
    userVoted: null,
  },
];

export const sidebarCamps = [
  "javascript",
  "webgl_creations",
  "reactjs",
  "nextjs",
  "rust_lang",
];
