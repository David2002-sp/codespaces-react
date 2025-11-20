import React from "react";






export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="ml-w-30 px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-300"
    />
  );
}
