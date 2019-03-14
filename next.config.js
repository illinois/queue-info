const nextMDX = require('@zeit/next-mdx')
const withCSS = require('@zeit/next-css')
const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = nextMDX({
  extension: /\/(pages|blog)\/(.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism],
  },
})

const config = {
  pageExtensions: ['jsx', 'js', 'mdx'],
}

module.exports = withCSS(withMDX(config))
