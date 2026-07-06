export default function CampContent({ title, content }) {
  return (
    <section>
      <h1 className="mt-3 font-['Fraunces'] font-medium text-[26px] sm:text-[30px] leading-[1.2] text-[#ECE8DF] max-w-[22ch]">
        {title}
      </h1>

      <p className="mt-3 font-[Inter] text-[15px] leading-[1.75] text-[#93979C] max-w-[62ch]">
        {content}
      </p>
    </section>
  );
}
