var avg =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length
console.log(`The average price is $${avg.toFixed(2)}`)
document.querySelector(
  "#answer1"
).innerHTML = `The average price is $${avg.toFixed(2)}`

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

// let GBP = items.filter(function(GBP) {
//   if ((GBP = true)) return title && price
// })

// console.log(GBP)
// document.querySelector("#answer3").innerHTML = GBP

var wood = items.filter(function(item) {
  return item.title
})

console.log(wood)
document.querySelector("#answer4").innerHTML = wood
