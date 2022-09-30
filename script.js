
// Header Section

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));

  this.classList.add("active");
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));




// Project

let imgList = document.querySelectorAll(".img-list-container .list");

imgList.forEach((img) => {
  img.onclick = () => {
    imgList.forEach((remove) => {
      remove.classList.remove("active");
    });
    img.classList.add("active");
    let src = img.querySelector(".list-img").src;
    let title = img.querySelector(".list-title").innerHTML;

    document.querySelector(".main-img-container .main-img").src = src;

    document.querySelector(".main-img-container .main-img-title").innerHTML =
      title;
  };
});


// section firebase contact form

var firebaseConfig = {
  apiKey: "AIzaSyBg_1chDVMBGOiIA0Jbax6tGd16ZKoT7hY",
  authDomain: "contact-database-7102b.firebaseapp.com",
  databaseURL: "https://contact-database-7102b-default-rtdb.firebaseio.com",
  projectId: "contact-database-7102b",
  storageBucket: "contact-database-7102b.appspot.com",
  messagingSenderId: "33059839775",
  appId: "1:33059839775:web:42fd4a46bce8dcb99eda2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// reference contact info 
let contactInfo = firebase.database().ref("infos");

document.querySelector(".contacts").addEventListener("submit",submitForm)

function submitForm(e){
  e.preventDefault()
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;

  saveContactInfo(name,email);


document.querySelector('.alert').style.display = 'block';
setTimeout (function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

document.querySelector(".contacts").requestFullscreen();

}
function saveContactInfo(name,email){
let newContactInfo = contactInfo.push();
newContactInfo.set({
  name:name,
  email:email
})

}
