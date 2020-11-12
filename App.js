//Movement Animation to happen
const firstCard = document.querySelector('#first-card');
const secondCard = document.querySelector('#second-card');
const thirdCard = document.querySelector('#third-card');
const firstInnerContainer = document.querySelector('#first-inner-container');
const secondInnerContainer = document.querySelector('#second-inner-container');
const thirdInnerContainer = document.querySelector('#third-inner-container');

//Moving Animation Event
firstInnerContainer.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  firstCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

secondInnerContainer.addEventListener('mousemove', (e) => {
  let xAxis = (secondInnerContainer.clientWidth / 2 - e.clientX) / 25;
  let yAxis = (secondInnerContainer.clientHeight / 2 - e.clientY) / 25;
  secondCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

thirdInnerContainer.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  thirdCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
