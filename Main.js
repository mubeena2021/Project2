
const apiKey = "uTmMWqGKHFybvB8d8g7rUP32Yo7EbhxO";
let output = document.getElementById("image-box");

window.addEventListener('load', () => {
 
document.querySelector('#search_btn').addEventListener('click', () => {
  let searchTerm = document.getElementById('search_item').value;
  let num_limit = document.getElementById('displayNumber').value;


let fetchPromise = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${num_limit}&offset=0&rating=g&lang=en`);
fetchPromise.then(response => {
  return response.json();
}).then(data => {

console.log(data);

document.getElementById('image-box').innerHTML = ""; 
 data.data.forEach(val => {
  let image_src =  val.images.fixed_width.url;
  let c1 = document.createElement("img");
  c1.classList = "img-thumbnail rounded my-auto mx-auto ";
  c1.src = image_src;
  output.appendChild(c1);
     });
   });
  });
});