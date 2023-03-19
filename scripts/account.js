const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



//    show rigister
const regi_btn = document.getElementById('register');
const regist = document.querySelector('.registre-content');
const login = document.querySelector('.login-content');

regi_btn.addEventListener('click', () => {
    alert("let's gooooooooooo !!");
	regist.classList.add('active');
	login.classList.add('active');
});