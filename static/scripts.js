/*!
* Start Bootstrap - New Age v6.0.3 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Feature: Is your Bank Causing Climate Change

    var logo_array = [document.getElementById("logo1"), document.getElementById("logo2"), document.getElementById("logo3"), document.getElementById("logo4"), document.getElementById("logo5")];

    var explanation = document.getElementById("banks-explanation");

    var dict = {

        "logo1": ["RBC is Canada's #1 Bank for Fossil Fuel Financing", 
        "If you are a RBC customer your money is funding climate change. RBC is the #1 fossil fuel financer in Canada and among the 60 largest worldwide. It has poured more than $160 billion into oil, gas, and coal in the 5 years since the Paris Agreement contributing significantly to the climate crisis.", 
        "https://bank.green/banks/rbc"],
    
        "logo2": ["CIBC is the #4 Biggest Financer of Tar Sands Worldwide", 
        "If you are a CIBC customer your money is funding climate change. CIBC has invested more than $160 billion into oil, gas, and coal in the 5 years since the Paris Agreement. It funds tar sand pipelines which will transport more than 760,000 barrels of crude oil through Canada everyday.", 
        "https://bank.green/banks/cibc"],
    
        "logo3": ["Scotia is the 3rd Biggest Financer of Fossil Fuels in Canada", 
        "test1.2", 
        "https://bank.green/banks/scotiabank"],
    
        "logo4": ["TD is the Second Worst Canadian Bank for Fossil Fuel Financing", 
        "TD has put more than $121 billion into fossil fuels since the Paris Agreement.", 
        "https://bank.green/banks/td_bank_financial_group"],
    
        "logo5": ["BMO is Canada's #1 Culprit for Coal Mine Financing", 
        "$95 billion", 
        "https://bank.green/banks/bmo_financial_group"],
    
    };

    //counter for cycling through array
    var i = 0;
    // if user click occurs set to true
    var breaker = false;

    //trigger details function on click
    logo_array.forEach(function(element){
        element.addEventListener("click", function(){
            climateDetails(element);
            breakerIsTrue();
        });
    });

    function breakerIsTrue(){
        breaker = true;
    }
        
    function climateDetails(element){
        // remove prior glow effects
        logo_array.forEach(function(element){
            element.classList.remove("glow-effect");
        });

        //add greyscale to all
        logo_array.forEach(function(element){
            element.classList.add("grayscale");
        }
        );

        //add glow effect to clicked element
        element.classList.add("glow-effect"); 

        //remove grayscale from clicked element
        element.classList.remove("grayscale");

        //change text
        str= element.id;

        if(dict[str]){
            //Do this if the item exists
            document.getElementById("banks-header").innerHTML = dict[str][0];
            document.getElementById("banks-description").innerHTML = dict[str][1];
            document.getElementById("banks-link").setAttribute('href', dict[str][2]);
        };

    };

    //cycle through banks automatically 
    //stop if user has clicked on one
    (function waitSeconds (n) {
        if(breaker==false){
            climateDetails(logo_array[n]);
        };
        if (n==4) n=-1;
        n++;
        if (n < 5 && breaker==false) setTimeout( waitSeconds, 7000, n ); // Redo if n < 5 (and pass n)
        
      } (0)); // Initialize. n is 0

        
            
       
    
    
