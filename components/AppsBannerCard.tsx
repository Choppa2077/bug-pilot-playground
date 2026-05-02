import React from "react";

interface AppsBannerCardProps {
  title: string;
  subtitle: string;
  onTryPress: () => void;
}

export function AppsBannerCard({ title, subtitle, onTryPress }: AppsBannerCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#1a1a2e",
        borderRadius: 12,
        padding: 24,
        margin: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h2 style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold", margin: 0 }}>{title}</h2>
      <p style={{ color: "#aaaaaa", fontSize: 14, margin: 0 }}>{subtitle}</p>
      <button
        onClick={onTryPress}
        style={{
          backgroundColor: "#ff0000",
          color: "#ffffff",
          border: "none",
          borderRadius: 8,
          padding: "10px 20px",
          fontSize: 14,
          fontWeight: "bold",
          cursor: "pointer",
          alignSelf: "flex-start",
          marginTop: 8,
        }}
      >
        Try
      </button>
    </div>
  );
}
