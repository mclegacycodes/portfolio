
///using jquery to fadeout the plashscreen
$(
    function(){
        const splash =  $('.splashscreen');
       splash.delay(3500).fadeOut('1500');
       splash.css({
           "display": "hidden"
       })
    }
)