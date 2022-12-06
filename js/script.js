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


const container = document.querySelector('.lista-nonstilizzata');


let i = 0 ;
let element = ''
while(i < list.length){
let item = list[i];
element += `<li class="list-item">${item}</li>`;
container.innerHTML = element;
i++;
}
console.log(list);