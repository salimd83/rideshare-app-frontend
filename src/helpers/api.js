async function api(method, path, data, secure = false) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (secure)
    options.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  if (data) options.body = JSON.stringify(data);
  const response = await fetch(`http://localhost:3001${path}`, options);
  const results = await response.json();
  if (!response.ok) throw new Error(results.message);
  return results;
}

export default api;
