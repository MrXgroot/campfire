import CampCard from "./components/CampCard";
import FeedLoader from "./components/FeedLoader";
import FeedError from "./components/FeedError";
import FeedEmpty from "./components/FeedEmpty";

import { mockCamps } from "../../mocks/camps.mock";
import { useCampQuery } from "./hook/queries/useCampQuery";

export default function CampFeed() {
  // const { data, isPending, isError, error, refetch } = useCampQuery();
  // const camps = data?.data?.camps ?? mockCamps;

  //=======================
  // hard code
  //======================
  let isPending = false;
  let isError = false;
  let refetch = () => {};
  let error = "";
  let camps = mockCamps;

  if (isPending) {
    return <FeedLoader />;
  }

  if (isError) {
    return <FeedError message={error?.message} onRetry={refetch} />;
  }

  if (!camps.length) {
    return <FeedEmpty />;
  }

  return (
    <section className="space-y-2.5">
      {camps.map((camp) => (
        <CampCard
          key={camp.id}
          camp={camp}
          actions={{
            onVote: () => {},
            onComment: () => {},
            onShare: () => {},
            onSave: () => {},
            onMenu: () => {},
          }}
        />
      ))}
    </section>
  );
}
