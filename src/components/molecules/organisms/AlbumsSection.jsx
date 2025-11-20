import React, { useState, useEffect } from "react";
import { fetchAlbums } from "../../../api/api";
import TableHeaders from "../TableHeaders";
import Spinner from "../../atoms/Spinner";
import Button from "../../atoms/Button";

const LIMIT = 10;

export default function AlbumsSection() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [error, setError] = useState("");

  async function loadMore() {
    if (loading || allLoaded) return;
    setLoading(true);
    setError("");
    try {
      const start = page * LIMIT;
      const data = await fetchAlbums(start, LIMIT);
      if (!Array.isArray(data) || data.length === 0) {
        setAllLoaded(true);
      } else {
        setAlbums((prev) => [...prev, ...data]);
        setPage((p) => p + 1);
        if (data.length < LIMIT) setAllLoaded(true);
      }
    } catch (err) {
      console.error(err);
      setError("No fue posible obtener los datos. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Álbumes</h2>
        <div className="text-sm text-slate-500">{albums.length} cargados</div>
      </div>

      {error && <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <TableHeaders />
          <tbody className="bg-white divide-y divide-slate-100">
            {albums.length === 0 && !loading && (
              <tr>
                <td colSpan="3" className="px-4 py-6 text-center text-slate-500">No hay registros cargados.</td>
              </tr>
            )}

            {albums.map((a) => (
              <tr key={a.id}>
                <td className="px-4 py-3 text-sm text-slate-700">{a.id}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{a.userId}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{a.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-4">
        {!allLoaded ? (
          <Button
            onClick={loadMore}
            disabled={loading}
            className={`px-4 py-2 rounded-md font-medium ${loading ? "bg-slate-200 text-slate-500" : "bg-sky-600 text-white hover:bg-sky-700"}`}
          >
            {loading ? "Cargando..." : "Ver más"}
          </Button>
        ) : (
          <span className="text-sm text-slate-500">Todos los registros cargados.</span>
        )}

        <div className="ml-auto text-sm text-slate-400">Fuente: jsonplaceholder.typicode.com</div>
        {loading && <div className="ml-3"><Spinner /></div>}
      </div>
    </div>
  );
}
