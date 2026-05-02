interface AppsBannerCardProps {
  title?: string;
  subtitle?: string;
  onTryPress?: () => void;
}

export function AppsBannerCard({
  title = "Discover apps",
  subtitle = "Find new tools to try",
  onTryPress,
}: AppsBannerCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#1a1a2e',
        borderRadius: 12,
        padding: 16,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h2 style={{ margin: 0, color: '#ffffff' }}>{title}</h2>
        <p style={{ margin: 0, color: '#a0a0b0' }}>{subtitle}</p>
      </div>
      <button
        onClick={onTryPress}
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
