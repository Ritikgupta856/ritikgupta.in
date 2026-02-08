/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.flaticon.com"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = require("@next/mdx")({
  extensions: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);
