var navMenuAnchorTaags = document.querySelectorAll('.nav-menu a');

for(var i = 0;i<navMenuAnchorTaags.length;i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.prevenDefault();
       var targetSection = this.textContent.trim().toLowerCase();
       var targetSection = document.getElementById(targetSectionID);
        Console.log(targetSection);
       var targetSectionCoordinates = targetSection.getBoundingClientRect();
         var interval = setInterval(function(){
          if(targetSectionCoordinates.top <= 0){ 
            clearInterval(interval);
            return;
         }  
         window.scrollBy(0,50);
        },50);
    });
}