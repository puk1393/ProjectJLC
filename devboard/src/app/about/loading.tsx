export default function LoadingAbout() {
  return (
    <div className="about-text">

      <div className="loading-about-title animate-pulse" />

      <div className="loading-about-line animate-pulse" />
      <div className="loading-about-line animate-pulse" />
      <div className="loading-about-line short animate-pulse" />

      <div className="loading-footer">
        <span className="animate-pulse">⏳</span>
        <span>Cargando acerca de...</span>
      </div>

    </div>

  );
}