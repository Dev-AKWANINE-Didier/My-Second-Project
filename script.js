
// Initialisation de la librerie AOS 
AOS.init({
  offset:200,
  delay:0,
  duration:800,
  once:false,
});
// Quelques variables 
const body=document.querySelector('body')
const navBar=document.querySelector('.navbar .container')
const links=document.querySelector('.navbar .container .links ul');
const liLinks=document.querySelectorAll('.navbar .container .links ul')
const faBars=document.querySelector('.navbar .container .toggle-btn .fa-bars');
const faXMark=document.querySelector('.navbar .container .toggle-btn .fa-xmark');
const containerContact=document.querySelector('.contact .container');
const dark=document.querySelector('.navbar .container .links ul .sombre i');
const aboutTitle=document.querySelector('.about .container .about-title');
const serviceBox1=document.querySelector('.service .service-box .box-1');
const serviceBox2=document.querySelector('.service .service-box .box-2');
const serviceBox3=document.querySelector('.service .service-box .box-3');
const htmlEducation=document.querySelector('.service .education .htmlcss .html');
const cssEducation=document.querySelector('.service .education .htmlcss .css')
const tailwindEducation=document.querySelector('.service .education .tailwindJavascript .tailwind')
const javascriptEducation=document.querySelector('.service .education .tailwindJavascript .javascript');
const columns1Project1=document.querySelector('.projects .container .project_list .flex-columns .columns1 .project1 ');
const columns1Project2=document.querySelector('.projects .container .project_list .flex-columns .columns1 .project2 ');
const columns2Project1=document.querySelector('.projects .container .project_list .flex-columns .columns2 .project1 ');
const columns2Project2=document.querySelector('.projects .container .project_list .flex-columns .columns2 .project2 ');
const titleContact=document.querySelector('.contact .container .title');
const formContact=document.querySelector('.contact .container .form')

//  sombre ou blanc 
console.log(titleContact);
dark.addEventListener('click',function(){
  body.classList.toggle('bodyBgChanged')
})

// Le menu sur les ecrans de petites tailles 
faBars.addEventListener('click',()=>{
  links.classList.toggle('LinksShowed');
  faXMark.classList.toggle('faXMarkShowed')
  faBars.classList.toggle('faBarsNone')
})
faXMark.addEventListener('click',()=>{
  links.classList.remove('LinksShowed');
  faXMark.classList.remove('faXMarkShowed')
  faBars.classList.remove('faBarsNone')
});

liLinks.forEach(e=>e.addEventListener('click',()=>{
  links.classList.remove('LinksShowed');
  faXMark.classList.remove('faXMarkShowed')
  faBars.classList.remove('faBarsNone')
}));

// Les scrollY de la navbar 
window.addEventListener('scroll',()=>{
  if(window.scrollY > 40){
    navBar.classList.add('Active-bg')
    return;
  }
  navBar.classList.remove('Active-bg');
});

  // Les exigences sur les AOS dépandant de la tailles de l'ecran 
if(window.innerWidth>=0 && window.innerWidth<=479 || window.innerWidth>=480 && window.innerWidth<=767){
  aboutTitle.setAttribute('data-aos','fade-up');

  serviceBox1.setAttribute('data-aos','fade-up');
  serviceBox2.setAttribute('data-aos','fade-up');
  serviceBox3.setAttribute('data-aos','fade-up');
  htmlEducation.setAttribute('data-aos','fade-up');
  cssEducation.setAttribute('data-aos','fade-up');
  tailwindEducation.setAttribute('data-aos','fade-up');
  javascriptEducation.setAttribute('data-aos','fade-up');
  columns1Project1.setAttribute('data-aos','zoom-in-down');
  columns1Project2.setAttribute('data-aos','zoom-in-up');
  columns2Project1.setAttribute('data-aos','zoom-in-down');
  columns2Project2.setAttribute('data-aos','zoom-in-up');
  titleContact.setAttribute('data-aos','zoom-in-down');
  formContact.setAttribute('data-aos','zoom-in-up');
};









