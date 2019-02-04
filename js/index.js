
let nav = document.querySelectorAll('a');

for(let i = 0; i < 4; i++) {
	nav[i].addEventListener('click', e => {
		nav[i].style.color = 'orange';
		e.preventDefault();
	});

	nav[i].addEventListener('mouseover', e => {
		nav[i].style.color = 'olivedrab';
	});
}

let busImg = document.querySelector('img');

console.log(busImg);


busImg.addEventListener('mouseover', e => {
	busImg.src = 'img/ocean-fun.jpg';
	busImg.style.width = '100%';
});

busImg.addEventListener('click', e => {
	e.stopPropagation();
	busImg.src = 'img/fun-bus.jpg'; 
})

let container = document.querySelector('body');

container.addEventListener('click', e => {
	alert("Container clicked!");
})

container.addEventListener('keydown', e => {
	if(event.keyCode === 32) {
		container.style.color = 'blue';
	}
})

container.addEventListener('keyup', e => {
	if(event.keyCode === 32) {
		container.style.color = 'red';
	}
})

let buttons = document.getElementsByClassName('btn');

for(let i = 0; i < 3; i++) {
	buttons[i].addEventListener('click', e => {
		e.stopPropagation();
		alert("Taking you to sign up page!");
	})
}


