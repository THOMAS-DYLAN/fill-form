class PassengerCreator {
    constructor(firstName, lastName, birthday, homeTown, travelCity, leaveDate, returnDate, bags, food, cost, extralist, Age, timeGone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.homeTown = homeTown;
        this.travelCity = travelCity;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.food = food;
        this.cost = cost;
        this.Age = Age;
        this.extralist = extralist;
        this.timeGone = timeGone;
        this.id = Math.ceil(Math.random() * 1000000000 + 1000000);
    }
}
var yes = localStorage.getItem("testStorage");
var yes2 = JSON.parse(yes);

class Money {
    constructor(cost) {
        cost = 10;
        addten(); {
            cost += 10;
            return cost;
        }
    }
}

let food = "";
let id = 0;

function foodChange(choice) {
    food = choice;
}


let passengerList = [];



function addToList() {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    birthday = document.getElementById("DoB").value;
    homeTown = document.getElementById("departing").value;
    travelCity = document.getElementById("arriving").value;
    leaveDate = document.getElementById("leaveDate").value;
    returnDate = document.getElementById("returnDate").value;
    bags = document.getElementById("bags").value;
    let extralist = [];
    let extra = 0;
    if (document.getElementById("legroom").checked == true) {
        extra += 10;
        extralist.push("legroom");
    }
    if (document.getElementById("window").checked == true) {
        extra += 10;
        extralist.push("window");
    }
    if (document.getElementById("headphones").checked == true) {
        extra += 10;
        extralist.push("headphones");
    }
    if (document.getElementById("moreFood").checked == true) {
        extra += 10;
        extralist.push("more Food");
    }

    let bag = 0;
    if (document.getElementById("bags").value) {
        bag += bags * 20 - 20;
    }

    today = Date.now();
    parsed = Date.parse(birthday);
    Age = (today - parsed) / 1000 / 60 / 60 / 24 / 365;
    parsed = Date.parse(leaveDate);
    parsed = Date.parse(returnDate);


    if (Age >= 21) {
        drinkAge = true;
    } else {
        drinkAge = false;
    }
    let returnDate2 = new Date(returnDate);
    let leaveDate2 = new Date(leaveDate);

    let timeGone = Math.abs((returnDate2.getTime() - leaveDate2.getTime()) / (1000 * 60 * 60 * 24));


    let cost = (300 + extra + bag);

    Age = Math.floor(Age);
    timeGone += " days";


    let Passenger = new PassengerCreator(firstName, lastName, birthday, homeTown, travelCity, leaveDate, returnDate, bags, food, cost, extralist, Age, timeGone);
    passengerList.push(Passenger);
    console.log(Passenger.food);
    let testJSON = JSON.stringify(allVals);
    console.log("saved");
    localStorage.setItem("testStorage", testJSON);
}

function search() {
    let firstname = document.getElementById("search").value;
    let id = document.getElementById("search").value;


    for (let i = 0; i < passengerList.length; i++) {
        if (passengerList[i].id == id) {
            console.log(passengerList[i]);
        }
    }
    for (let i = 0; i < passengerList.length; i++) {
        if (passengerList[i].firstName == firstname) {
            let extralistarray = passengerList[i].extralist;
            let extralist = "";

            for (let iw = 0; iw < extralistarray.length; iw++) {
                if (iw == 0) {
                    extralist += `${extralistarray[iw]}`
                } else {
                    extralist += `, ${extralistarray[iw]}`
                }
            }
            document.getElementById("outfirstName").value = (`${passengerList[i].firstName}`);
            document.getElementById("outlastName").value = (`${passengerList[i].lastName}`);
            document.getElementById("outDoB").value = (`${passengerList[i].birthday}`);
            document.getElementById("outbags").value = (`${passengerList[i].bags}`);
            document.getElementById("outdeparting").value = (`${passengerList[i].homeTown}`);
            document.getElementById("outarriving").value = (`${passengerList[i].travelCity}`);
            document.getElementById("outleaveDate").value = (`${passengerList[i].leaveDate}`);
            document.getElementById("outreturnDate").value = (`${passengerList[i].returnDate}`);
            document.getElementById("outextras").value = (`${extralist}`);
            document.getElementById("outmeal").value = (`${passengerList[i].food}`);
            document.getElementById("outage").textContent = (`${passengerList[i].Age}`)
            document.getElementById("outdurration").value = (`${passengerList[i].timeGone}`)
            document.getElementById("outcost").textContent = (`${passengerList[i].cost}`);
            console.log(passengerList[i]);
        }
    }
}
