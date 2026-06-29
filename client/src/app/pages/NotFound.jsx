import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-zinc-100">404</h1>

        <p className="mt-4 text-zinc-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
