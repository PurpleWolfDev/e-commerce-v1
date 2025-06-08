function validate() {
    setInterval(() => {
        var btn = document.getElementById("btn");
        var name = $("#name").val();
        var number = $("#number").val();
        number = ""+number;
        var address = $("#Address").val();
        var password = $("#password").val();
        var rePassword = $("#re-password").val();
        if(password==rePassword&&number.length==10) {
            $("#btn").removeAttr("disabled");
        } 
        else {
            $("#btn").attr("disabled", "true");
        }
    }, 50);
}