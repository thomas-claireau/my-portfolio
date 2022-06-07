/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components'],
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
