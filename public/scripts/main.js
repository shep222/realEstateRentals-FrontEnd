$(document).ready(function() {
var websiteURL = 'https://realestate-rentals.herokuapp.com'
    $.get(`${websiteURL}/house`).then(myHouses);

    function myHouses(houses) {
      console.log(houses);
      houses.forEach(function (house){
        $('.myHouses').append($(`<article class="eachHouse col-md-4 col-sm-6">
        <img src="http://placehold.it/250x250">
        <h4>Address</h4>
        <h4>Bedrooms: </h4>
        <h4>Baths: </h4>
        </article>`))
      })
    }

    $('.login').on('click', function () {
      console.log("do the login thing");

    })







})
