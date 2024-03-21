/****************Toggle icon navbar************************ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
/****************Scroll section avtibe link************************ */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset+height ){
         navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
         });
        };
    });

    // sticy navbar

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY >100);

// toggle icon navbar
/****************remove toggle icon and navbar when click navbae link(scroll)************************ */


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/****************scroll reveal************************ */
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
 ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

/****************typed js************************ */
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Java Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const fullName = document.getElementById('fullName').value;
      const emailAddress = document.getElementById('emailAddress').value;
      const mobileNumber = document.getElementById('mobileNumber').value;
      const emailSubject = document.getElementById('emailSubject').value;
      const message = document.getElementById('message').value;
  
      // Here, you can perform any action you want with the form data,
      // such as sending it to a server using AJAX or displaying it on the page.
  
      // For demonstration, let's log the form data to the console.
      console.log('Form Data:');
      console.log('Full Name:', fullName);
      console.log('Email Address:', emailAddress);
      console.log('Mobile Number:', mobileNumber);
      console.log('Email Subject:', emailSubject);
      console.log('Message:', message);
  
      // Clear the form fields after submission (optional)
      contactForm.reset();
  
      // Display a success message or perform any other action as needed
      alert('Message sent successfully!');
    });
  });
  








