
// $(document).ready(function(){

// 	$('#formdemo').validate({
// 		rules:{
// 			ho: {
// 				required: true,
// 				minlength: 5,
// 				regex: /^[a-zA-Z'.\\s]{1,40}$/,
// 			},
// 			ten: {
// 				required: true,
// 				minlength: 5,
// 				regex: /^[a-zA-Z'.\\s]{1,40}$/,
// 			}

// 		},
// 		messages: {
// 			ho:{
// 				required: "Vui long nhap truong nay",
// 				minlength: "Ten gi ngan vay",
// 				regex: "Phai co 1 chu viet hoa va so"
// 			},
// 			ten: {
// 				required: "Vui long nhap truong nay",
// 				minlength: "Ten gi ngan vay",
// 				regex: "Phai co 1 chu viet hoa va so"
// 			}
// 		},
// 	})
// })

// //them id #notity cho div them vao
// 	element.id = 'notity';
// 	element.style.display = 'none';
// 	form.appendChild(element);
// //them su kien submit
// 	username.addEventListener('invalid', function(e) {
// 	    e.preventDefault();
// 	    if (!e.target.validity.valid) {
// 	        element.textContent = 'Username should only contain lowercase letters e.g. john';
// 	        // element.style.display = 'block';
// 	        element.className = 'error';
// 	        username.classList.add('animated', 'shake');

// 	    }

// 	})
	// password.addEventListener('invalid', function(e) {
	//     e.preventDefault();
	//     if (!e.target.validity.valid) {
	//         element.textContent = 'PassWord should only contain lowercase letters e.g. john';
	//         // element.style.display = 'block';
	//         element.className = 'error';
	//         input[1].classList.add('animated', 'shake');

	//     }

	// })





'use strict'
//ten bien
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var form = document.getElementById('form');
	var input = document.querySelectorAll('input');
	var element = document.createElement('div');

	//HIEU UNG SHAKE CHO INPUT
		
	
// function userName(e){
// 	 e.target.setCustomValidity('User chỉ có thể là chữ thường hoặc số');
// }
// var callback = function () {
// 	userName(e);
// }
	
	// password.oninvalid = function(events) {
	//     events.classList.add('animated', 'shake');
	//     events.target.setCustomValidity('Pass chỉ có thể là chữ thường hoặc số,ít nhất 6 kí tự');
	// }
	element.setAttribute('id', 'notity'); // element.id = 'notity';
	element.style.display = 'none';
	form.appendChild(element);
	username.addEventListener('invalid', (e)=> {
	    e.preventDefault();
	    // username.oninvalid = function(user) {
	        // user.classList.add('animated', 'shake');
	        // user.target.setCustomValidity('User chỉ có thể là chữ thường hoặc số, ít nhất 3 kí tự'); 
	        	username.classList.add('animated', 'shake');           
	            element.textContent = 'User chỉ có thể là chữ thường hoặc số, ít nhất 3 kí tự';
	            element.style.display = 'block';
	            element.className = 'error';
	        // }
	//     }
	})
		//xet truong hop khi value loi
	username.addEventListener('input', ()=>{
		if ( 'block' === element.style.display ) {
			username.className = '';
			element.style.display = 'none';
		}
	});

	password.addEventListener('invalid', function(e) {
		e.preventDefault();
	    // password.oninvalid = function(user) {
	        // user.classList.add('animated', 'shake');
	        // user.target.setCustomValidity('User chỉ có thể là chữ thường hoặc số, ít nhất 3 kí tự');
	        if (!e.target.validity.invalid) {
	            password.classList.add('animated', 'shake');
	            element.textContent = 'Pass chỉ có thể là chữ thường hoặc số, ít nhất 6 kí tự';
	            element.style.display = 'block';
	            element.className = 'error';	
	        }
	    // }
	})
	password.addEventListener('input',()=>{
		if (element.style.display === 'block') {
			password.className = ''; 
			element.style.display = 'none';
		}

	})

// 	@media all and (max-width: 900px) {
// 	// styles
// }

// if (document.documentElement.clientWidth < 900) {
// 	// scripts
// }
