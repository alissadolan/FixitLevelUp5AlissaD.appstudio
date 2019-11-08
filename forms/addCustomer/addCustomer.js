
addCustomer.onshow=function(){
   let showState = "SELECT DISTINCT name FROM customer"; 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + showState)
  if (req1.status == 200) { 
        results2 = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results2)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
   
  selCustomer2.clear();
    
    for (i = 0; i <= results2.length - 1; i++) {
        selCustomer2.addItem(results2[i])
      }
}

btnAdd.onclick=function(){
  let add = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + iptName.value + "', '" + iptStreet.value + "', '" + iptCity.value + "', '" + iptState.value + "', '" + iptZipcode.value + "')"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + add)
    if (req1.status == 200) {
    results = JSON.parse(req1.responseText)
    console.log("parsed result in onshow: " + results)
        iptName.value = ''
        iptStreet.value = ''
        iptCity.value = ''
        iptState.value = ''
        iptZipcode.value = '' 
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
      
      let showState = "SELECT DISTINCT name FROM customer"; 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + showState)
  if (req1.status == 200) { 
        results2 = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results2)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
   
  selCustomer.clear();
    
    for (i = 0; i <= results2.length - 1; i++) {
        selCustomer.addItem(results2[i])
      }
 }
 
 hbrMenu3.onclick=function(s){
  if (typeof(s) == 'object')
  return
switch(s) {
case "See Customer":
  ChangeForm(seeCustomers);
  break
case "Add Customer":
  ChangeForm(deleteUpdateCustomer);
  break
case "Edit Customer":
  ChangeForm(addCustomer);
  break
case "Delete Customer":
  ChangeForm(deleteUpdateCustomer);
  break
  }
}
