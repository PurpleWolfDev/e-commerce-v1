
function search() {
    var query = document.querySelector(".input-box").value;
    var container = document.querySelector(".products-container");
    container.innerHTML = "";
    query = query.trim();
    if(query==" "||query=="") {
        // Eat Five Star Do Nothing
    }
    else {
    fetch("http://127.0.0.1/search:"+query)
    .then(response => response.json())
    .then(data => {
        var len = data.length;
        for(var i = 0;i < len; i++) {
            var a = data[i];
            var e = document.createElement("div");
            var f = document.createElement("div");
            var g = document.createElement("div");
            var h = document.createElement("div");
            var k = document.createElement("div");
            var j = document.createElement("div");
            e.setAttribute("class", "card");
            var aa = JSON.stringify(a);
            e.setAttribute("onclick", `enlarge(${aa})`);
            f.setAttribute("class", "img");
            g.setAttribute("class", "text");
            h.setAttribute("class", "head");
            k.setAttribute("class", "price");
            j.setAttribute("class", "desc");
            e.appendChild(f);
            e.appendChild(g);
            g.appendChild(h);
            g.appendChild(k);
            g.appendChild(j);
            container.appendChild(e);
            var name = a['productName'];
            var price = a['price'];
            var desc = a['description'];
            console.log(screen.width);
            if(screen.width>1600) {
            desc = desc.slice(0, 200);
            } 
            else if(screen.width< 1599&&screen.width> 900) {
            desc = desc.slice(0, 180);
            }
            else {
            desc = desc.slice(0, 100);

            }
            desc = desc+"....";
            var imgUrl = a['imgUrl1'];
            h.innerHTML = name;
            k.innerHTML = price;
            j.innerHTML = desc;
            f.setAttribute("style", `background-image: url("${imgUrl}");background-size: 100% 100%;`)
        }
    });
}
}

function enlarge(a) {
    id = a['productId'];
    window.location.href="/product:"+id;
}