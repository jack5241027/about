/* -------------------------------------
//   Base
// ------------------------------------- */

let baseConfig = {}

/* ----- Borders & Box Shadow ----- */

baseConfig['b-v-borderRadius'] = '3px'
baseConfig['b-v-borderStyle'] = 'solid'
baseConfig['b-v-borderWidth'] = '2px'
baseConfig['b-v-boxShadow'] = '0 2px 0 rgba($jet, 0.25)'

/* ----- Typography ----- */

baseConfig['b-v-fontFamily-heading'] = 'OpenSans, sans-serif'
baseConfig['b-v-fontFamily'] = 'Open Sans, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, sans-serif !default'
baseConfig['b-v-fontSize'] = '16px'
baseConfig['b-v-fontSize-s'] = '75%'
baseConfig['b-v-fontSize-m'] = '90%'
baseConfig['b-v-fontSize-l'] = '115%'
baseConfig['b-v-lineHeight'] = '1.5'

/* ----- Sizing ----- */

baseConfig['b-v-space'] = 'calc(20 / 16 * 1em)'
baseConfig['b-v-space-xs'] = baseConfig['b-v-space']
baseConfig['b-v-space-s'] = `calc(0.5 * ${baseConfig['b-v-space']})`
baseConfig['b-v-space-l'] = `calc(2 * ${baseConfig['b-v-space']})`
baseConfig['b-v-space-xl'] = `calc(4 * ${baseConfig['b-v-space']})`

/* -------------------------------------
//   Components
// ------------------------------------- */

/* ----- Grid ----- */

baseConfig['g-s'] = '640px'
baseConfig['g-m'] = '960px'
baseConfig['g-l'] = '1441px'

/* -------------------------------------
//   Structures
// ------------------------------------- */

export default baseConfig
