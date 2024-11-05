var clicked = false;
var ComputedColour = null;

var IDArray = [];

$(document).ready(function(){
    $("path").on("mouseover", function(){
        var GetID = document.getElementById("path");
        for (let i = 0; i < 100; i++){
            if (IDArray[i] === GetID){
                break;
            } else {
                $(this).css("fill", "yellow");
            }
        }
    });
    $("path").on("mouseout", function(){
        var GetID = document.getElementById("path");
        for (let i = 0; i < 100; i++){
            if(IDArray[i] === GetID){
                break;
            } else {
                $(this).css("fill", "white");
            }
        }
    });
    $("path").on("click", function(){
        if(ComputedColour === null && !clicked) {
            var GetID = document.getElementById("path");
            IDArray.push(GetID);
            clicked = true;
            ComputedColour = "red";
            console.log(IDArray);
            $(this).css("fill", ComputedColour);
        } else if(ComputedColour === "red" && clicked) {
            var GetID = document.getElementById("path");
            for (let i = 0; i < 100; i++){
                if (IDArray[i] === null){
                    IDArray[i] = GetID;
                    break;
                } else {
                    continue;
                }
            }
            clicked = true;
            ComputedColour = "blue";
            $(this).css("fill", ComputedColour);
        } else if(ComputedColour === "blue" && clicked){
            var GetID = document.getElementById("path");
            for (let i = 0; i < 51; i++){
                if (IDArray[i] === GetID){
                    IDArray[i] = null;
                    break;
                } else {
                    continue;
                }
            }
            clicked = false;
            $(this).css("fill", "white");
            ComputedColour = null;
        }
    })
})