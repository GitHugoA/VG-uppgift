import axios from 'axios';
import {animate} from 'animejs';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';


$("#quote-button").on("click", function(){
    getQuote();
});

function getQuote(){
    axios.get("https://api.kanye.rest/").then(function (response){
        console.log(response.data.quote);

        $('#quote').html(response.data.quote);

        animate('#quote', {
            y: [
              { to: '-2.75rem', ease: 'outExpo', duration: 600 },
              { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            
            rotate: {
              from: '-1turn',
              delay: 0
            },
            delay: (_, i) => i * 50,
            ease: 'inOutCirc',
            loop: false
          });
    }).catch(function(error){
        console.log(error);
    });
}

$(document).ready(getQuote);