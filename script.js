console.log("hello script js");

/*
 * getItemsByBrand
 *
 * function purpose
 * takes an item array returns a new array of all items of a specified brand.
 *
 * data description
 * items - array of all item objects
 * brand - a brand to search for
 *
 * input example
 * var items = [
 *  {
 *    // some item object
 *  }, ... ]
 * var brand = "Sony";
 *
 * function signature
 * items (array), brand (string) --> items in brand (array)
 *
 * functional examples
 * var sonyItems = getItemsByBrand( items, "Sony" ); // returns all items that are Sony
 */


/* failed attempt

var getItemsByBrand = function(items, brand){
   for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      return items[i];
    }
  }
}

var getItems = function(items) {
  return items;
}

var allItemsArray= getItems(products.items);

var result = [];
result.push(getItemsByBrand(allItemsArray, "Nikon"));
console.log( result);
*/

var getItems = function( jsonObject ){
  var items = [];
  for (var i = 0; i < jsonObject.items.length; i++) {
    items.push( jsonObject.items[i] );
  }
  return items;
}

// var getItemsByBrand = function(items, brand){
//   // some code
// };


// just call the function right here and console.log to test
// var result = getItemsByBrand(allItemsArray, "Nikon");
// console.log( result );

// rest of code down here:

var inputHappened = function(currentInput){
  console.log( products );

  // before you begin the code below:
  var allItemsArray = getItems( products ) ;
  console.log( allItemsArray );
  // do stuff with items array

  return "WOW GOOGLE SHOPPING";
};
