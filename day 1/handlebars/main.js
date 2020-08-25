// var classData = {
//     classmates: [
//         { name: "That on gal", description: "Always has the ansswer" },
//         { name: "The weird dude", description: "Quick with a smile" },
//         { name: "Taylor", description: "Just Taylor" }
//     ]
// }

// const source = $('#people-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(classData);

// $(".people").append(newHTML)


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const animalArr = { animals: [animals] }
// console.log(animalArr)
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
const languagesArr = { languages: [languages] }

const renderAnimals = function () {
    const source = $('#animals-template').html();
    const template = Handlebars.compile(source)
    const newHTML = template(animalArr)

    $("#animals").append(newHTML)
}

const renderLanguages = function () {
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source)
    const newHTML = template(languagesArr)

    $("#languages").append(newHTML)
}

renderAnimals()
renderLanguages()