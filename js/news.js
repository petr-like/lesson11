let apiKey = '24b4f3580d754a929e72f26298be2481';
let url = 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey='

let dataHtml = '';

$(document).ready(function () {
    fetch(`${url}${apiKey}`) // Сюда мы подставлем ссылку
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            contentData(data.articles);
        })
        .catch(alert);

});

function contentData(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].content ? addNews(data[i]) : null;
    }

    $(".data").html(dataHtml);
};

function addNews(news) {
    dataHtml +=
        `<div class="content">
            <div class="title">${news.title}</div>
            <div class="news">
                <div class="text">
                    <div class="image">
                        <img src="${news.urlToImage}" alt="Картинка">
                        ${news.content}
                    </div>
                </div>
            </div>
        </div>`;
};