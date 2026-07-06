import FeedToolbar from "./components/FeedToolbar";
import ActiveFilters from "./components/ActiveFilters";
import CampList from "./components/CampList";
import FeedLoader from "./components/FeedLoader";
import FeedError from "./components/FeedError";
import FeedEmpty from "./components/FeedEmpty";

import useCampFeedController from "./hooks/useCampFeedController";

export default function CampFeed() {
  const { camps, isLoading, isError, error, retry } = useCampFeedController();

  if (isLoading) return <FeedLoader />;

  if (isError) {
    return <FeedError message={error?.message} onRetry={retry} />;
  }

  if (!camps.length) {
    return <FeedEmpty />;
  }

  return (
    <section className="space-y-6">
      {/* Sticky Controls */}
      <div className="sticky top-0 z-20 space-y-3 bg-[#030303] pb-3">
        <FeedToolbar />
        <ActiveFilters />
      </div>

      {/* Feed */}
      <CampList camps={camps} />
    </section>
  );
}
