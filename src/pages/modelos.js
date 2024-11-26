import React from "react";
import { graphql } from "gatsby";
import { ModelosSection } from "../components/ModelosSection";
import { InterestsSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ModelsPage({ data }) {
  const { html } = data.markdownRemark; // Obtenemos el contenido HTML del archivo Markdown

  return (
    <>
      <Seo title="Modelos Machine Learning" />
      <Page useSplashScreenAnimation>
        <ModelosSection sectionId="modelos" heading="" content={html} />
        <InterestsSection sectionId="details" heading="Herramientas:" />
      </Page>
    </>
  );
}

// Consulta GraphQL para obtener el contenido del archivo modelos.md
export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/modelos/modelos.md/" }) {
      html
    }
  }
`;
