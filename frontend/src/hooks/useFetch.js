import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Basic fetch hook using axios; replace URLs with real API endpoints.
 * Usage: const { data, loading, error, refetch } = useFetch('/api/products?q=phone')
 */
export default function useFetch(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  const fetcher = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps.length ? deps : [url]);

  return { data, loading, error, refetch: fetcher };
}
