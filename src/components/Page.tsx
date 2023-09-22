import { FrankContentItem, Franklanguage } from "frank-react-sdk";
import { Section } from "@/components/Section";
import { SectionContent } from "./SectionContent";


interface DataFormat {
    name: string;
    title: string;
    sections: FrankContentItem[];
 
}

export function Page({ item, language }: { item: FrankContentItem, language? : Franklanguage }) {
    const data = item.data as DataFormat;
  
    return (
      <>
        {data.sections.map((section) => (
            <Section key={section.contentId}>
                <SectionContent
                    section={section}
                    language={language}
                ></SectionContent>
          </Section>
        ))}
      </>
    );
  }
  
