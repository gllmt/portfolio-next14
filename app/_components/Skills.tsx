import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { TailWindCssIcon } from "./icons/TailWindCssIcon"
import { OpenAiIcon } from "./icons/OpenAiIcon"

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What I do
      </h2>
      <div>

      <div className="flex max-md:flex-col gap-4">

        <div className="flex flex-col gap-2">
            <ReactIcon size={42} className="animate-spin" style={{animationDuration:"10s"}} />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
            <p className="text-sm text-muted-foreground">My main Framework is <Code>React</Code>. I also use <Code>Next.js</Code> as a backend and frontend framework.</p>
        </div>

        <div className="flex flex-col gap-2">
            <TailWindCssIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">I can create <u>beautifull</u> application in <i>seconds</i> using <Code>Tailwind CSS</Code>.</p>
        </div>

        <div className="flex flex-col gap-2">
            <OpenAiIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">AI Integration</h3>
            <p className="text-sm text-muted-foreground">I am an expert of integrating AI in your application to create a perfect user experience, powered by <Code>OpenAI</Code>.</p>
        </div>
      </div>

      </div>
    </Section>
  )
}