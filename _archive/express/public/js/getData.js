
function getData (file) {
  return fetch (
    file,
    {
      mode: 'no-cors' ,
      headers : { 
        'Content-Type': 'application/txt',
        'Accept': 'application/txt'
      }
    }
  )
    .then(response => {
      return response.text()
    })
    .catch(err => {
      console.error(err)
    })
}