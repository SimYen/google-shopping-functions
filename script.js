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

var getItems = function( jsonObject ){
  var itemList = [];
  for (var i = 0; i < jsonObject.items.length; i++) {
    itemList.push( jsonObject.items[i] );
  }
  return itemList;
}

var getItemsByBrand = function(items, brand){
  var brandItemList = [];
  for (var x = 0; x < items.length; x++) {
    if (items[x].product.brand === brand) {
    brandItemList.push( items[x] );
    }
  }
  return brandItemList;
}

var inputHappened = function(currentInput){
  console.log( products );

  // before you begin the code below:

  var allItemsArray = getItems( products ) ;
  console.log( allItemsArray );

  // do stuff with items array

  var result = getItemsByBrand(allItemsArray, currentInput);
  console.log( result );

  return result.length;
};
