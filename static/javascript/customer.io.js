/* eslint-disable */
var _cio = _cio || []
;(function() {
  let a, b, c
  a = function(f) {
    return function() {
      _cio.push([f].concat(Array.prototype.slice.call(arguments, 0)))
    }
  }
  b = ['load', 'identify', 'sidentify', 'track', 'page']
  for (c = 0; c < b.length; c++) {
    _cio[b[c]] = a(b[c])
  }
  const t = document.createElement('script')
  const s = document.getElementsByTagName('script')[0]
  t.async = true
  t.id = 'cio-tracker'
  t.setAttribute('data-site-id', '69e7f47dfab8dd91b470')
  t.src = 'https://assets.customer.io/assets/track.js'
  s.parentNode.insertBefore(t, s)
})()
