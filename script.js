function day() {

  /*variables that allow you to enter day,month and year */

  var birthDay = parseFloat(document.getElementById("day").value);
  var month = parseFloat(document.getElementById("month").value);
  var year= parseFloat(document.getElementById("year").value);

  /* cc here is used to calculate the century */

  var CC = (year - 1) / 100 + 1;

/*weekday help you to calculate a day of week on which you were born on */

  var weekDay = ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + birthDay)%7;
  console.log( weekDay);

  /*to display a day of week on webpage */

  document.getElementById("result").innerHTML = parseInt( weekDay);

  var femaleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi"," kwame"];
  var maleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  /*to check the gender you'he selected from webpage */

  var gender= document.getElementById("select").value;

/*to ckeck whether you are male or female */
/*and check whether you've inserted  valid year,month and birth date  */

if ((gender=== "male" && (birthDay>0 && birthDay<=31)&&(month>0 && month<=12)&& year>=1)){
    console.log(maleNames[parseInt( weekDay)]);

  document.getElementById("akan-name").innerHTML=maleNames[parseInt(weekDay)];

} else if((gender==="female" && (birthDay>0 && birthDay<=31)&&(month>0 && month<=12)&& year>=1)){
   console.log(femaleNames[parseInt(weekDay)]);

document.getElementById("akan-name").innerHTML= femaleNames[parseInt(weekDay)];
} else{
  /*if you'he intered the invalid input */
    console.log("invalid input");
    alert("sorry you'he entered the invalid month or date!")
    document.getElementById("akan-name").innerHTML="invalid input";
 }

}




