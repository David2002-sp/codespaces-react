const BASE = "https://jsonplaceholder.typicode.com";

export async function fetchAlbums(start = 0, limit = 10) {
  const res = await fetch(`${BASE}/albums?_start=${start}&_limit=${limit}`);
  if (!res.ok) throw new Error("Error obteniendo datos");
  return res.json();
}
