"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export const LenisScroll = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}