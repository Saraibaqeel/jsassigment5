//Chap 17-20
//Q1

var num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
document.write(num[0][1])
//Q2
var num = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]

for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num[i].length; j++) {
        document.write(num[i][j])


    }
    document.write("<br>")

}
//Q3
for (var i = 1; i <= 10; i++) {
    document.write(i);
    document.write("<br>")

}
//Q4
var tableNumber = +prompt("Enter Table Number");
var Length = +prompt("Enter Length of Table");
for (var i = 1; i < Length + 1; i++) {
    document.write(tableNumber + " x" + " " + i + " " + "=" + tableNumber * i)
    document.write("<br>")
}
//Q5
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i])
    document.write("<br>")


}

for (var i = 0; i < fruits.length; i++) {


    document.write("Element at index  " + i + "is" + fruits[i])
    document.write("<br>")

}

//Q6
document.write("Counting")
document.write("<br>")

for (i = 1; i <= 15; i++) {


    document.write(i + ",")



}
document.write("<br>")
document.write("Reverse Counting")
document.write("<br>")
for (i = 10; i >= 1; i--) {


    document.write(i + ",")





}
document.write("<br>")
document.write("Even Numbers ")
document.write("<br>")


for (i = 1; i <= 20; i++) {


    if (i % 2 == 0) {
        document.write(i + ",")
    }





}
document.write("<br>")
document.write("Odd Numbers ")
document.write("<br>")
for (i = 1; i <= 20; i++) {


    if (i % 2 != 0) {
        document.write(i + ",")
    }


}
document.write("<br>")
document.write("Series ")
document.write("<br>")
for (i = 2; i <= 20; i += 2) {



    document.write(i + "k,")


}
//Q7
var array = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Enter Item")
var flag = "yes";
for (var i = 0; i < array.length; i++) {
    if (array[i] === input) {
        alert("Element is present at Index=" + i)
        flag = "no";
    }

}
if (flag === "yes") {
    alert("Sorry Sir/Mam " + input + " " + "is not available")
}


//Q8
var array = [24, 53, 78, 91, 12];
var temp = 0;

for (i = 0; i <= array.length; i++) {
    if (array[i] > temp) {
        var temp = array[i];
    }
}




document.write("Largest=" + temp)
//Q9
var array = [24, 53, 78, 91, 12];
var temp = array[0];

for (i = 0; i <= array.length; i++) {
    if (array[i] < temp) {
        var temp = array[i];
    }
}




document.write("Smallest=" + temp)
//Q10
var num = 5;
for (var i = 1; i <= 20; i++) {
    document.write(num * i + " ")
}
