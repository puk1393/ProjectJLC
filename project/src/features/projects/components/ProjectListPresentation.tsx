import type { Project } from "@/features/projects";
import { Button, Input } from '@/shared/ui/atoms';
import { Modal }  from '@/shared/ui/molecules'

interface Props {
  projects: Project[];
}

export const ProjectListPresentation = ({ projects }: Props) => {
  return (
    <div className="project-container">
      <h1 className="project-title">Lista de proyectos</h1>

      <table className="project-table">
        <thead>
          <tr>
            <th className="project-th">Nombre</th>
            <th className="project-th">Descripción</th>
            <th className="project-th">Cantidad de Tickets Abiertos</th>
            <th className="project-th">Progreso General</th>
          </tr>
        </thead>

        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className="project-td">{project.name}</td>
              <td className="project-td">{project.description}</td>
              <td className="project-td">{project.tickets}</td>
              <td className="project-td">{project.progress}</td>
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