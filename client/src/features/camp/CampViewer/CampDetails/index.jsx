import CampHeader from "./components/CampHeader";
import CampContent from "./components/CampContent";
import CampMedia from "./components/CampMedia";
import CampActions from "./components/CampActions";

import { useCampDetailsQuery } from "./hooks/useCampDetailsQuery";
import { useUpvoteCampMutation } from "./hooks/useUpvoteCampMutation";
export default function CampDetails({ campSlug }) {
  const { data: camp } = useCampDetailsQuery(campSlug);
  console.log(camp, "from damp");
  const { mutate: upvoteCamp } = useUpvoteCampMutation();

  if (!camp) return null;
  return (
    <article>
      <CampHeader
        community={camp.community}
        author={camp.author}
        createdAt={camp.createdAt}
      />

      <CampContent title={camp.title} content={camp.content} />

      <CampMedia media={camp.media} />

      <CampActions
        metrics={camp.metrics}
        onUpvote={() => upvoteCamp(campSlug)}
        onShare={() => {}}
        onSave={() => {}}
      />
    </article>
  );
}
