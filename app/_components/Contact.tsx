import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { TailWindCssIcon } from "./icons/TailWindCssIcon"
import { OpenAiIcon } from "./icons/OpenAiIcon"
import { ContactCard } from "./ContactCard"

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact Me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to help you.
      </h2>

        <div className="flex max-md:flex-col gap-4 w-full">
          <ContactCard className="flex-1"
            url="https://github.com/gllmt"
            image="https://avatars.githubusercontent.com/u/29959267?v=4"
            mediumImage="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            name="@Gllmt"
            description="Github"
          />
          <ContactCard className="flex-1"
            url="https://www.linkedin.com/in/gllmt/"
            image="https://avatars.githubusercontent.com/u/29959267?v=4"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            name="Pierre Guillemot"
            description="Linkedin"
          />
          <ContactCard className="flex-1"
            url="mailto:contact@pierreguillemot.com"
            image="https://avatars.githubusercontent.com/u/29959267?v=4"
            mediumImage="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
            name="Pierre Guillemot"
            description="Contact me by mail"
          />
        </div>

    </Section>
  )
}