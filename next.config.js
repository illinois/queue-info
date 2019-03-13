const nextMDX = require('@zeit/next-mdx');

const withMDX = nextMDX({
  extension: /\/(pages|blog)\/(.+)\.mdx?$/,
});

const config = {
  pageExtensions: ['jsx', 'js', 'mdx'],
}

module.exports = withMDX(config)
