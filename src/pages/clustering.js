import React from "react";
import { graphql } from "gatsby";
import { ModelDetailSection } from "../components/ModelDetailSection";
import { InterestsSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ClusteringPage({ data }) {
  const { html } = data.markdownRemark;

  return (
    <>
      <Seo title="Clustering" />
      <Page useSplashScreenAnimation>
        <ModelDetailSection sectionId="clustering" heading="" content={html} />
        <InterestsSection sectionId="details" heading="Herramientas:" />
      </Page>
    </>
  );
}


export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/clustering.md/" }) {
      html
    }
  }
`;
