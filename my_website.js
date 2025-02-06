// Colorful Carousel - content and logic
const text1_options = [
  "Mathemathical Foundation for CS",
  "Introduction to AI",
  "Analysis of Algorithms",
  "Software Engineering for WWW",
  "Computer Programming and Systems",
  "Database Systems",     
      ];
      const text2_options = [
        "CS 550",
        "CS 580",
        "CS 583",
        "SWE 642",
        "CS 531",
        "CS 550"
      ];
      const color_options = ["#797d62", "#9b9b7a", "#d9ae94", "#f1dca7", "#d08c60", "#997b66"];
      const image_options = [
        "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/869939846/photo/3d-text-of-unix.jpg?s=2048x2048&w=is&k=20&c=OMoVhovnwhof8m5RhUtFhkzNEnjx0r75hOBplgTTkC0=",
        "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?",
       
      ];
      var i = 0;
      const currentOptionText1 = document.getElementById("current-option-text1");
      const currentOptionText2 = document.getElementById("current-option-text2");
      const currentOptionImage = document.getElementById("image");
      const carousel = document.getElementById("carousel-wrapper");
      const mainMenu = document.getElementById("menu");
      const optionPrevious = document.getElementById("previous-option");
      const optionNext = document.getElementById("next-option");
      
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
      mainMenu.style.background = color_options[i];
      
      optionNext.onclick = function () {
        i = i + 1;
        i = i % text1_options.length;
        currentOptionText1.dataset.nextText = text1_options[i];
      
        currentOptionText2.dataset.nextText = text2_options[i];
      
        mainMenu.style.background = color_options[i];
        carousel.classList.add("anim-next");
        
        setTimeout(() => {
          currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        }, 455);
        
        setTimeout(() => {
          currentOptionText1.innerText = text1_options[i];
          currentOptionText2.innerText = text2_options[i];
          carousel.classList.remove("anim-next");
        }, 650);
      };
      
      optionPrevious.onclick = function () {
        if (i === 0) {
          i = text1_options.length;
        }
        i = i - 1;
        currentOptionText1.dataset.previousText = text1_options[i];
      
        currentOptionText2.dataset.previousText = text2_options[i];
      
        mainMenu.style.background = color_options[i];
        carousel.classList.add("anim-previous");
      
        setTimeout(() => {
          currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        }, 455);
        
        setTimeout(() => {
          currentOptionText1.innerText = text1_options[i];
          currentOptionText2.innerText = text2_options[i];
          carousel.classList.remove("anim-previous");
        }, 650);
      };
      

      // Making img roatate in cover page
      document.querySelector(".black-blob").addEventListener("mouseenter", function() {
        let img = this.querySelector("img");
        img.style.opacity = "0"; // Fade out old image
        img.style.borderRadius = "50%";
        img.style.height = "270"
        img.style.width = "270"
        setTimeout(() => {
            img.src = "avatar_rev.png"; // Change source
            img.style.opacity = "1"; // Fade in new image
        }, 200); // Wait for fade-out transition
    });
    
    document.querySelector(".black-blob").addEventListener("mouseleave", function() {
        let img = this.querySelector("img");
        img.style.opacity = "0"; // Fade out new image
        setTimeout(() => {
            img.src = "Me.png"; // Change back to original
            img.style.opacity = "1"; // Fade in original
        }, 200);
    });
    
