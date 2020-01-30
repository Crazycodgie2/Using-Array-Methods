var avg =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length
console.log(`The average price is $${avg.toFixed(2)}`)
document.querySelector(
  "#answer1"
).innerHTML = `The average price is $${avg.toFixed(2)}`
////////////////////////////////////////////////////////////////
let between = items.filter(function(a) {
  return a.price > 14.0 && a.price < 18.0
})
var final = between
  .map(function(item) {
    return item.title + "\n\n"
  })
  .join("")

console.log(between)
document.querySelector("#answer2").innerHTML = final
////////////////////////////////////////////////////////////////
let gpbCode = items.filter(function(str) {
  return str.currency_code === "GBP"
})

console.log(gpbCode)

let HTML2 = ""
gpbCode.forEach(function(op) {
  HTML2 += op.title + "<br>"
})

document.querySelector("#answer3").innerHTML = `${HTML2} costs $18`

////////////////////////////////////////////////////////////////

let objwood = items.filter(function(x) {
  return x.materials.includes(`wood`)
})

console.log(objwood)

let HTML3 = ""
objwood.forEach(function(wod) {
  HTML3 += wod.title + "<br>"
})

document.querySelector("#answer4").innerHTML = `${HTML3}`

////////////////////////////////////////////////////////////
let eMaterials = items.filter(function(v) {
  return v.materials.length >= 8
})

console.log(eMaterials)

let HTML4 = ""
eMaterials.forEach(function(item) {
  HTML4 += item.title + "<br>"
  item.materials.forEach(function(material) {
    HTML4 += material + "<br>"
  })
})

document.querySelector("#answer5").innerHTML = `${HTML4}`

/////////////////////////////////////////////////////////

let sellers = items.filter(function(people) {
  return people.who_made === "i_did"
})

console.log(sellers)

console.log(sellers.length)

document.querySelector(
  "#answer6"
).innerHTML = `${sellers.length} were made by their sellers.`
