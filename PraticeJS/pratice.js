var elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML);
}
console.log(elements.length);
document.getElementById("p4").innerText = "Welcome to broadway";