"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <SignIn />
    </div>
  );
}
