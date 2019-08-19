// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName()
{
   customerName = customerName.toUpperCase();
}

function setBestCustomer()
{
  //variables created without var, let, const are global
  bestCustomer = 'not bob';
}

function overwriteBestCustomer()
{
  bestCustomer = 'maybe bob';
}


 