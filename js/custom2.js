/*-----------------------------------------------------------------------------------*/
/*       Start
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/*  Start Navbar Menu
/*-----------------------------------------------------------------------------------*/

/*  Underline Button */

var burger = document.querySelector(".button-nav-menu");
burger.addEventListener("click", function()
{
  document.querySelector(".wrapper-nav-menu-min").classList.toggle("look");
}, false);




/*-----------------------------------------------------------------------------------*/
/*  Perforce Choose-Me
/*-----------------------------------------------------------------------------------*/


/*  Accordion */

var accordion = $('.accordion');

accordion.find('dd').hide();

accordion.find('dt').on('click', function(){

    $(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');

});


/*-----------------------------------------------------------------------------------*/
/*  Perforce Product
/*-----------------------------------------------------------------------------------*/

// buttons Products
var allProd = document.getElementById('all-prod');
var btnVerCtrSys = document.getElementById('cat-a-prod');
var btnDevClbt = document.getElementById('cat-b-prod');
var btnDevLifeMgt = document.getElementById('cat-c-prod');
var btnEtpPlan = document.getElementById('cat-d-prod');

// boxes Products
var boxProdA1 = document.getElementById('prod-category-A1');
var boxProdB1 = document.getElementById('prod-category-B1');
var boxProdB2 = document.getElementById('prod-category-B2');
var boxProdC1 = document.getElementById('prod-category-C1');
var boxProdC2 = document.getElementById('prod-category-C2');
var boxProdC3 = document.getElementById('prod-category-C3');
var boxProdD1 = document.getElementById('prod-category-D1');


/***/

function resetBoxA() {
   if(boxProdA1.classList.contains("cat-a-position")) {
      boxProdA1.classList.remove('cat-a-position');
   }
   else {
     return;
   }
}

function resetBoxB() {
   if(boxProdB1.classList.contains("cat-b-position") && boxProdB2.classList.contains("cat-b-position"))  {
      boxProdB1.classList.remove('cat-b-position');
      boxProdB2.classList.remove('cat-b-position');
   }
   else {
     return;
   }
}

 function resetBoxC() {
    if(boxProdC1.classList.contains("cat-c-position") || boxProdC2.classList.contains("cat-c-position") || boxProdC3.classList.contains("cat-c-position")) {
       boxProdC1.classList.remove('cat-c-position');
       boxProdC2.classList.remove('cat-c-position');
       boxProdC3.classList.remove('cat-c-position');
    }
    else {
      return;
    }
 }

 function resetBoxD() {
     if(boxProdD1.classList.contains("cat-d-position")) {
        boxProdD1.classList.remove('cat-d-position');
     }
     else {
       return;
     }
 }

/***/

btnVerCtrSys.addEventListener("click", function() {
   boxProdA1.classList.add('cat-a-position');

},false);


btnDevClbt.addEventListener("click", function() {
     boxProdB1.classList.add('cat-b-position');
     boxProdB2.classList.add('cat-b-position');

},false);

btnDevLifeMgt.addEventListener("click", function() {
     boxProdC1.classList.add('cat-c-position');
     boxProdC2.classList.add('cat-c-position');
     boxProdC3.classList.add('cat-c-position');

},false);

btnEtpPlan.addEventListener("click", function() {
     boxProdD1.classList.add('cat-d-position');

},false);

/***/

allProd.addEventListener("click", function() {

  resetBoxA();
  resetBoxB();
  resetBoxC();
  resetBoxD();

},false);


/* Underline IconProducts */

var allBtnProd = document.querySelectorAll('.filter');


  for(var i=0; i < allBtnProd.length; i++) {
    allBtnProd[i].addEventListener("click", function() {


      if(allProd == this) {
        allBtnProd[0].setAttribute("style", "background-color: #B20113; color: #ffffff");
        allBtnProd[1].setAttribute("style", "background-color: #ffffff; color: #000000");
        allBtnProd[2].setAttribute("style", "background-color: #ffffff; color: #000000");
        allBtnProd[3].setAttribute("style", "background-color: #ffffff; color: #000000");
        allBtnProd[4].setAttribute("style", "background-color: #ffffff; color: #000000");
      }

       else if (btnVerCtrSys == this) {
         allBtnProd[1].setAttribute("style", "background-color: #B20113; color: #ffffff");
         allBtnProd[0].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[2].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[3].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[4].setAttribute("style", "background-color: #ffffff; color: #000000");
       }

       else if (btnDevClbt == this) {
         allBtnProd[2].setAttribute("style", "background-color: #B20113; color: #ffffff");
         allBtnProd[0].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[1].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[3].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[4].setAttribute("style", "background-color: #ffffff; color: #000000");
       }

       else if (btnDevLifeMgt == this) {
         allBtnProd[3].setAttribute("style", "background-color: #B20113; color: #ffffff");
         allBtnProd[0].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[1].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[2].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[4].setAttribute("style", "background-color: #ffffff; color: #000000");
       }

       else if (btnEtpPlan == this) {
         allBtnProd[4].setAttribute("style", "background-color: #B20113; color: #ffffff");
         allBtnProd[0].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[1].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[2].setAttribute("style", "background-color: #ffffff; color: #000000");
         allBtnProd[3].setAttribute("style", "background-color: #ffffff; color: #000000");
       }


    },false);
  }


/*-----------------------------------------------------------------------------------*/
/*  Team
/*-----------------------------------------------------------------------------------*/

var LinkInIcon = document.querySelectorAll(".linkedIn-small");

console.log(LinkInIcon);

/* Start ZOOM (LINKEDIN by FOTO) */

 for(var i=0; i < LinkInIcon.length; i++) {

   LinkInIcon[i].addEventListener("mouseover", function(){

         this.classList.remove('linkedIn-small');
         this.classList.add('linkedIn-large');

  },false);
}

/* Start REDUCE (LINKEDIN by FOTO) */

for(var i=0; i < LinkInIcon.length; i++) {

  LinkInIcon[i].addEventListener("mouseout", function(){

        this.classList.remove('linkedIn-large');
        this.classList.add('linkedIn-small');

 },false);
}

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/
