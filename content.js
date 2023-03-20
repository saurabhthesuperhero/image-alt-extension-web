function displayAltText() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      var alt = images[i].getAttribute("alt");
      if (alt !== null && alt !== "") {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = images[i].offsetTop + "px";
        div.style.left = images[i].offsetLeft + "px";
        div.style.width = images[i].offsetWidth + "px";
        div.style.height = images[i].offsetHeight + "px";
        div.style.backgroundColor = "white";
        div.style.opacity = "0.7";
        div.style.color = "black";
        div.style.fontSize = "14px";
        div.style.padding = "4px";
        div.style.fontFamily = "sans-serif";
        div.style.textAlign = "center";
        div.innerHTML = alt;
        images[i].parentNode.insertBefore(div, images[i]);
      }
    }
  }
  
  displayAltText();
  