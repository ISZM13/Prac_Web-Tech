var CELL_SIZE = 40;

window.onload = function Labyrinth() {
    map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];

        var table = document.createElement('table');
        table.setAttribute('id','boxes');
        document.getElementById('map').appendChild(table);  
        for(var i=1;i<map.length+1;i++)
        { 
            var newrow = document.createElement('tr');
            newrow.setAttribute('id','row'+i);
            document.getElementById('boxes').appendChild(newrow); 
            for(var j=0;j<map[0].length;j++)
            {
                var dabba = document.createElement('td');
                dabba.className = "box";
                if(map[i-1][j]==1)
                dabba.innerHTML='1';
                else
                dabba.innerHTML=' ';
                // dabba.style.display = "inline";
                document.getElementById('row'+i).appendChild(dabba);
            }
        }
}

