// Crear el contenedor div
var container = document.createElement('div');
container.classList.add('area');

// Crear la lista ul
var list = document.createElement('ul');
list.classList.add('circles');

// Crear los elementos li y agregarlos a la lista ul
for (var i = 0; i < 10; i++) {
  var listItem = document.createElement('li');
  list.appendChild(listItem);
}

// Agregar la lista ul al contenedor div
container.appendChild(list);

// Agregar el contenedor div al cuerpo de la página
document.body.appendChild(container);
