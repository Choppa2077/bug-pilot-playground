export default function AppsBannerCard() {
  return (
    <div
      style={{
        backgroundColor: '#1a1a2e',
        borderRadius: 12,
        padding: 24,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h2 style={{ margin: 0, color: '#ffffff' }}>Discover apps</h2>
        <p style={{ margin: 0, color: '#a0a0b0' }}>Find new tools to try</p>
      </div>
      <button
        style={{
          backgroundColor: '#ffffff',
          color: '#1a1a2e',
          border: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Try
      </button>
    </div>
  );
}
