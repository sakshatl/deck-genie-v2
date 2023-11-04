import FeatureCardsSection from "./sections/feature-cards";
import HeroCenterSection from "./sections/hero-center";
import HeroTextLeftSection from "./sections/hero-text-left";

type PageRenderType = {
  sections: []
}

export default function PageRenderer(props: PageRenderType) {
  const { sections } = props;

  return (
    <div>
      {sections.map((section: any, index: number) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </div>
  )
}

type SectionRendererType = {
  section: {
    type: string,
    layout: string
  }
}

function SectionRenderer(props: SectionRendererType) {
  const { section } = props;

  switch(section.type) {
    case "hero_section": 
      if(section.layout === "center") {
        return <HeroCenterSection />;
      } else if (section.layout === "left") {
        return <HeroTextLeftSection />;
      } else {
        return null;
      }
    
    case "feature_cards_section":
      return <FeatureCardsSection />
    
    default:
      null;
  }  
}
