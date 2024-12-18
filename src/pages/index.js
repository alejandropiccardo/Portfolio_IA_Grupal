import React from "react";
import {
  AboutSection,
  //ArticlesSection,
  //ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  //ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portafolio Alejandro Piccardo, Emiliano Labarthe, Lucas Martino y Juan Cabrera Machine Learning" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="Sobre Nosotros" />
        <InterestsSection sectionId="details" heading="Herramientas:" />
        {/* <ProjectsSection sectionId="features" heading="Proyectos..." /> */}
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
