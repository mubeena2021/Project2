//let api_k = 'uTmMWqGKHFybvB8d8g7rUP32Yo7EbhxO';

let s = document.getElementById("image-box");


document.querySelector('#search_btn').addEventListener('click', () => {
  let searchTerm = document.getElementById('search_item').value;
  let num_limit = document.getElementById('displayNumber').value;


let fetchPromise = fetch(`https://api.giphy.com/v1/gifs/search?api_key=uTmMWqGKHFybvB8d8g7rUP32Yo7EbhxO&q=${searchTerm}&limit=${num_limit}&offset=0&rating=g&lang=en`);
fetchPromise.then(response => {
  return response.json();
}).then(data => {

console.log(data);

document.getElementById('image-box').innerHTML = ""; 
 data.data.forEach(val => {
  let image_src =  val.images.fixed_width_downsampled.url;
  let c1 = document.createElement("img");
  c1.src = image_src;
  s.appendChild(c1);
 });


})
})