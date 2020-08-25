// const displayDescription = function (data) {
//     console.log(data.items[0].volumeInfo.authors)
// }
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", displayDescription)

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function (result) {
//     console.log(result);
// })


// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//     //extract the geo data of the first user

//     let lat = users[0].address.geo.lat
//     let long = users[0].address.geo.lng

//     console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
//     let catchP = users[users.length - 1].company.catchPhrase
//     console.log(catchP);
// })

const useData = function (data) {
    data.items.forEach(b => {
        console.log(`title: ${b.volumeInfo.title}, author: ${b.volumeInfo.authors}, ISBN:${b.volumeInfo.industryIdentifiers[0].identifier} `)
    })
}


// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData

// })


const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: useData,
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

// $("button").on("click", fetch)

// fetch("isbn", 9780575087057)
// fetch(9782806269171)
// fetch(1440633908)
// fetch(9781945048470)

fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")