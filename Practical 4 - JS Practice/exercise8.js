window.onload = function () {
    initGrid();
    // document.getElementsByClassName("choice").addEventListener("click","SelectedColor(this)");
    // document.getElementsByClassName("choice").onclick = SelectedColor(this);
}

function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }
    for(var i=0;i<colors.length;i++)
    {
        var x = document.getElementById("colors");
        var block = document.createElement("div");
        block.className = "choice";
        block.style.backgroundColor= colors[i];
        block.setAttribute('onclick', 'SelectedColor(this)');
        x.appendChild(block);
    }
}




function SelectedColor(x){
    var y = document.getElementById("selected");
    var hex = x.style.backgroundColor;
    y.style.backgroundColor = hex;
    y.innerHTML = hex;
}


