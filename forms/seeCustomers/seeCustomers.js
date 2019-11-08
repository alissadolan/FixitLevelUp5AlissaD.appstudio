seeCustomers.onshow=function(){
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

results2 = ''
selCustomer.onclick=function(){
  let showCustomer = "SELECT name, street, city, state, zipcode  FROM customer WHERE name = '" + selCustomer.value + "'"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + showCustomer)
  if (req1.status == 200) { 
        results2 = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results2)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
    
lblResults.value = ''

    for (i = 0; i <= results2.length - 1; i++) {
        lblResults.value += results2[i].join("\n")
      }
}


hbrMenu.onclick=function(s){
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