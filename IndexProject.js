// Página Infantil para gestión de tareas.
// Mi idea de proyecto es una página simple para que los estudiantes gestionen sus tareas!

//---------

//DEPENDENCIAS DEL DESARROLLADOR

//DEPENDENCIA #1    Console-emoji .  Sirve como ejemplo de una dependencia de desarrollador,
//le agrega emojis al código y aumenta la estetica, también se puede usar para poner un mensaje.
//Se seleccionaron emojis también por el tema de que es un proyecto infantil.

var log = require('console-emoji');
log(
	':revolving_hearts: :sparkles: :rainbow: :sparkling_heart:  :star: :two_hearts:  Welcome to your task manager! :two_hearts: :star: :sparkling_heart: :star: :rainbow: :sparkles: :revolving_hearts:'
);

//DEPENDENCIA #2    Pets.  Al ser una página orientada a niños pequeños, decidí decorarla un poco, para ello
//puse esta dependencia que imprime animalitos en la consola. Puse uno al inicio y otro al final.

var Log = require('log.pets');
Log.dinosaur();

//---------
log(':star:');
log(':star:');

log(
	':revolving_hearts: :sparkles: :rainbow: :sparkling_heart:  :star: :two_hearts:  To-Do List! :two_hearts: :star: :sparkling_heart: :star: :rainbow: :sparkles: :revolving_hearts:'
);

//---------

//DEPENDENCIAS DEL PROYECTO

//DEPENDENCIA #1    To-Do List.  Implementé una to-do list ya que en ella se pueden ingresar las tareas pendientes,
//las completadas e incluso se puede gestionar por usuario

var toDoList = require('todolist_1');

function manageToDoList() {
	toDoList.addToDo('Lab1', 'Terminar el lab', 'Ana'); // Crear una tarea
	console.log(toDoList.deleteToDo(1)); // Eliminar una tarea por su id
	console.log(toDoList.changeStatus(0, true)); // Modificar el estado de una tarea por su id

	var tasksByUser = toDoList.getListByUser('Ana');
	console.log('Tasks assigned to Ana:');
	tasksByUser.forEach((task) => console.log(task));

	var completedTasks = toDoList.getListByStatus(true);
	console.log('Completed tasks:');
	completedTasks.forEach((task) => console.log(task));

	console.log('All tasks:');
	console.log(toDoList.getToDoList()); // Devolver todas las tareas

	console.log('All users:');
	console.log(toDoList.getUsers()); // Devolver todos los usuarios

	toDoList.reset(); // Reiniciar la lista de tareas
}

manageToDoList();

// ---------

log(':revolving_hearts: :sparkles: :rainbow: :sparkling_heart:  :star: :two_hearts:');
log(':star:');
log(':star:');

log(
	':revolving_hearts: :sparkles: :rainbow: :sparkling_heart:  :star: :two_hearts:  Monthly Planner! :two_hearts: :star: :sparkling_heart: :star: :rainbow: :sparkles: :revolving_hearts:'
);

//DEPENDENCIA #2    Calendario.  Implementé un calendario, ya que es algo imprescindible
//al momento de agregar tus tareas, es bueno tener la fecha a la mano para no perderse.

var monthly = require('monthly');

var rows = monthly({
	date: new Date(),
	startDay: 1,
	freeDay: [0, 6],
	locale: 'en',
	highlight: [3, 9, 11, 20],
	blink: 9,
	bold: 10,
	dim: 28,
	underline: 12,
	table: false,
	year: false,
});

console.log(rows.join('\n'));

//---------

log(':revolving_hearts: :sparkles: :rainbow: :sparkling_heart:  :star: :two_hearts:');

//---------
Log.owl();
