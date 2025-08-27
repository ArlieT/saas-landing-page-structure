"use client";

import { useEffect } from "react";

export default function GradientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Dynamically load the script on the client
    const script = document.createElement("script");
    script.src = "https://craft-gradients.artcreativecode.com/embedded.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup to avoid memory leaks
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main data-craft-gradient="G4ZiA" className="min-h-screen">
      <div>{children}</div>
    </main>
  );
}
