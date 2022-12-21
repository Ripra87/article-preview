function buttonAction () {
    
    var contentPosition = document.querySelector(".share"); // html position to cloud element
    contentPosition.classList.toggle("hidden");
    
    
    if (window.matchMedia("(max-width: 1440px)").matches) {   //condition for matching media query
    document.querySelector(".share-icon").classList.toggle("background");
} 


}


