$(() => {
    $('form').submit(createNewHouse)

})

function createNewHouse(event) {
    event.preventDefault()

    var newHouse = {};
    newHouse.address = $('.newAddress').val()
    newHouse.city = $('.newCity').val()
    newHouse.state = $('.newState').val()
    newHouse.zipcode = $('.newZipcode').val()
    newHouse.bedrooms = $('.newBedroom').val()
    newHouse.baths = $('.newBaths').val()
    newHouse.available = $('.newAvailable').val()
    newHouse.description = $('.newDescription').val()

    $.ajax({
        url: 'https://realestate-rentals.herokuapp.com/house',
        method: 'POST',
        crossDomain: true,
        data: JSON.stringify(newHouse),
        contentType: "application/json; charset=utf-8"
    })
    .then(response => {
        console.log(response);
        window.location.reload()
    }).catch(err => {
        console.log(err);
    }).then(callS3())
}

function callS3(){
    // console.log(id);
    event.preventDefault()
    let img = $('input[type=file]').prop('files')[0]
    let formData = new FormData()
    formData.append("image", img)
$.ajax({
    url: 'https://realestate-rentals.herokuapp.com/s3',
    data: formData,
    processData: false,
    contentType: false,
    type: 'POST',
    success: data => {
        console.log(data);
    },
    fail: error => {
        console.log(error);
    }
})
}
