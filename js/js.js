 




'use strict';
{
  class Cart{
    constructor(src, alt, title, parent){
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.lastitle = Math.round(Math.random()*100+1);
      this.parent = parent;
    }
    render(){
      document.querySelector(this.parent).insertAdjacentHTML(
          "beforeend",
          `
            <div class="slider__block">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="slider__title">${this.title}</h3>
                <h4 class="slider__lasttitle">${this.lastitle}€</h4>
            </div>
          `
      );
    };
  }
  const mainBtn = document.querySelector(".main__btn");
  mainBtn.addEventListener("click", function(){
    for(let i = 0; i<5; i++){
      new Cart(
      `img/naimvs-${i+1}.jpg`,
      "img",
      "Gdf  dfg dfg dfg dfg dfg ",
      ".main__inner",
      ).render();
    }
    
  });
}
//классы




window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//меню


//выпадающие окна кнопок

