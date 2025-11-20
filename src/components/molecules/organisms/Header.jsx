import React from "react";
import useAuth from "../../../hooks/useAuth";
import Button from "../../atoms/Button";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm p-600 flex justify-between">
      <h1 className="font-semibold text-slate-800">Prueba Frontend</h1>

      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">Hola, <strong>{user.username}</strong></span>
          <Button onClick={logout} className="text-sm text-red-600 hover:underline">Cerrar sesión</Button>
        </div>
      )}
    </header>
  );
}
