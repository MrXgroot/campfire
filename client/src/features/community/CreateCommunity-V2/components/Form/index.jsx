export default function CommunityForm({ form }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Campfire Name</label>

        <input
          id="name"
          value={form.values.name}
          onChange={(event) => form.changeName(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>

        <textarea
          id="description"
          value={form.values.description}
          onChange={(event) => form.changeDescription(event.target.value)}
        />
      </div>
    </div>
  );
}
