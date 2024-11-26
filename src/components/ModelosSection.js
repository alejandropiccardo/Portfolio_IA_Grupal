import React from "react";

export const ModelosSection = ({ sectionId, heading, content }) => {
  return (
    <section id={sectionId}>
      <h2>{heading}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};
