$(() => {
  $('form').submit(uploadImage)

})

function uploadImage(event) {
  event.preventDefault()
  let img = $('input[type=file]').prop('files')[0]
  let formData = new FormData()
  formData.append("image", img)
  console.log(formData);
  $.ajax({
    url: 'https://realestate-rentals.herokuapp.com/image',
    data: formData,
    processData: false,
    contentType: false,
    type: 'POST',
    success: data => {
      console.log('IT DID IT');
    },
    fail: error => {
      console.log(error);
    }
  })
}
