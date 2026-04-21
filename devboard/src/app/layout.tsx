'use client'; // Necesario porque este layout usa providers y componentes que dependen de hooks de React

import "./globals.css";
import { Layout } from "@/shared";
import Tabs from "@/shared/ui/organisms/Tabs";
import { AppProviders } from "@/shared/providers/AppProviders";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        <AppProviders>
          <Layout>
            <Tabs>
              <Tabs.List>
                <Tabs.Tab href="/projects"><span>Proyectos</span></Tabs.Tab>
                <Tabs.Tab href="/tickets"><span>Tickets</span></Tabs.Tab>
                <Tabs.Tab href="/about"><span>Acerca de</span></Tabs.Tab>
              </Tabs.List>
            </Tabs>
            {children}
          </Layout>
        </AppProviders>
      </body>
    </html>
  );
}