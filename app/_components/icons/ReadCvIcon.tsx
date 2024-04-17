import { ComponentPropsWithoutRef } from "react"

export const ReadCvIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
  return (
    <svg width={props.size} height={props.size} preserveAspectRatio="xMidYMid" viewBox="0 0 28 28" {...props}><path fill="currentColor" fillRule="evenodd" d="m6.841 21.4 9.659 2.587a2.75 2.75 0 0 0 3.368-1.945l3.236-12.074A2.75 2.75 0 0 0 21.16 6.6L11.5 4.013a2.75 2.75 0 0 0-3.368 1.944L4.897 18.032A2.75 2.75 0 0 0 6.841 21.4zm4.604-13.461a.75.75 0 0 1 .292.019l-.001.002L18.98 9.9a.749.749 0 0 1-.088 1.478.75.75 0 0 1-.299-.03l-7.245-1.94a.75.75 0 0 1 .097-1.47zm-1.106 3.245a.75.75 0 0 1 .557-.086l7.244 1.94a.75.75 0 0 1-.388 1.45l-7.245-1.942a.75.75 0 0 1-.168-1.362zm-.854 3.128a.75.75 0 0 0 .181 1.374l4.83 1.294a.75.75 0 1 0 .388-1.449l-4.83-1.294a.75.75 0 0 0-.569.075z" clipRule="evenodd"/></svg>
  )
}