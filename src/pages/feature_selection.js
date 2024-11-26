import React from "react";
import { graphql } from "gatsby";
import { ModelDetailSection } from "../components/ModelDetailSection";
import { InterestsSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function FeatureSelectionPage({ data }) {
  const { html } = data.markdownRemark;

  return (
    <>
      <Seo title="FeatureSelection" />
      <Page useSplashScreenAnimation>
        <ModelDetailSection sectionId="feature_selection" heading="" content={html} />
        <InterestsSection sectionId="details" heading="Herramientas:" />
      </Page>
    </>
  );
}


export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/feature_selection.md/" }) {
      html
    }
  }
`;
