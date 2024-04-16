/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { LucideIcon, Code, StickyNote, Rss, Atom } from "lucide-react"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side Fun, projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject 
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="w-full flex-[2] flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work 
                key={index}
                {...work}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  )
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "A code editor for the web",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "Powerline",
    description: "A powerfull tool for the web",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Powerpost",
    description: "A platform for developers",
    url: "/",
  },
  {
    Logo: Atom,
    title: "Pierre Guillemot",
    description: "A personal website",
    url: "/",
  },
]

type SideProjectProps = {
  Logo: LucideIcon,
  title: string,
  description: string,
  url: string,
}

const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  )
}

const WORKS: WorkProps[] = [
  {
    image: "https://avatars.githubusercontent.com/u/29959267?v=4",
    title: "Independent",
    role: "Frontend/Fullstack Developper",
    date: "2024 - Present",
    url: "https://www.pierreguillemot.com/",
    frelance: true,
  },
  {
    image: "https://media.licdn.com/dms/image/C510BAQGMLzZK9aBRgg/company-logo_100_100/0/1631323075242?e=1721260800&v=beta&t=mNUUn6hfYf_3ji5ZTXmveBCRoKRM2bqrM3FTLv8SJVU",
    title: "Adveris",
    role: "Frontend Developper",
    date: "2022 - 2024",
    url: "https://www.adveris.fr/",
  },
  {
    image: "https://media.licdn.com/dms/image/C4E0BAQE-cNUfebmjtA/company-logo_100_100/0/1630600765157/w2pdigital_logo?e=1721260800&v=beta&t=Oo9dQWkkrAL4-2T7iHsNzfUidBu-lAEm_qrnApuClVY",
    title: "W2P Digital",
    role: "Frontend Developper",
    date: "2021 - 2022",
    url: "https://w2p-digital.com/",
  },
  {
    image: "https://media.licdn.com/dms/image/C560BAQGyA1CtAMmQbg/company-logo_100_100/0/1630594517323/mirumsoutheurope_logo?e=1721260800&v=beta&t=8ozaeHPB_Fkrb90fn9eNzMLWu4I4bnQz6hCTdIX9_2A",
    title: "Mirum South Europe",
    role: "Frontend Developper",
    date: "2019 - 2021",
    url: "https://www.mirum.com/",
  },
]

type WorkProps = {
  image: string,
  title: string,
  role: string,
  date: string,
  url: string,
  frelance?: boolean,
}

const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
      {/* <span className="bg-accent text-accent-foreground p-3 rounded-sm"> */}
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
      {/* </span> */}
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.frelance && <Badge variant="outline">Freelance</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  )
}