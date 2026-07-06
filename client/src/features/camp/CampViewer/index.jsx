import React from "react";
import CampDetails from "./CampDetails";
import Discussion from "./Discussion";
import { TriangleAlert } from "lucide-react";
import { useParams } from "react-router-dom";
const CampViewer = () => {
  const { campSlug, communitySlug } = useParams();
  return (
    <>
      <CampDetails campSlug={campSlug} communitySlug={communitySlug} />
      <Discussion campSlug={campSlug} communitySlug={communitySlug} />
    </>
  );
};

export default CampViewer;
