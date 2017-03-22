$(document).ready(function() {

    $.get('/house').then(myHouses);

    function myHouses(houses) {
      houses.forEach(function (house){
        $('.myHouses').append($(`<article class="eachHouse col-md-4 col-sm-6>"
        <img src="http://placehold.it/120x120">
        </article>`))
      })
    }









})
