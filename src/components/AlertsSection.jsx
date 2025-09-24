export const AlertsSection = () => {
  return (
    <div className="alerts-section" style={{ maxWidth: '400px' }}>
      <div className="alerts-popup">
        <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Strategic Alerts</h2>
        <div id="alert-list"></div>
        <div className="no-alerts" id="no-alerts">
          No urgent locations at this time.
        </div>
      </div>
    </div>
  );
};