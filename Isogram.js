/**
*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

*isIsogram("Dermatoglyphics") == true
*isIsogram("aba") == false
*isIsogram("moOse") == false // -- ignore letter case
**/

/**
*Set's size should be equal to string length
**/
function isIsogram(str){
  const set = new Set();
  for(let i=0;i<str.toLowerCase().length;i++) {
    set.add(str.charAt(i));
  }
  return str.length === set.size;
}
