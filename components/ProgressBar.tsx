import React from "react";

interface ProgressBarProps {
  progress: number; // 0–100
  label?: string;
}

export function ProgressBar({ progress, label }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <div style={{ padding: "8px 16px" }}>
      {label && (
        <p style={{ color: "#333333", fontSize: 12, marginBottom: 4 }}>{label}</p>
      )}
      <div
        style={{
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
          height: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#22c55e",
            height: "100%",
            width: `${clamped}%`,
            borderRadius: 4,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
