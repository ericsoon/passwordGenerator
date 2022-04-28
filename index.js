let x =[
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",".","/",
    0,1,2,3,4,5,6,7,8,9,
    ":",";",
    "<",
    "=",
    ">",
    "?","@",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "[",
    "'\'",
    "]",
    "^",
    "_",
    "`",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "{",
    "|",
    "}",
    "~"
]



let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
let pass4 = document.getElementById("pass4")

function generator(){
    clearText()
    
    let length = document.getElementById("length").value
    console.log(length)
    for(let i = 0; i < length; i ++){
        pass1.textContent += x[Math.floor(Math.random() * 94)]
        pass2.textContent += x[Math.floor(Math.random() * 94)]
        pass3.textContent += x[Math.floor(Math.random() * 94)]
        pass4.textContent += x[Math.floor(Math.random() * 94)]
    }
}

function clearText(){
    pass1.textContent=""
    pass2.textContent=""
    pass3.textContent=""
    pass4.textContent=""
}

