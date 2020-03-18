/**
* In this kata you will create
* a function that takes a list of non-negative integers
* and strings and returns a new list
* with the strings filtered out.
*
* Example
* filter_list([1,2,'a','b']) == [1,2]
* filter_list([1,'a','b',0,15]) == [1,0,15]
* filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
**/
/**
* without array's filter() method
* traditional way of looping arrays,
* faster than filter() method
**/
export default function filter_list_old(l) {
// Return a new array with the strings filtered out
  let filteredList = [];
  if (Array.isArray(l)) {
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] === 'number') {
        filteredList.push(l[i]);
      }
    }
    return filteredList;
  }
}
/**
* using filter() method to return only number list
**/
function filter_list_es6(l) {
  // Return a new array with the strings filtered out
  return Array.isArray(l) && l.filter((val)=> (typeof val === 'number')) || undefined;
}

