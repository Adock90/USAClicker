window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "visible"){
        document.title = "USAResultMap";
    } else if (document.visibilityState === "hidden"){
        document.title = "FuckYou";
        window.alert("Why");
    }
});

window.addEventListener('beforeunload', function(e){
    e.preventDefault();
    e.returnValue = '';
})