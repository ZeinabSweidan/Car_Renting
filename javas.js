function cost(price) {
    let days=document.getElementById("days");
    if(days.value==""){
        alert("You should Fill all the informations");
    }
    else{
    let cost=0;
    let nbOfDays = document.getElementById("days").value;

    cost=parseInt(nbOfDays) *parseInt( price);
    document.getElementById("in").innerHTML= "<h4>Dear Customer: You have To pay $"+cost+" . &#x1F60A </h4>";
    if(cost>200){
        let cost1 =cost - cost*0.2;
        document.getElementById("in1").innerHTML="Congratulations... &#127881  You get a discount of 20% <br>  You have to pay $"+cost1;
    }
}
    
}