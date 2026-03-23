"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/cognition-logo.png"
            alt="Cognition"
            width={120}
            height={28}
            className="h-5 w-auto"
          />
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Cognition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
