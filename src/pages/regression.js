import React from "react";
import { graphql } from "gatsby";
import { ModelDetailSection } from "../components/ModelDetailSection";
import { InterestsSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function RegressionPage({ data }) {
  const { html } = data.markdownRemark;

  return (
    <>
      <Seo title="Regression" />
      <Page useSplashScreenAnimation>
        <ModelDetailSection sectionId="regression" heading="" content={html} />
        <InterestsSection sectionId="details" heading="Herramientas:" />
      </Page>
    </>
  );
}


export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/regression.md/" }) {
      html
    }
  }
`;
