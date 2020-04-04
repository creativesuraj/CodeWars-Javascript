/**
 * Introduction
 * Little Petya very much likes sequences. Recently he has received one as a gift from his mother.
 * Petya didn't like it at once. He decided to make a replacement. After the replacement Petya sorted the sequence by the numbers' non-decreasing.
 * Now he is asking himself: What is the minimal possible value I could have got after the replacement and sorting the sequence?
 * 
 *  About the replacement
 * Choose exactly one element from the sequence and replace it with another integer > 0. It is not allowed to replace a number with itself or to change no number at all.
 * 
 * Task
 *   Find the minimal possible sequence after performing a valid replacement and sorting the sequence.
 * 
 * Input:
 *   Input contains sequence with N integers. All elements of the sequence > 0. The sequenc will never be empty.
 * 
 * Output:
 *   Return sequence with N integers — the minimum possible values of each sequence element after one replacement and the sorting are performed.
 * 
 * Examples:
 *   ([1,2,3,4,5])  =>  [1,1,2,3,4]
 *   ([4,2,1,3,5])  =>  [1,1,2,3,4]
 *   ([2,3,4,5,6])  =>  [1,2,3,4,5]
 *   ([2,2,2])      =>  [1,2,2]
 *   ([42])         =>  [1]
**/

/**
 * 
 * Idea here is to search for maximum value element in an array replace it with 1, 
 * If maximum is 1, replace with 2
 * and then do the in-place sort of the array
 */

function replacement(a){
  let max = a[0];
  let index = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
      index = i;
    }
  }
  if (max === 1) {
    a[index] = 2;
  } else { 
    a[index] = 1;
  }

   a.sort((x,y)=>x-y);
   return a;
}
