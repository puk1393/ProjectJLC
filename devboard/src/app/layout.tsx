'use client';

import "./globals.css";
import { Layout } from "@/shared";
import Tabs from "@/shared/ui/organisms/Tabs";
import { AppProviders } from "@/shared/providers/AppProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppProviders>
          <Layout>
            <Tabs>
              <Tabs.List>
                <Tabs.Tab href="/projects">Proyectos</Tabs.Tab>
                <Tabs.Tab href="/tickets">Tickets</Tabs.Tab>
                <Tabs.Tab href="/about">Acerca de</Tabs.Tab>
              </Tabs.List>
            </Tabs>
            {children}
          </Layout>
        </AppProviders>
      </body>
    </html>
  );
}