const { redirect } = require("next/dist/next-server/server/api-utils");
const withPWA = require("next-pwa");

module.exports = {
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
