
let results = ''

deleteUpdateCustomer.onshow=function(){
  let query = "SELECT DISTINCT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + query)
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
      
  txtareaMain1.clear();
    
    for (i = 0; i <= results.length - 1; i++) {
        txtareaMain1.addItem(results[i])
      }
}
 

btnDelete.onclick=function(){
  let query2 = "DELETE FROM customer WHERE name = " + '"' + txtareaMain1.value + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + query2)
   
   txtareaMain1.clear();
   
  if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }

let query3 = "SELECT DISTINCT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + query3)
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
      
  txtareaMain1.clear();
    
    for (i = 0; i <= results.length - 1; i++) {
        txtareaMain1.addItem(results[i])
      }
  }

btnUpdate.onclick=function(){
  let nameUpdate = "UPDATE customer SET name = '" + iptUpdate.value + "' WHERE name = '" + txtareaMain1.value + "'"
   req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + nameUpdate)
   if (req1.status == 200) { 
   results = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
iptUpdate.value = ''

  let query = "SELECT DISTINCT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amd82766&pass=Classof2020&database=amd82766&query=" + query)
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log("parsed result in onshow: " + results)
      } else {
        NSB.MsgBox("Error: " + req1.status);
      }
      
  txtareaMain1.clear();
    
    for (i = 0; i <= results.length - 1; i++) {
        txtareaMain1.addItem(results[i])
      }
}

hbrMenu2.onclick=function(s){
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
