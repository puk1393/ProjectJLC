import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de | DevBoard",
  description:"Información sobre la plataforma DevBoard.",
  openGraph: {
    title: "Acerca de | DevBoard",
    description:
      "Información sobre la plataforma DevBoard.",
  },
};

export default async function AboutPage() {
  await new Promise(r => setTimeout(r, 2000));

  return (
    <div className="about-text">
      <h1>Proyecto Jeremy Lewis React Avanzado</h1>

      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Tecnología"
        width={420}
        height={320}
      />

      <p>Plataforma para gestión de proyectos y tickets.</p>
    </div>
  );
}