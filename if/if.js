"use strict"

let year = 2010

if (year == 2010) {
    console.log('hello');
}

year = 2010

// the final else is not necessarily
if (year == 2011) {
    console.log('hello');
} else if (year > 2011) {
    console.log('wow');
} else {
    console.log(':(')
}

year == 1 ? console.log('yes') : console.log("no")

