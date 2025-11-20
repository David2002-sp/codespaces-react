import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import LoginFields from "../LoginFields";
import Button from "../../atoms/Button";
import Spinner from "../../atoms/Spinner";

export default function LoginCard() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setLoading(true);
    try {
      await login(username, password);
    } catch (err) {
      setError(err.message || "Error en autenticación");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow p-6 rounded max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6 text-center">Iniciar sesión</h2>

      <form className="w-full flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        <LoginFields
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          disabled={loading}
        />

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <div className="flex justify-center w-full">
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : "Ingresar"}
          </Button>
        </div>
      </form>
    </div>
  );
}
