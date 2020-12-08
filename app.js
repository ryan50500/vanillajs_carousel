// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//   select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// each person
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');




one.innerHTML = 
`<div class="img-container">
<img src="${reviews[0].img}" class="person-img" alt="" />
</div>
<h4 class="author">${reviews[0].name}</h4>
<p class="job">${reviews[0].job}</p>
<p class="info">
${reviews[0].text}
</p>
`

two.innerHTML = 
`<div class="img-container">
<img src="${reviews[1].img}" class="person-img" alt="" />
</div>
<h4 class="author">${reviews[1].name}</h4>
<p class="job">${reviews[1].job}</p>
<p class="info">
${reviews[1].text}
</p>
`

three.innerHTML = 
`<div class="img-container">
<img src="${reviews[2].img}" class="person-img" alt="" />
</div>
<h4 class="author">${reviews[2].name}</h4>
<p class="job">${reviews[2].job}</p>
<p class="info">
${reviews[2].text}
</p>
`

four.innerHTML = 
`<div class="img-container">
<img src="${reviews[3].img}" class="person-img" alt="" />
</div>
<h4 class="author">${reviews[3].name}</h4>
<p class="job">${reviews[3].job}</p>
<p class="info">
${reviews[3].text}
</p>
`


// show next person
window.addEventListener("DOMContentLoaded", function () {
count = 0;

 nextBtn.addEventListener('click', function(){

if (count <= 0 ) {
  clickOne();
  count++;
  console.log(count);
}
else if (count <= 1 ) {
  clickTwo();
  count++;
  console.log(count);
}
else if (count <= 2 ) {
  clickThree();
  count++;
  console.log(count);
}
else if (count <= 3 ) {
  clickFour();
  count = 0;
  console.log(count);
}
});

// functions on forward click
function clickOne() {
one.classList.add('hide');
two.classList.remove('hide');
}
function clickTwo() {
two.classList.add('hide');
three.classList.remove('hide');
}
function clickThree() {
three.classList.add('hide');
two.classList.add('remove');
four.classList.remove('hide');
}

function clickFour() {
console.log('four has been called');
four.classList.add('hide');
one.classList.add('hide');
one.classList.remove('hide');
}



prevBtn.addEventListener('click', function(){
if (count <= 0 ) {
  reverseOne();
  count = 3;
  console.log(count);
}
else if (count <= 1 ) {
  reverseTwo();
  count--;
  console.log(count);
}
else if (count <= 2 ) {
  reverseThree();
  count--;
  console.log(count);
}
else if (count <= 3 ) {
  reverseFour();
  count--;
  console.log(count);
}
});
});

// functions on reverse click
function reverseOne() {
one.classList.add('hide');
four.classList.remove('hide');
}
function reverseTwo() {
two.classList.add('hide');
one.classList.remove('hide');
}
function reverseThree() {
three.classList.add('hide');
two.classList.remove('hide');
}

function reverseFour() {
console.log('four has been called');
four.classList.add('hide');
three.classList.remove('hide');
}




// random reviewer
randomBtn.addEventListener('click', function(){
  const numbers = [0, 1, 2, 3]
  const randomNumber = Math.floor(Math.random() * numbers.length);
  console.log(randomNumber);
  showPerson(randomNumber);
})