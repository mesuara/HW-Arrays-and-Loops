// Consider the following arrays :

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// o = ["th", "st", "nd", "rd"];

// Display the colors on the web page in the following way :

// "1st choice is Blue ."

// "2nd choice is Green."

// "3rd choice is Red."

// "4th choice is Orange."


color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th", "st", "nd", "rd"];

var show = ''
var count = 1;
for(var i = 0; i < color.length; i++){
if(count <= 3){
show += count + o[count] + " choice is " + color[i] + "<br>";
count++
}
else{
show += count + o[0] + " choice is " + color[i] + "<br> ";
count++
}
}

document.getElementById('hello').innerHTML = show
