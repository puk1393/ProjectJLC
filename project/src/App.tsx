import { Layout } from "@/shared/";
import Tabs from "./shared/components/Tabs";
import { TicketListContainer } from "@/features/tickets/";
import { ProjectListContainer } from "@/features/projects/";

function App() {
  return (
    <Layout>
      <Tabs defaultTab="projects">
        <Tabs.List>
          <Tabs.Tab id="projects">Proyectos</Tabs.Tab>
          <Tabs.Tab id="tasks">Tickets</Tabs.Tab>
          <Tabs.Tab id="about">Acerca de</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="projects">
            <ProjectListContainer />
          </Tabs.Panel>          
          <Tabs.Panel id="tasks">
            <TicketListContainer projectId="1" />
          </Tabs.Panel>
          <Tabs.Panel id="about">
            <p style={{ color: "blue", padding: "32px", textAlign: "center" }}>
              Proyecto de Jeremy Lewis de Curso React Avanzado Cenfotec
            </p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Layout>
  );
}

export default App;
