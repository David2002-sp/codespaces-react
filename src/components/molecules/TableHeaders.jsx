import React from "react";

export default function TableHeaders() {
  return (
    <thead className="bg-slate-100">
      <tr>
        <th className="px-6 py-3 text-left text-sm text-slate-700 w-16">ID</th>
        <th className="px-6 py-3 text-left text-sm text-slate-700 w-32">Usuario ID</th>
        <th className="px-6 py-3 text-left text-sm text-slate-700 w-64">Título</th>
      </tr>
    </thead>
  );
}
