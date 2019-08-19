// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'mary';

function upperCaseCustomerName()
{
   customerName = customerName.toUpperCase();
   return customerName;
}

function setBestCustomer()
{
  //variables created without var, let, const are global
   bestCustomer = 'not bob';
   return bestCustomer;
  
}

function overwriteBestCustomer()
{
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

function changeLeastFavoriteCustomer()
{
  leastFavoriteCustomer = 'bill';
  return leastFavoriteCustomer;
}


 