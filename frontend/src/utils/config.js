export const fetchConfig = (method, data, token) => {
  const config = {
    method,
  };

  if (data) {
    config.headers = {
      "Content-Type": "application/json",
    };

    if (method === "POST" || method === "PUT") {
      config.body = JSON.stringify(data);
    }
  }

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};
