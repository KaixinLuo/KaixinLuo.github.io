function showPersona(){
    document.getElementById("window").innerText = "persona"
}

for (e in document.getElementsByTagName("path")){
    e.addEventListener("mouseenter", showPersona)
}