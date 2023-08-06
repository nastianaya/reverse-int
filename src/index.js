module.exports = function reverse (n) {
const str = n.toString()
const spl = str.split('')
const r = spl.reverse()
const res = r.join('')
const result = parseFloat(res)

return (result)
}
