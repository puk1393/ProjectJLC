import type { Project } from "@/features/projects";
import { Button, Input } from '@/shared/ui/atoms';
import { Modal }  from '@/shared/ui/molecules'

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

    <Modal>
      <Modal.Trigger>
        <Button variant="secondary" size="lg">Crear proyecto</Button>
      </Modal.Trigger>

      <Modal.Content>
        <Modal.Header>Nuevo proyecto</Modal.Header>
        <Modal.Body><span>Nombre:</span> <Input inputSize="sm" variant="default" placeholder="Nombre" /> </Modal.Body>
        <Modal.Body><span>Descripción:</span> <Input inputSize="sm" variant="success" placeholder="Descripción" /> </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="sm" onClick={() => alert("Guardando el proyecto")}>Guardar</Button>
        </Modal.Footer>
      </Modal.Content>

    </Modal>    
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