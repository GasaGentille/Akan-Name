function weekd() {
  var DD = parseFloat(document.getElementById("day").value);
  var MM = parseFloat(document.getElementById("month").value);
  var YY = parseFloat(document.getElementById("year").value);
  var CC = (YY - 1) / 100 + 1;
  var dayoftheweek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

  console.log(dayoftheweek);
  document.getElementById("result").innerHTML = Math.round(dayoftheweek);
  
  var femaleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
  var maleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var choice = document.getElementById('select').value;
  
  if (choice === "male") {
      console.log(maleNames[Math.round(dayoftheweek)]);
  
      document.getElementById('akan').innerHTML =maleNames[Math.round(dayoftheweek)];
  
  } else if (choice === "female") {
  
      console.log(femaleNames[Math.round(dayoftheweek)]);
      document.getElementById('akan').innerHTML = femaleNames[Math.round(dayoftheweek)];
  } else {
      console.log("invalid outuput");
  }