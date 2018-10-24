let apiKey = '24b4f3580d754a929e72f26298be2481';
let url = 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey='

let news;
let data = '';

fetch(`${url}${apiKey}`)
  .then((response) => {
    return response.json();
   })
  .then((data) => {
      news = data.articles;
  })
  .catch( alert );

$(document).ready(function() {
    for(let i = 0; i < 5; i++) {
        news[i].content ? addNews(news[i]) : i--;
    }

    $(".content").html(data);
});

function addNews(news) {
    data +=
        `<div class="item-news">
            <div class="title">${news.title}</div>
            <div class=""img>${news.urlImg}</div>
            <div class=""text>${news.content}</div>
        </div>`;
}
