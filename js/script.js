function toggleParagraph(){
const hiddenClass = document.getElementById("toggleParagraph");
hiddenClass.classList.toggle('hidden')
document.getElementById("about_btn").innerHTML = "Read More";
if(hiddenClass.classList != "hidden"){
 document.getElementById("about_btn").innerHTML = "Read Less"
}
}

// function toggleNevItem(){
// console.log(
//   document.getElementsByClassName("nav-link")
// );
// }
// function toggleNevItem(clickedLink) {
  
//   document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
//     link.classList.remove("active");
//     console.log(link);
//   });

//   if (!clickedLink.classList.contains("active")) {
//     clickedLink.classList.add("active")
//     console.log("I am here!!");
//   }
// }

// function toggleNevItem(clickedLink) {
//   // Toggle 'active' class on the clicked link
//   const hasActiveClass = clickedLink.classList.contains("active");
//   console.log(`Before toggling: hasActiveClass = ${hasActiveClass}`);

//   clickedLink.classList.toggle("active", !hasActiveClass);

//   console.log(
//     `After toggling: hasActiveClass = ${clickedLink.classList.contains(
//       "active"
//     )}`
//   );
// }


document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".model-img").src = src;
        const myModel = new bootstrap.Modal(document.getElementById('gallery-model'));
        myModel.show();
    }else if (e.target.classList.contains("nav-item")) {
      console.log("I am here!!");
    }
})