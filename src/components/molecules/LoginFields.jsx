import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function LoginFields({ username, setUsername, password, setPassword, disabled }) {
  return (
    <div className="space-y-6">
      {/* Usuario */}
      <div className="flex flex-col">
        <Label>Usuario</Label>
        <div className="mt-1">
          <Input
            disabled={disabled}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </div>
      </div>

      {/* Contraseña */}
      <div className="flex flex-col">
        <Label>Contraseña</Label>
        <div className="mt-1">
          <Input
            type="password"
            disabled={disabled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
          />
        </div>
      </div>
    </div>
  );
}
