export const fetchConfig = (method, data, token) => {
  let config;

  if (data === null && (method === "GET" || method === "DELETE")) {
    config = {
      method,
    };
  }

  if (data instanceof FormData && (method === "PUT" || method === "POST")) {
    config = {
      method,
      headers: {},
      body: data instanceof FormData ? data : JSON.stringify(data),
    };
  } else if (method === "PUT" || method === "POST") {
    config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};
