//Question 1 average price of all items
var avg = items.reduce((a, b) => {
	return a + b.price
}, 0) / items.length

var answer1 = document.querySelector('#answer1')
answer1.innerHTML = `The average price is ${avg.toFixed(2)}`

//Question 2 show items between $14 - $18
var arr = []
var newItems = items.filter(function(item){
	if (item.price > 14 && item.price < 18) {
		arr += item.title
	} 
})
	

var answer2 = document.querySelector('#answer2')
answer2.innerHTML = arr

//Question 3 display name and price of GBP currency mode
var GBP = ""
var newprice = items.filter(function(item) {
	if (item.currency_code === "GBP"){
		GBP += item.title + " " + item.price 
	}
})

var answer3 = document.querySelector('#answer3')
answer3.innerHTML = GBP

//Question 4 Display a list of all items who are made of wood.
var list = []
var newItems = items.filter(function(item) {
	if (item.materials.indexOf("wood") !== -1){
		list += item.title
	}
})

var answer4 = document.querySelector('#answer4')
answer4.innerHTML = list

//Question 5 Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var list = []
var newItems = items.filter(function(item) {
	if (item.materials.length >= 8){
		list += item.title + " " + item.materials.length + " " + item.materials 
	}
})
var answer5 = document.querySelector('#answer5')
answer5.innerHTML = list

//Question 6 How many items were made by their sellers?
var iMade = 0
var number = items.forEach(function(item){
	iMade += item.who_made === "i_did"
})

var answer6 = document.querySelector('#answer6')
answer6.innerHTML = iMade








