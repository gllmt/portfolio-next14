"use client";
import { Section } from "./Section"
import React, { useState } from 'react';

function getYear() {
  const today = new Date();
  const year = today.getFullYear();
  // const month = today.getMonth() + 1;
  // const date = today.getDate();
  return `${year}`;
}

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(getYear());

  return (
    <footer className="bg-card">
      <Section className="py-8 flex items-center">
        <p className="text-muted-foreground text-sm">©Gllmt - {currentYear}</p>
      </Section>
    </footer>
  )
}