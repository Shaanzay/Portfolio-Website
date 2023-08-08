
const typed = new Typed("#multiple-text",{
    strings : ['Frontend Developer','Youtuber', 'Web Developer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,
});





/* ..............................................send email...................................*/
function sendEmail(){
        Email.send({
            SecureToken: "copy from smtp security ",
           /* Host : "smtp.elasticemail.com",
            Username : "Shanzay Zain",
            Password : "password",*/      /* after get token remove these lines*/
            To : 'Shanzay.zain@outlook.com/ given in elasticmail',
            From : document.getElementById("email").value,
            Subject : "New contact from web",
            Body : "Name: " + document.getElementById("name").value 
            + "<br> Email: " + document.getElementById("email").value 
            + "<br> Phone no: " + document.getElementById("phone").value 
            + "<br> Message: " + document.getElementById("message").value 
        }).then(
          message => alert("Message Sent Successfully")
        );
    }






/* ..............................................responsive...................................*/

// ..................................................................active menu..................................
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len =section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){} menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


//................................................... sticky navbar
const header = document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle('sticky', window.scrollY > 50)

})


/* ..............................................toggle icon navbar...................................*/
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}









/*window.onscroll = () => {
    sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
			});
		};
	})*/