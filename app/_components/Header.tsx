import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ReadCvIcon } from "./icons/ReadCvIcon"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary">Pierre.dev</h1>
        <div className="flex-1"/>
        <ul className="flex items-center gap-3">
          <Link href="https://github.com/gllmt" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link href="https://read.cv/pierreg" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <ReadCvIcon size={16} className="text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/gllmt/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  )
}
