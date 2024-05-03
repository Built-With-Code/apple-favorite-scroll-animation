"use client";

import Section from "./components/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex justify-center items-center bg-neutral-50">
        <h1 className="font-bold text-neutral-900 text-5xl">Hero section</h1>
      </section>
      <section>
        <Section>Welcome to the era of scroll animations.</Section>
        <Section>
          This demo seamlessly blends video content with aesthetic interactions.
        </Section>
        <Section>You navigate simply by scrolling.</Section>
        <Section>You've never seen everything like this before.</Section>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-neutral-50">
        <h1 className="font-bold text-neutral-900 text-5xl">Another section</h1>
      </section>
    </main>
  );
}
