// SupportBot.tsx

import { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";

declare global {
  interface Window {
    _smartsupp?: any;
    smartsupp?: any;
  }
}

const SupportBot = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent loading twice
    if (document.getElementById("smartsupp-script")) return;

    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key =
      "930035d1a86d17b0d283689440aee2350e26cbef";

    const script = document.createElement("script");
    script.id = "smartsupp-script";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js";
    script.charset = "utf-8";

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(
        "smartsupp-script"
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-[100px] left-5 z-[9999] flex flex-col items-center space-y-1">
      <button
        onClick={() =>
          (window.location.href =
            "mailto:elitealphacapital@outlook.com")
        }
        aria-label="Email Support"
        className="p-3 rounded-full shadow-lg bg-blue-800 hover:bg-blue-700 text-white transition"
      >
        <FaEnvelope size={18} />
      </button>

      <span className="text-sm text-black font-bold">
        Email Us
      </span>
    </div>
  );
};

export default SupportBot;