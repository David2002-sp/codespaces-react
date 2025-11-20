import React from "react";

export default function TableHeaders() {
  return (
    <thead className="bg-slate-100">
      <tr>
        <th className="px-4 py-2 text-left text-xs text-slate-500">ID</th>
        <th className="px-4 py-2 text-left text-xs text-slate-500">Usuario ID</th>
        <th className="px-4 py-2 text-left text-xs text-slate-500">Título</th>
      </tr>
    </thead>
  );
}
