export default function CampMedia({ media }) {
  if (!media?.length) return null;

  return (
    <section className="mt-5 border border-[#1D2126]">
      <img
        src={media[0].url}
        alt=""
        className="w-full h-auto max-h-[380px] object-cover"
      />
    </section>
  );
}
