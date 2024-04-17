/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { LucideIcon, Code, StickyNote, Rss, Atom, ArrowUpRight } from "lucide-react"
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
                url={project.url}
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
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact Me</p>
          <ContactCard 
            image="https://avatars.githubusercontent.com/u/29959267?v=4"
            mediumImage="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            name="@Gllmt"
            description="Frontend/Fullstack Developper"
          />
          <ContactCard 
            image="https://avatars.githubusercontent.com/u/29959267?v=4"
            mediumImage="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            name="@Gllmt2"
            description="Frontend/Fullstack Developper2"
          />
        </Card>
      </div>
    </Section>
  )
};

const ContactCard = (props: {
  image: string,
  mediumImage: string,
  name: string,
  description: string,
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
        <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="mr-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
    </Card>
  )
}

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
    Logo: Atom,
    title: "Pierre Guillemot",
    description: "A personal website",
    url: "https://www.pierreguillemot.com/",
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
      <div className="mr-auto">
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