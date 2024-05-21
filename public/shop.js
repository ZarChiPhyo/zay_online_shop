const imgOverlay = document.querySelectorAll('.img-overlay');
//console.log(imgOverlay[1]);


for(let index=0; index<imgOverlay.length; index++){
    imgOverlay[index].addEventListener('mouseenter',overlay);
}
function overlay(event){
let target = event.target;
let img_parent = target.parentElement;
//console.log(img_parent);
//console.log(target);
let ul = document.createElement('ul');
ul.classList.add('list');
ul.classList.add('flex');
ul.classList.add('flex-col');
ul.classList.add('justify-center');
ul.classList.add('w-auto');
//ul.classList.add('');
//ul.classList.add('');
ul.classList.add('absolute');
ul.classList.add("right-0");
ul.classList.add("top-0");
let li1 = document.createElement('li');
li1.classList.add('my-2');
let li2 = document.createElement('li');
li2.classList.add('my-2');
let li3 = document.createElement('li');
li3.classList.add('my-2')
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
a1.setAttribute('href','single-shop.html');
a2.setAttribute('href','single-shop.html');
a3.setAttribute('href','single-shop.html');
a1.innerHTML = "<i class='px-4 py-3 rounded-md bg-emerald-500 text-white text-xl fa-regular fa-heart'></i>";
a2.innerHTML = "<i class='px-4 py-3 rounded-md bg-emerald-500 text-white text-lg fa-regular fa-eye'></i>";
a3.innerHTML = "<i class='px-4 py-3 rounded-md bg-emerald-500 text-white text-lg fa-solid fa-cart-shopping'></i>";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
img_parent.appendChild(ul);

// ul.addEventListener('mouseenter',function(){
//     ul.classList.add('inline-block');
// })
//console.log(ul);

}

for(let index=0; index<imgOverlay.length; index++){
    imgOverlay[index].addEventListener('mouseout',mouseOut);
}

function mouseOut(event){

    let target = event.target;
    let parent = target.parentElement;
    let ul = target.nextElementSibling;
    //console.log(ul);
    parent.removeChild(ul);
}

