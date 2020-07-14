var g = document.getElementById("graph");
for (var i = 0; i < document.getElementsByClassName("cls-4").length; i++) {
    document.getElementsByClassName("cls-4")[i].addEventListener("mouseenter", function() {
        document.getElementById("graph").appendChild(document.getElementById("graph").childNodes.item(i));
    })
}