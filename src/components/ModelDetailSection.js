import React from "react";

export const ModelDetailSection = ({ sectionId, heading, content }) => {
  return (
    <section id={sectionId}>
      <h1>{heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};
