
///using jquery to fadeout the plashscreen
$(
    function(){
        const splash =  $('.splashscreen');
       splash.delay(3500).fadeOut('1500');
       splash.css({
           "display": "hidden"
       })


    //    working on the toggle button
    const togglebutton = document.getElementById('menu-icon');
    const navlist = document.getElementsByClassName('navlist')[0];
    togglebutton.addEventListener('click',()=>{
        navlist.classList.toggle('active')
    })
    }
)