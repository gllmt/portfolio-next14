import { Section } from "./Section"

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2>Pierre Guillemot</h2>
        <h3>Frontend Developper</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis, itaque doloremque quos voluptatibus impedit est ipsa et aliquid. Deleniti reprehenderit est nostrum delectus animi magni officia! Obcaecati, doloremque aliquid!</p>
      </div>
      <div className="flex-1">
        <img src="https://avatars.githubusercontent.com/u/29959267?v=4" alt="Pierre Picture" className="w-full h-auto" />
      </div>
    </Section>
  )
}