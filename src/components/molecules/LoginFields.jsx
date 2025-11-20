import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function LoginFields({ username, setUsername, password, setPassword, disabled }) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Usuario</Label>
        <Input disabled={disabled} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
      </div>

      <div>
        <Label>Contraseña</Label>
        <Input type="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="1234" />
      </div>
    </div>
  );
}
