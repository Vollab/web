const breakpoints = require('./breakpoints')

module.exports = {
  ...breakpoints,

  hxs: { raw: `(min-height: ${breakpoints.hxs})` },
  hsm: { raw: `(min-height: ${breakpoints.hsm})` },
  hmd: { raw: `(min-height: ${breakpoints.hmd})` },
  hlg: { raw: `(min-height: ${breakpoints.hlg})` },

  max_hsm: { raw: `(max-height: ${breakpoints.hsm})` }
}
