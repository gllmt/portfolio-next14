/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import Link from "next/link"
import { Code } from "./Code"

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-semi-bold text-4xl text-primary">Pierre Guillemot</h2>
        <h3 className="text-2xl">Frontend Developper</h3>
        <p className="text-base">Creating code with <Link href="https://github.com/gllmt">
          <Code className="inline-flex items-center gap-2"><ReactIcon size={16} className="inline" /> React.js </Code></Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <div className="inline-block rounded-full overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/29959267?v=4" alt="Pierre Picture" className="w-full h-auto max-w-xs" />
        </div>
      </div>
    </Section>
  )
}