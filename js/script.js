/** @format */

const grid = document.querySelector(".grid");

var masonry = new Masonry(grid, {
  itemSelector: ".grid-item",
  gutter: 10,
});

fetch(
  `https://api.newsriver.io/v2/search?query=text%3Aindia&sortBy=_score&sortOrder=DESC&limit=15"-H"Authorization:sBBqsGXiYgF0Db5OV5tAw2RJGJ8y4RvmcFZNqUadelheGK9Bv5IB1GeMsSRewMmen2pHZrSf1gT2PUujH1YaQA`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
