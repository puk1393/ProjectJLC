import type { Project } from "@/features/projects";

interface Props {
  projects: Project[];
}

export const ProjectListPresentation = ({ projects }: Props) => {
  return (
    <div style={{ padding: "0px" }}>
      <h1>Lista de proyectos</h1>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "50px" }}>
        <thead>
          <tr>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Descripción</th>
            <th style={thStyle}>Cantidad de Tickets Abiertos</th>
            <th style={thStyle}>Progreso General</th>
          </tr>
        </thead>

        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td style={tdStyle}>{project.name}</td>
              <td style={tdStyle}>{project.description}</td>
              <td style={tdStyle}>{project.tickets}</td>
              <td style={tdStyle}>{project.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#f5f5f5",
  textAlign: "center" as const,
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};