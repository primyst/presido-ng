import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-2 text-sm">
      © {new Date().getFullYear()} Nation Builder | Built by <a
        href="https://aq-portfolio-rose.vercel.app/"
        className="text-cyan-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        PRIMYST
      </a>
    </footer>
  );
}
