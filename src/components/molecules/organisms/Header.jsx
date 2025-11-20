import React from "react";
import useAuth from "../../../hooks/useAuth";
import Button from "../../atoms/Button";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="shadow-sm p-6 flex items-center bg-red-500 justify-between">
      {/* Contenedor del título */}
      <h1 className={`text-white text-xl font-bold ${user ? "" : "mx-auto"}`}>
        Prueba Frontend
      </h1>

      {/* Bloque de usuario */}
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-white">
            Hola, <strong>{user.username}</strong>
          </span>
          <Button
            onClick={logout}
            className="text-sm text-white hover:underline bg-red-700 px-3 py-1 rounded"
          >
            Cerrar sesión
          </Button>
        </div>
      )}
    </header>
  );
}
