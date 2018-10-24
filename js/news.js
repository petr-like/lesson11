let apiKey = '24b4f3580d754a929e72f26298be2481';
let url = 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey='

fetch(`${url}${apiKey}`)
  .then((response) => {
    return response.json();
   })
  .then((data) => {
      console.log(2, data);
  })
  .catch( alert );