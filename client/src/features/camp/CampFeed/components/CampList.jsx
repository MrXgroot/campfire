import React from "react";
import CampCard from "./CampCard";
const CampList = ({ camps }) => {
  return (
    <section className="space-y-2.5">
      {camps.map((camp) => (
        <CampCard key={camp.id} camp={camp} />
      ))}
    </section>
  );
};

export default CampList;
