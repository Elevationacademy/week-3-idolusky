$.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function (result) {
    console.log(result.items[0].volumeInfo.description)
})
