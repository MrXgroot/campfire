export default function MainContent({ children }) {
  return (
    <main className="flex-1 min-w-0 w-full h-full  scrollbar-none pt-5 pb-12 overflow-y-auto">
      {children}
    </main>
  );
}

//TODO remove it correctly later on
