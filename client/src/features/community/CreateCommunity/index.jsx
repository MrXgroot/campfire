import CreateCommunityHeader from "./components/Header";
import CommunityForm from "./components/Form";
import CommunityMediaSection from "./components/MediaSection";
import CommunityActions from "./components/Actions";

import { useCreateCommunityController } from "./hooks/useCreateCommunityController";

export default function CreateCommunity({ onCreate }) {
  const controller = useCreateCommunityController();

  return (
    <section className="flex flex-col gap-6">
      <CreateCommunityHeader />

      <CommunityMediaSection media={controller.media} />

      <CommunityForm form={controller.form} />

      <CommunityActions actions={controller.actions} onCreate={onCreate} />
    </section>
  );
}
