import {typeHighTask} from './view.js'
import {typeLowTask } from './view.js'
import {highPriority} from './view.js'
import {lowPriority } from './view.js'
import {textHighInput} from './view.js'
import {textLowInput} from './view.js'

let taskId = 1;

function createHighTask() {
	let label = document.createElement('label');
	label.innerHTML = typeHighTask.value;
	label.setAttribute('for', typeHighTask.value);
	label.setAttribute('id', taskId++);
	label.classList.add('task_item');

	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('name', typeHighTask.value);
	checkbox.classList.add('checkbox');

	let deleteTask = document.createElement('button');
	deleteTask.classList.add('delete_task');

	let deleteImg = document.createElement('img');
	deleteImg.setAttribute('src', 'img/close-icon.svg');
	deleteImg.setAttribute('alt', 'close_icon');
	deleteImg.classList.add('delete_img');

	deleteTask.prepend(deleteImg);

	label.prepend(checkbox);
	label.append(deleteTask);

	try {
		if(typeHighTask.value.trim() === '') {
			throw new SyntaxError('Введите задачу');
		}
		highPriority.append(label);
	} catch(err) {
		alert(err.message);
	}

	function addChecked() {
		if(checkbox.checked == true) {
			label.classList.toggle('done');
			checkbox.classList.toggle('done');
			deleteTask.classList.toggle('done');
		}
	}
	
	function pressToDelete() {
		this.parentElement.remove();
	}

	deleteTask.addEventListener('click', pressToDelete);
	checkbox.addEventListener('click', addChecked);

	typeHighTask.value = '';
}

function createLowTask() {
	let label = document.createElement('label');
	label.innerHTML = typeLowTask.value;
	label.setAttribute('for', typeLowTask.value);
	label.setAttribute('id', taskId++);
	label.classList.add('task_item');

	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('name', typeLowTask.value);
	checkbox.classList.add('checkbox');

	let deleteTask = document.createElement('button');
	deleteTask.classList.add('delete_task');

	let deleteImg = document.createElement('img');
	deleteImg.setAttribute('src', 'img/close-icon.svg');
	deleteImg.setAttribute('alt', 'close_icon');
	deleteImg.classList.add('delete_img');

	deleteTask.prepend(deleteImg);

	label.prepend(checkbox);
	label.append(deleteTask);

	label.prepend(checkbox);

	try {
		if(typeLowTask.value.trim() === '') {
			throw new SyntaxError('Введите задачу');
		}
		lowPriority.append(label);
	} catch(err) {
		alert(err.message);
	}

	function addChecked() {
		if(this.checked == true) {
			label.classList.toggle('done');
			checkbox.classList.toggle('done');
			deleteTask.classList.toggle('done');
		}
	}
	
	function pressToDelete() {
		this.parentElement.remove();
	}

	deleteTask.addEventListener('click', pressToDelete);
	checkbox.addEventListener('click', addChecked);

	typeLowTask.value = '';
}


textHighInput.addEventListener('click', createHighTask);
textLowInput.addEventListener('click', createLowTask);