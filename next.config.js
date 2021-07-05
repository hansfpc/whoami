const exportPathMap = async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
) {
  return {
    '/': { page: '/' },
  }
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['scontent-scl2-1.xx.fbcdn.net']
  },
  exportPathMap,
}
