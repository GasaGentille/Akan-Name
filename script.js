function day() {

  /*variables that allow you to enter day,month and year */

  var DD = parseFloat(document.getElementById("day").value);
  var MM = parseFloat(document.getElementById("month").value);
  var YY = parseFloat(document.getElementById("year").value);

  /* cc here is used to calculate the century */

  var CC = (YY - 1) / 100 + 1;

/*weekday help you to calculate a day of week on which you were born on */

  var weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  console.log( weekDay);

  /*to display a day of week on webpage */

  document.getElementById("result").innerHTML = parseInt( weekDay);

  var femaleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi"," kwame"];
  var maleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  /*to check the gender you'he selected from webpage */

  var gender= document.getElementById("select").value;

/*to ckeck whether you are male or female */
/*and check whether you've inserted  valid year,month and birth date  */

if ((gender=== "male" && (DD>0 && DD<=31)&&(MM>0 && MM<=12)&& YY>=1)){
    console.log(maleNames[parseInt( weekDay)]);

  document.getElementById("akan-name").innerHTML=maleNames[parseInt(weekDay)];

} else if((gender==="female" && (DD>0 && DD<=31)&&(MM>0 && MM<=12)&& YY>=1)){
   console.log(femaleNames[parseInt(weekDay)]);

document.getElementById("akan-name").innerHTML= femaleNames[parseInt(weekDay)];
} else{
  /*if you'he intered the invalid input */
    console.log("invalid input");
    alert("sorry you'he entered the invalid month or date!")
    document.getElementById("akan-name").innerHTML="invalid input";
 }

}



