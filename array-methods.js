const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const section = document.createElement('section')

// const makePlanets = () => {
//     planets.forEach((element) => {
//         const planetsP = document.createElement('P')
//         planetsP.textContent = element
//         section.appendChild(planetsP)
//         planetEl.appendChild(section)
// })
// }

// makePlanets()

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const makeUpperCase = planets.map(function(itemInArray) {
    let uppercase = itemInArray.slice(0, 1).toUpperCase() + itemInArray.slice(1)
    return uppercase    
})

// console.log(makeUpperCase)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const newFilter = planets.filter((itemInArray) => {
   let eArray = itemInArray.includes('e')
   return eArray
})

console.log(newFilter)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const newSentence = words.reduce((currentWord, next) => `${currentWord} x ${next}`)

console.log(newSentence)