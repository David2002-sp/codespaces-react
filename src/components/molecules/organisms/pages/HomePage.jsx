import React from "react";
import useAuth from "../../../../hooks/useAuth";
import LoginCard from "../LoginCard";
import AlbumsSection from "../AlbumsSection";

export default function HomePage() {
  const { user } = useAuth();
  return <div>{!user ? <LoginCard /> : <AlbumsSection />}</div>;
}
