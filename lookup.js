function apiLookup(){

let pincode = '695563';
let countryCode = 'IN';

$.get('https://worldpostallocations.com/'+pinCode+'/'+countryCode,(res) =>{
console.log(res);
});

}
