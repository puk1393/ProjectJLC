export default function LoadingProjects() {
  return (
    <div className="loading-projects ">
      <h1
        className="animate-pulse loading-title"
      />

      <table className="loading-table">
        <thead>
          <tr>
            <th className="skeleton-th"></th>
            <th className="skeleton-th"></th>
            <th className="skeleton-th"></th>
            <th className="skeleton-th"></th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4].map((item) => (
            <tr key={item}>
              <td className="skeleton-td animate-pulse"></td>
              <td className="skeleton-td animate-pulse"></td>
              <td className="skeleton-td animate-pulse"></td>
              <td className="skeleton-td animate-pulse"></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="loading-footer">
        <span className="animate-pulse">⏳</span>
        <span>Cargando proyectos...</span>
      </div>
    </div>
  );
}