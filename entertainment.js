console.log("This is my index js file");
//Initialize the news api parameter
let apiKey = '11667982be9a4730b94b258153575182'
//grab the news container

let newsAccordion = document.getElementById('newsAccordian');
//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {

    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    //console.log(articles);
    let newsHtml = "";

    articles.forEach(function (element, index) {
      let news = `
            <div class="container mt-5" style="max-width: 20rem; max-height:100%; display: inline-block">
            <div class="card border-light mb-3 " style="height=100px;">
            <img class="card-img-top" src="${element["urlToImage"]}" onError="this.onerror=null;this.src='https://www.freeiconspng.com/uploads/no-image-icon-6.png';"  width="100" height="200">
            <div class="card-body">
              <h5 class="card-title">${element["title"]}</h5>
              <p class="card-text">${element["description"]}</p>
            <a href="${element['url']}" target="_blank" style="text-decoration : none;" >Read more here</a>
          </div>
        </div>
     </div>`
  

      newsHtml += news;

    });

    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured")
  }
}

xhr.send()
