function apiLookup(){

   let pinCode     = '695563';
   let countryCode = 'IN';

   $.get('https://worldpostallocations.com/'+pinCode+'/'+countryCode,(res) =>{
      console.log(res);
   });
}
