
//Start (Storing click counts in local storage and recent clicked items in form of array)
if(localStorage.getItem('menu_array')==null){
    localStorage.setItem('menu_array', '[ ]');
}



// shirts

function shirts_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("a");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.shirts) {
            localStorage.shirts = Number(localStorage.shirts)+1;
        } else {
            localStorage.shirts = 1;
        }
    } 
    }
    

// jeans

function jeans_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("b");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.jeans) {
            localStorage.jeans = Number(localStorage.jeans)+1;
        } else {
            localStorage.jeans = 1;
        }
    } 
    }

// swimwear

function swimwear_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("c");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.swim) {
            localStorage.swim = Number(localStorage.swim)+1;
        } else {
            localStorage.swim = 1;
        }
    } 
    }


// sleepwear

function sleepwear_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("d");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.sleep) {
            localStorage.sleep = Number(localStorage.sleep)+1;
        } else {
            localStorage.sleep = 1;
        }
    } 
    }



// sportswear

function sportswear_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("e");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.sports) {
            localStorage.sports = Number(localStorage.sports)+1;
        } else {
            localStorage.sports = 1;
        }
    } 
    }


// jumpsuite

function jumpsuite_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("f");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.jumpsuite) {
            localStorage.jumpsuite = Number(localStorage.jumpsuite)+1;
        } else {
            localStorage.jumpsuite = 1;
        }
    } 
    }


// blazers

function blazers_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("g");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.blazers) {
            localStorage.blazers = Number(localStorage.blazers)+1;
        } else {
            localStorage.blazers = 1;
        }
    } 
    }



// jackets

function jackets_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("h");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.jackets) {
            localStorage.jackets = Number(localStorage.jackets)+1;
        } else {
            localStorage.jackets = 1;
        }
    } 
    }



// shoes

function shoes_click() {
    var old_array = JSON.parse(localStorage.getItem('menu_array'));
    old_array.push("i");
    localStorage.setItem('menu_array', JSON.stringify(old_array));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.shoes) {
            localStorage.shoes = Number(localStorage.shoes)+1;
        } else {
            localStorage.shoes = 1;
        }
    } 
    }

//Ends (Storing click counts on local storage)  



//Fetching the click counts

let shirts = Number(localStorage.getItem('shirts'));
let jeans = Number(localStorage.getItem('jeans'));
let swim = Number(localStorage.getItem('swim'));
let sleep = Number(localStorage.getItem('sleep'));
let sports = Number(localStorage.getItem('sports'));
let jumpsuite = Number(localStorage.getItem('jumpsuite'));
let blazers = Number(localStorage.getItem('blazers'));
let jackets = Number(localStorage.getItem('jackets'));
let shoes = Number(localStorage.getItem('shoes'));


//Adjusting value based on primacy and recency

let new_array = JSON.parse(localStorage.getItem('menu_array'));
let recent = new_array[new_array.length - 1];



// Checking for recency and increasing the count

switch(recent){
    case "a" :
        shirts = shirts * 1.3;
    break;
    case "b" :
        jeans = jeans * 1.3;
    break;
    case "c" :
        swim = swim * 1.3;
    break;
    case "d" :
        sleep = sleep * 1.3;
    break;
    case "e" :
        sports = sports * 1.3;
    break;
    case "f" :
        jumpsuite = jumpsuite * 1.3;
    break;
    case "g" :
        blazers = blazers * 1.3;
    break;
    case "h" :
        jackets = jackets * 1.3;
    break;
    case "i" :
        shoes = shoes * 1.3;
    break;
}


//Sorting the variables
var varArray = [shirts, jeans, swim, sleep, sports, jumpsuite, blazers, jackets, shoes];
varArray.sort(function(a, b) {return a - b;});
let fvarray = varArray[varArray.length - 1];
let svarray = varArray[varArray.length - 2];
let tvarray = varArray[varArray.length - 3];



//menu items append function
function addshirts(){
    const node = document.getElementById("shirts");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addjeans(){
    const node = document.getElementById("jeans");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addswim(){
    const node = document.getElementById("swimwear");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addsleep(){
    const node = document.getElementById("sleepwear");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addsports(){
    const node = document.getElementById("sportswear");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addjumpsuite(){
    const node = document.getElementById("jumpsuite");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addsblazers(){
    const node = document.getElementById("blazers");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addjackets(){
    const node = document.getElementById("jackets");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}

function addshoes(){
    const node = document.getElementById("shoes");
    const clone = node.cloneNode(true);
    document.getElementById("adaptive_menu").appendChild(clone);
}



// checking condition for which elements to display in adaptive part

switch(fvarray){
    case shirts :
        addshirts();
    break;
    case jeans :
        addjeans();
    break;
    case swim :
        addswim();
    break;
    case sleep :
        addsleep();
    break;
    case sports :
        addsports();
    break;
    case jumpsuite :
        addjumpsuite();
    break;
    case blazers :
        addsblazers();
    break;
    case jackets :
        addjackets();
    break;
    case shoes :
        addshoes();
    break;
}



switch(svarray){

    case shoes :
        addshoes();
    break;
    case jackets :
        addjackets();
    break;
    case blazers :
        addsblazers();
    break;
    case jumpsuite :
        addjumpsuite();
    break;
    case sports :
        addsports();
    break;
    case sleep :
        addsleep();
    break;
    case swim :
        addswim();
    break;
    case jeans :
        addjeans();
    break;
    case shirts :
        addshirts();
    break;
}



switch(tvarray){
    case swim :
        addswim();
    break;
    case sleep :
        addsleep();
    break;
    case shirts :
        addshirts();
    break;
    case jeans :
        addjeans();
    break;
    case sports :
        addsports();
    break;
    case jumpsuite :
        addjumpsuite();
    break;
    case blazers :
        addsblazers();
    break;
    case jackets :
        addjackets();
    break;
    case shoes :
        addshoes();
    break;
}