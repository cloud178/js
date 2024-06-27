"use strict"

const basketball = {
    country: "USA",
    league: "NBA" 
}

console.log(basketball.league)

// add property
basketball.sportsman = "LeBron"

console.log(basketball.sportsman)

// change country
basketball.country = "Canada"

console.log(basketball.country)

console.log(basketball)
console.log(`type of basketball is: ${typeof basketball}`)

delete basketball.league

console.log(basketball)
