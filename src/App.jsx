import React from "react";
import Header from "./components/molecules/organisms/Header";
import HomePage from "./components/molecules/organisms/pages/HomePage";
import { AuthProvider } from "./context/AuthContext"; // importa tu provider

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center p-6">
          <div className="w-full max-w-5xl">
            <HomePage />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
