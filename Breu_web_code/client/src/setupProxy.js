const { createProxyMiddleware } = require("http-proxy-middleware");

//Proxy setup to avoid corse error from localhost
module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_AUTH_URL,
      changeOrigin: true,
    })
  );
};
