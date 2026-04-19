'use client'; /* porque utilizamos el useAddProjetForm el cual utiliza useState */

import type { Project } from "@/features/projects";
import { useAddProjetForm } from "@/features/projects";

import { Button, Input } from "@/shared/ui/atoms";
import { Modal } from "@/shared/ui/molecules";

interface Props {
  projects: Project[];
  addProject: (project: Project) => Promise<void>;
  totalProjects: number
}

export const ProjectListPresentation = ({projects, addProject, totalProjects}: Props) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useAddProjetForm();

  return (
    <div className="project-container">
      <h1 className="project-title">
        Lista de proyectos
      </h1>

      <table className="project-table">
        <thead>
          <tr>
            <th className="project-th">Nombre</th>
            <th className="project-th">Descripción</th>
            <th className="project-th">Tickets</th>
            <th className="project-th">Progreso</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="project-td">
                {project.name}
              </td>

              <td className="project-td">
                {project.description}
              </td>

              <td className="project-td">
                {project.tickets}
              </td>

              <td className="project-td">
                {project.progress}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span>Cantidad total de proyectos: {totalProjects}</span> <br></br><br></br>
      <Modal>
        <Modal.Trigger>
          <Button variant="secondary" size="lg">
            Crear proyecto
          </Button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Header>
            Nuevo Proyecto
          </Modal.Header>

          <Modal.Body>
            <Input
              placeholder="Nombre"
              value={values.name}
              onChange={(e) => handleChange("name",e.target.value)}
              onBlur={() => handleBlur("name")}
            />

            {touched.name &&
              errors.name && (
                <small className="error-text">
                  {errors.name}
                </small>
              )}
          </Modal.Body>

          <Modal.Body>
            <Input
              placeholder="Descripción"
              value={values.description}
              onChange={(e) =>handleChange("description",e.target.value)}
              onBlur={() =>handleBlur("description")}
            />

            {touched.description &&
              errors.description && (
                <small className="error-text">
                  {errors.description}
                </small>
              )}
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                handleSubmit(
                  async () => {
                    await addProject({
                      id: crypto.randomUUID(),
                      name: values.name,
                      description: values.description,
                      tickets: 0,
                      progress: "0%",
                      status: "active",
                    });
                  }
                )
              }
            >
              {isSubmitting
                ? "Guardando..."
                : "Guardar"}
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
};