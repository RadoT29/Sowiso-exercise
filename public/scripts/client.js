"use strict";

function sendAnswer(){
    let text = document.getElementById("inputBox").value;

    axios.post('/',{
        answer: text
    }).then(function(res){
        let text, color;

        if(res.data.correct){
            text = "Your answer is correct!"
            color = '#A4DE02';
        } else {
            text = "Your answer is wrong";
            color = '#E3242B';
        }
        document.getElementById("resultText")
            .textContent = text;
        document.getElementById("result")
            .style.backgroundColor = color;
    }).catch(function(err){
        console.log(err);
    });
}