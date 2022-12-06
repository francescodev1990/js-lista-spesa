const list = [
    'Caramelle',
    'Gomme',
    'Pasta',
    'Verdura',
    'Fagioli',
    'Pizza',
    'Piselli',
    'Mais',
    'Lenticchie'
];

// console.log(list);

const container = document.querySelector('.lista-nonstilizzata');


// let element = '';

// for(let i = 0; i < list.length; i++){
//     let item = list[i];
//     console.log(item);
//     element += `<li class="list-item">${item}</li>`;
//     container.innerHTML = element;

let i = 0 ;
let element = ''
while(i < list.length){
let item = list[i];
element += `<li class="list-item">${item}</li>`;
container.innerHTML = element;
i++;
}
console.log(list);