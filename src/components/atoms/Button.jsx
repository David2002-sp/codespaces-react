import React from "react";

export default function Button({ children, onClick, type = "button", disabled = false, variant = "primary" }) {
  const styles = {
    primary: "bg-sky-600 hover:bg-sky-700 text-white",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-700",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium ${styles[variant]} ${disabled ? "opacity-60" : ""}`}
    >
      {children}
    </button>
  );
}
