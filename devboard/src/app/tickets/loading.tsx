export default function LoadingTickets() {
  return (
    <div className="ticket-list">

      {[1,2,3,4].map((col) => (
        <div
          key={col}
          className="ticket-column-loading"
        >
          <div className="loading-column-title animate-pulse" />

          {[1,2,3].map((card) => (
            <div
              key={card}
              className="loading-ticket-card animate-pulse"
            />
          ))}
        </div>
      ))}

      <div className="loading-footer">
        <span className="animate-pulse">⏳</span>
        <span>Cargando tickets...</span>
      </div>      

    </div>
  );
}