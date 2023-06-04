function ViewOption(x){
    if(x==1){
        document.getElementById("login").style.display = "block";
        document.getElementById("question").style.display = "none";
        document.getElementById("register").style.display = "none";
    } else{
        document.getElementById("register").style.display = "block";
        document.getElementById("question").style.display = "none";
        document.getElementById("login").style.display = "none";
    }

}