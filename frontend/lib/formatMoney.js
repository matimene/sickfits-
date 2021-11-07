export default function formatMoney(amount = 0) {
   const options = {
      style: 'currency',
      currency: 'EUR',
      minimunFractionDigits: 2,
   };

   // // check if its a clean amount => dont show .00
   // if (amount % 100 === 0) {
   //    options.minimunFractionDigits = 0;
   // }

   const formatter = Intl.NumberFormat('de-DE', options);

   return formatter.format(amount / 100);
}
