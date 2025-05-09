/*import axios from 'axios';*/
import './style.css'; 

$("#quote-button").on("click", function(){
    /*
    axios.get("https://api.kanye.rest/").then(function (response){
        console.log(response.data.quote);
    })*/
    let quote = "Another quote from Kanye West that is to be placed in the card, please!";
    $("#quote").text(quote);
    console.log(quote);
});