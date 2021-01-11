export let locations = [
    "Nairobi",
    "Kisumu",
    "Machakos",
    "Mwala",
    "Makueni",
    "Embu",
    "Meru",
    "Marsabit",
    "Mandera",
    "Wajir",
    "Kitui",
    "Mombasa",
    "Namanga",
    "Kajiado",
    "Narok",
    "Malindi",
    "Kilifi",
    "Nakuru"
];
export let validations = () => {
    let location = document.getElementById("location").value;
    let destination = document.getElementById("destination").value;
    const locationPresent = locations.includes(location);
    const destinationPresent = locations.includes(destination);
    let id = document.getElementById("id").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

   

    if (location == "" || destination == "") {
        document.getElementById("alert-info").innerHTML="empty field";
        

    }
    if (!male.checked && !female.checked) {
        document.getElementById("alert-info").innerHTML="please select a gender";
    }

    if ( (!location == "" || !destination == "")&& (location === destination)) {
        document.getElementById("alert-info").innerHTML="Destination and location cannot be the same";

        return false;
    }
    else if (id.length < 8) {
        document.getElementById("alert-info").innerHTML="Review your Id";
        return false;
    }


    if (!locationPresent || !destinationPresent) {
        document.getElementById("alert-info").innerHTML="destination not in our list";
    }
    else {
   
      
        document.getElementById("alert-info").innerHTML="Please confirm your details before submitting";
        let btn = document.createElement("button");
        btn.innerHTML = "submit";
        let sub = document.getElementById("sub");
        sub.appendChild(btn);

    }




}

