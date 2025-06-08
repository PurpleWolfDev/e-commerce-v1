function loadBody() {
    var info = localStorage.getItem("AUTH");
    if(info === null) {
        window.location.href="/login";
    }
    else {
        fetchData(info);
    }
}
function fetchData(info) {
    var name = info.slice(12);
    var phone = info.slice(0, 10);
    phone = phone.split("");
    phone = phone.reverse();
    phone = phone.join("");
    fetch("http://127.0.0.1/userProfile:"+phone)
    .then(response => response.json())
    .then(data => {
        var name = data['name'];
        var number = data['phone'];
        var pass = data['password'];
        document.getElementById("inp1").value = name;
        document.getElementById("inp2").value = number;
        document.getElementById("inp3").value = pass;
        document.getElementById("inp4").value = pass;
    });
}