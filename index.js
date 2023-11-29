const cities=['Москва', 'Санкт-Петербург','Нью-Йорк', 'Берлин'];
console.log(cities);
const temperatures=new Array(cities.length).fill(0);
console.log(temperatures);
const listItems=document.querySelectorAll('.listItem');
console.log(listItems);
const maxTemp=document.querySelector('.maxTemp');
const minTemp=document.querySelector('.minTemp');
for ( let i=0;i<cities.length;i++){
  console.log(listItems[i]);
  listItems[i].textContent=`Температура в ${cities[i]}: ${temperatures[i]} ºC`;
}
for (let i=0;i<cities.length;i++){
  temperatures[i]=prompt(`Введите температуру в городе: ${cities[i]}`,0);
  listItems[i].textContent=`Температура в ${cities[i]}: ${temperatures[i]} ºC`;
}

const maxGrad=Math.max(...temperatures);
maxTemp.textContent=`Максимальная температура: ${maxGrad} ºC`;

const minGrad=Math.min(...temperatures);
minTemp.textContent=`Минимальная температура: ${minGrad} ºC`;

