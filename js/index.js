document.addEventListener('DOMContentLoaded', function() {
    var webPath = "&nbsp;Current Page: https://giantfroje.dev/"
    document.getElementById("home").addEventListener("click", function(){
        document.getElementById("window").src = "home.html";
        document.getElementById("window-header").innerHTML = webPath + "home.html";
    });

    var categories = document.getElementsByClassName("category");

    for (var i = 0; i < categories.length; i++) {
        let category = categories[i];
        let children = category.children;
        category.addEventListener("click", function() {
            if (category.collapsed == undefined) {
                category.collapsed = true;
            }
            if (category.collapsed) {
                category.childNodes[0].nodeValue = "ᐁ" + category.childNodes[0].nodeValue.substring(1);
            } else {
                category.childNodes[0].nodeValue = "ᐅ" + category.childNodes[0].nodeValue.substring(1);
            }
            category.collapsed = !category.collapsed;
            for (var i = 0; i < children.length; i++) {
                let child = children[i];
                if (category.collapsed) {
                    child.style.visibility = "hidden";
                    child.style.display = "none";
                } else {
                    child.style.visibility = "visible";
                    child.style.display = "block";
                }
            }
        });
        
        for (var j = 0; j < children.length; j++) {
            let child = children[j];
            child.addEventListener("click", function() {
                event.stopPropagation();
                let path;
                if (child.getAttribute("external") == "true") {
                    console.log("extern");
                    path = child.getAttribute("path");
                    document.getElementById("window-header").innerHTML = "&nbsp;Current Page: " + path;
                } else {
                    console.log("intern");
                    path = "pages/" + child.getAttribute("path") + ".html";
                    document.getElementById("window-header").innerHTML = webPath + path;
                }
                document.getElementById("window").src = path;
                console.log(child.hasAttribute("path"));
            });
        }
    }
});

