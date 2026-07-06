export default function CampHeader({ community, author, createdAt }) {
  return (
    <header className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase text-[#5A5E63]">
      <span className="text-[#C68A46]">c/{community.name}</span>

      <span>·</span>

      <span>u/{author.username}</span>

      <span>·</span>

      <span>{createdAt}</span>
    </header>
  );
}
