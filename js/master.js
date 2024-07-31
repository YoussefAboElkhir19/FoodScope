


// nav Bar






// Check If Local Storage Color Option
// let mainColors = localStorage.getItem("color_option");
// let main = localStorage.getItem("option");
// if (mainColors !== null) {
//   console.log("Local color Not empty");
//   console.log(localStorage.getItem("color_option"));
  // localStorage.setItem("color_option", mainColors);
// }
// Toggle ASpin Class on Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // Toggle a Icon gear
  this.classList.toggle("fa-spin");
  // toggle a Class a Main setting Options
  document.querySelector(".setting-box").classList.toggle("open");
};


// const Backel = document.querySelectorAll(".wrapper .landing-page .menu ul li");
// console.log(Backel)
// // loop on all li
// Backel.forEach((c) => {
//   console.log(c)
//   // to add event click li
//   c.addEventListener("click",(e)=>{
//     console.log(e.target.dataset.color)
//     //set color
//     document.documentElement.style.setProperty("--man-color",e.target.dataset.color);
//     e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
//       ele.classList.remove("active")
//   });
//   e.target.classList.add("active");


//   })

// });
    // Remove active clas
// const backnav = document.querySelectorAll(".wrapper .landing-page .menu ul li");
// backnav.forEach((li)=>{
//   li.addEventListener("click",(e)=>{
//     document.querySelector(".landing-page nav .menu ul li").classList.add("active");
//     document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color);
//       localStorage.setItem("option",e.target.dataset.color );
//       e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
//         ele.classList.remove("active")
//     });
//     e.target.classList.add("active");
//   });
// });
// Switch Color
const colorLi = document.querySelectorAll(".color-list li");
// Loop  li
// console.log(colorLi)
colorLi.forEach((color) => {
  // console.log(color);
  // Add event change color
  color.addEventListener("click", (e) => {
    console.log(e.target.dataset.color)
    document
      .querySelector(".setting-box .option-box .color-list li")
      .classList.add("active");
    // Set color  Root --main--color switch it to color need
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set Color On local Strorge
    localStorage.setItem("color_option",e.target.dataset.color );
    // Remove Active class from all li
     e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
         ele.classList.remove("active")
     });
     e.target.classList.add("active");
  });

});


// Random Background Option
let backgroundOption = true;
// Varabli to contorl the inteval background
let backgroundInterval;

// Switch Random BackGround
const randomBackel = document.querySelectorAll(".random-backgroud span");
// loop on all span
randomBackel.forEach((span) => {
  span.addEventListener("click", (e) => {
    // Remove active class
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active")
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      // console.log("Yes")
      backgroundOption = true;
      randomImages();
    } else {
      // console.log("no")
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});

// Select Landing
let landingPage = document.querySelector(".landing-page");

// Gey Array Image
let ImgsArray = ["bg2.jpg", "bg3.jpg"];

// Fuction Random Image
function randomImages() {
  // need feature change background
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get A Random Number
      let randomNum = Math.floor(Math.random() * ImgsArray.length);
      // Change BackgropungImage
      // console.log(randomNum)
      landingPage.style.backgroundImage =
        'url("imgs/' + ImgsArray[randomNum] + '")';
    }, 1000);
  }
}




// } 
// Create a popup With Images 
let ourGallary = document.querySelectorAll(".gallary img");
ourGallary.forEach(img=>{
    img.addEventListener('click' , (e)=>{
        // Craete overLay Element
        let overlay = document.createElement("div");
        overlay.className='popup-overlay';
        // Append Overlay the Boby
        document.body.appendChild(overlay);
        // Create A popup
        let popupBox = document.createElement("div");
        popupBox.className="popup-box";
        // Create ImgPopup
        let popupImg = document.createElement("img");
        // Set image src
        popupImg.src=img.src;
        // add image to popupBox
        popupBox.appendChild(popupImg);
        //Append The popupBox to body
        document.body.appendChild(popupBox);





    })

})