import axios from 'axios';
import {animate} from 'animejs';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';


$("#quote-button").on("click", function(){
    getQuote();
});

// When button is pressed, fetch quote and animate the text
function getQuote(){
    axios.get("https://api.kanye.rest/").then(function (response){
        console.log(response.data.quote);

        $('#quote').html(response.data.quote);

        animate('#quote', {
            y: [
              // Move quote up
              { to: '-2.75rem', ease: 'outExpo', duration: 600 },
              // Then drop it down with bounce effect
              { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            
            rotate: {
              //Rotate it 360 degrees
              from: '-1turn',
              delay: 0
            },
            //Do not loop the animation
            delay: (_, i) => i * 50,
            ease: 'inOutCirc',
            loop: false
          });
    }).catch(function(error){
        console.log(error);
    });
}

document.addEventListener('DOMContentLoaded', getQuote);
// Not using JQuery, since ready() function is deprecated