// section header component

const html = require('bel')
const css = require('sheetify')

module.exports = (icon, text) => {
  return html`<h2 class="mb4">${icon} <span class="near-black bg-yellow pv1 ph3">${text}</span></h2>`
}
