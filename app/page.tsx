"use client";
import { AppsBannerCard } from "../components/AppsBannerCard";
import { ProgressBar } from "../components/ProgressBar";

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ padding: "0 16px", fontSize: 18, color: "#333" }}>bug-pilot playground</h1>
      <AppsBannerCard
        title="Pathway 2.0"
        subtitle="Your personalized learning journey starts here"
        onTryPress={() => alert("Try pressed!")}
      />
      <ProgressBar progress={65} label="Module completion" />
      <ProgressBar progress={30} label="Quiz score" />
    </main>
  );
}
