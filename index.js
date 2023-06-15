function validate() {
    let sname = document.getElementById("naming").value;
    let ssurname = document.getElementById("surnaming").value;
    let snum = document.getElementById("numbing").value;
    
    if (sname.length > 10 && ssurname.length > 12 && (snum.length > 10 || snum.length < 10)) {
        document.getElementById("hero").innerHTML = "something went wrong";
    }
    else if (sname === "" && ssurname === "" && snum.length === 0 ){
        document.getElementById("hero").innerHTML = "something went wrong";
    }
    else {
        document.getElementById("hero").innerHTML = "👍";
    }
}

function randomgen() {
    let sname = document.getElementById("naming").value;
    let ssurname = document.getElementById("surnaming").value;
    let rndsht = sname.substring(0, 1) + ssurname;

    // Do something with rndsht
}
