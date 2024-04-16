import { ComponentPropsWithoutRef } from "react"

export const ReactIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
  return (
    <svg width={props.size} height={props.size} preserveAspectRatio="xMidYMid" viewBox="-11.5 -10.232 23 20.463" {...props}><circle r="2.05" fill="#61dafb"/><g fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
  )
}