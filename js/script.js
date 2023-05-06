const parameters = [];
const errorMessage = document.getElementById("errorMessage");

const urlParams = new URLSearchParams(window.location.search);
const map = [
    size = parseInt(urlParams.get('mapSize')),
    maxOccArea = Math.floor(size * size * parseInt(urlParams.get('maxOccArea')) / 100),
    natural = [
        zones = parseInt(urlParams.get('nZones')),
        zonesMaxSize = parseInt(urlParams.get('nZoneMaxSize')),
        totalMaxSize = parseInt(urlParams.get('nTotalMaxSize')),

    ],
    urban = [
        zones = parseInt(urlParams.get('uZones')),
        zonesMaxSize = parseInt(urlParams.get('uZoneMaxSize')),
        totalMaxSize = parseInt(urlParams.get('uTotalMaxSize'))
    ],
    commercial = [
        zones = parseInt(urlParams.get('cZones')),
        zonesMaxSize = parseInt(urlParams.get('cZoneMaxSize')),
        totalMaxSize = parseInt(urlParams.get('cTotalMaxSize'))
    ]
];

let mapGenerated = [];
let plotPerZone = [];
document.getElementById("waitMessage").style.display = "none";
document.getElementById("form").style.display = "block";
if(urlParams.has('mapSize')) {
    document.getElementById("form").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("waitMessage").style.display = "block";
    document.getElementById("btnSave").style.display = "block";
    document.getElementById("btnBack").style.display = "block";
    mapGenerated = new Array(map[0]);
    generateWorld();
}

function getElements(){
    parameters[0] = document.getElementById("inputMapSize").value;
    parameters[1] = document.getElementById("inputMaxOccArea").value;
    parameters[2] = document.getElementById("inputNMinZones").value;
    parameters[3] = document.getElementById("inputNMaxZones").value;
    parameters[4] = document.getElementById("inputNZoneMaxSize").value;
    parameters[5] = document.getElementById("inputNTotalMaxSize").value;
    parameters[6] = document.getElementById("inputUMinZones").value;
    parameters[7] = document.getElementById("inputUMaxZones").value;
    parameters[8] = document.getElementById("inputUZoneMaxSize").value;
    parameters[9] = document.getElementById("inputUTotalMaxSize").value;
    parameters[10] = document.getElementById("inputCMinZones").value;
    parameters[11] = document.getElementById("inputCMaxZones").value;
    parameters[12] = document.getElementById("inputCZoneMaxSize").value;
    parameters[13] = document.getElementById("inputCTotalMaxSize").value;

    parameters.forEach(e => {
        if(e === ""){
            errorMessage.innerHTML = getCookie("language") == "en" ? "Please fill all the fields" : "Por favor rellene todos los campos";
            return false;
        } 
    });
    return true;
}

function redirect(){
    if(urlParams.has('mapSize')) {location.reload(); return false;}
    if(!getElements()) return false;

    let url = "?mapSize=" + parameters[0] + "&maxOccArea=" + parameters[1] + 
        "&nZones=" + (Math.floor(Math.random() * (parseInt(parameters[3]) - parseInt(parameters[2]) + 1)) + parseInt(parameters[2])) + "&nZoneMaxSize=" + parameters[4] + "&nTotalMaxSize=" + parameters[5] + 
        "&uZones=" + (Math.floor(Math.random() * (parseInt(parameters[7]) - parseInt(parameters[6]) + 1)) + parseInt(parameters[6])) + "&uZoneMaxSize=" + parameters[8] + "&uTotalMaxSize=" + parameters[9] + 
        "&cZones=" + (Math.floor(Math.random() * (parseInt(parameters[11]) - parseInt(parameters[10]) + 1)) + parseInt(parameters[10])) + "&cZoneMaxSize=" + parameters[12] + "&cTotalMaxSize=" + parameters[13];
    window.location.href = url;
}

function setInitPlots(){
    let cont = 0;
    for(let i = 0; i < map[0]; i++) 
        mapGenerated[i] = new Array(map[0]).fill(-1);
    for(let i = 1; i <= map[2][0] + map[3][0] + map[4][0]; i++){
        let x = Math.floor(Math.random() * map[0]);
        let y = Math.floor(Math.random() * map[0]);
        if(mapGenerated[x][y] === -1) mapGenerated[x][y] = i;
        else i--;
        cont++;
    }
    return cont;
}

function occupiedPlots(){
    let cont = 0;
    for(let x = 0; x < map[0]; x++) 
        for(let y = 0; y < map[0]; y++) 
            if(mapGenerated[x][y] !== -1) cont++;
    return cont;
}

function growPlots(){
    cont = setInitPlots();
    let naturalCont = 0, urbanCont = 0, commercialCont = 0;
    while(cont <= map[1])
        for(let x = 0; x < map[0]; x++) {
            for(let y = 0; y < map[0]; y++) {
                if(mapGenerated[x][y] !== -1 && cont <= map[1]){
                    plotPerZone[mapGenerated[x][y]]++;

                    if((mapGenerated[x][y] > 0 && mapGenerated[x][y] <= map[2][0] + 1) && (plotPerZone[mapGenerated[x][y]] < map[2][1] && naturalCont < map[2][2])) naturalCont++;
                    else if(mapGenerated[x][y] > map[2][0] + 1 && mapGenerated[x][y] <= map[2][0] + map[3][0] + 1 && (plotPerZone[mapGenerated[x][y]] < map[2][1] && naturalCont < map[2][2])) urbanCont++;
                    else if(mapGenerated[x][y] > map[2][0] + map[3][0] + 1 && (plotPerZone[mapGenerated[x][y]] < map[2][1] && naturalCont < map[2][2])) commercialCont++;
                    
                    let direction = Math.floor(Math.random() * 8);
                    switch(direction){
                        case 0: // Up
                            y > 0 && mapGenerated[x][y-1] === -1 ? mapGenerated[x][y-1] = mapGenerated[x][y] : cont--;
                            break;
                        case 1: // Left
                            x > 0 && mapGenerated[x-1][y] === -1 ? mapGenerated[x-1][y] = mapGenerated[x][y] : cont--;
                            break;
                        case 2: // Down
                            y < map[0] - 1 && mapGenerated[x][y+1] === -1 ? mapGenerated[x][y+1] = mapGenerated[x][y] : cont--;
                            break;
                        case 3: // Right
                            x < map[0] - 1 && mapGenerated[x+1][y] === -1 ? mapGenerated[x+1][y] = mapGenerated[x][y] : cont--;
                            break;
                        case 4: //Up-Left
                            y > 0 && x > 0 && mapGenerated[x-1][y-1] === -1 ? mapGenerated[x-1][y-1] = mapGenerated[x][y] : cont--;
                            break;
                        case 5: //Down-Left
                            y < map[0] - 1 && x > 0 && mapGenerated[x-1][y+1] === -1 ? mapGenerated[x-1][y+1] = mapGenerated[x][y] : cont--;
                            break;
                        case 6: //Down-Right
                            y < map[0] - 1 && x < map[0] - 1 && mapGenerated[x+1][y+1] === -1 ? mapGenerated[x+1][y+1] = mapGenerated[x][y] : cont--;
                            break;
                        case 7: //Up-Right
                            y > 0 && x < map[0] - 1 && mapGenerated[x+1][y-1] === -1 ? mapGenerated[x+1][y-1] = mapGenerated[x][y] : cont--;
                            break;
                    }
                    cont++;
                } 
            }
        }
}

function showMap(){
    let mapDiv = document.getElementById("map");
    for(let i = 0; i < map[0]; i++){
        let div = document.createElement("div");
        div.classList.add("d-flex");
        div.classList.add("justify-content-center");
        div.style.margin = "auto";
        div.classList.add("p-0");
        for(let j = 0; j < map[0]; j++){
            let p = document.createElement("p");
            p.innerHTML = mapGenerated[i][j] === -1 ? "&nbsp;&nbsp;&nbsp;": mapGenerated[i][j] < 10 ? mapGenerated[i][j] + "&nbsp;&nbsp;": mapGenerated[i][j] + "&nbsp;";
            p.style.backgroundColor = mapGenerated[i][j] === -1 ? "#33333a" : mapGenerated[i][j] <= map[2][0] ? "green" : mapGenerated[i][j] <= map[2][0] + map[3][0] ? "yellow" : "orange";
            p.classList.add("m-0");
            p.classList.add("p-0");
            p.style.fontSize = "6px";
            p.style.width = "16px";
            div.appendChild(p);
        }
        mapDiv.appendChild(div);
    }
}

function generateWorld(){
    growPlots();
    showMap();
    document.getElementById("waitMessage").style.display = "none";
}

function sendMap(){
    let mapString = "";
    for($i = 0; $i < mapGenerated.length; $i++){
        for($j = 0; $j < mapGenerated.length; $j++){
            mapString += mapGenerated[$i][$j];
        }
        mapString += "|";
    }
    console.log(mapString);
    $.ajax({
        type: "POST",
        url: "save.php",
        data: {map: mapGenerated}, 
        cache: false,
        success: function(){
            alert("OK");
        }
    });
}