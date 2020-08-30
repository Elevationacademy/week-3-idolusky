// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: { unit: "hr", amt: 9 },
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })

// let userStuff = JSON.parse(localStorage.personalData)
// // console.log(userStuff)

// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }

// localStorage.setItem('userStorage', JSON.stringify(userStorage))
// let data = JSON.parse(localStorage.userStorage)
// console.log(data.cart[1].count);


// exercise 1

const wisdom = []

const render = function () {

}

$('button').on('click', function () {

    const data = $('input').val()
    $('#container').append(`<div id='text'> ${data}</div>`)
    wisdom.push({ text: data })
    if (wisdom.length % 2 == 0) {
        localStorage.wisdom = JSON.stringify(wisdom)
    }
})

let displayData = $('#container').append(`<div>${localStorage.wisdom}</div>`)
console.log(localStorage.wisdom)
console.log(wisdom);
