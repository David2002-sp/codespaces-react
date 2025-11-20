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
  }, []);

  return (
    <section className="py-6 px-4">
      <div className="bg-white/80 shadow-md rounded-lg p-4 border border-slate-200 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h2 className="text-lg font-semibold text-slate-800">🎵 Álbumes</h2>
          <div className="text-xs text-slate-500">{albums.length} cargados</div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-3 text-xs text-red-600 bg-red-50/80 p-2 rounded-md border border-red-200">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-xs">
            <TableHeaders />
            <tbody className="bg-white/70 divide-y divide-slate-100">
              {albums.length === 0 && !loading && (
                <tr>
                  <td colSpan="3" className="px-4 py-6 text-center text-slate-500 italic">
                    No hay registros cargados.
                  </td>
                </tr>
              )}

              {albums.map((a, idx) => (
                <tr
                  key={a.id}
                  className={`hover:bg-indigo-50 transition ${
                    idx % 2 === 0 ? "bg-slate-50/60" : "bg-white/60"
                  }`}
                >
                  <td className="px-4 py-2">{a.id}</td>
                  <td className="px-4 py-2">{a.userId}</td>
                  <td className="px-4 py-2">{a.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-3">
          {!allLoaded ? (
            <Button
              onClick={loadMore}
              disabled={loading}
              className={`px-4 py-1.5 rounded-md font-medium text-sm transition ${
                loading
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed "
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {loading ? "Cargando..." : "Ver más"}
            </Button>
          ) : (
            <span className="text-xs text-green-600 flex items-center gap-1">
              ✅ Todos los registros cargados.
            </span>
          )}

          {loading && (
            <div className="ml-2">
              <Spinner size="sm" />
            </div>
          )}

          <div className="ml-auto text-xs text-slate-400 italic">
            Fuente: jsonplaceholder.typicode.com
          </div>
        </div>
      </div>
    </section>
  );
}
