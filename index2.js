
/* Task 4: Create a function called `removeArtist` that takes two arguments:
*     (1) artists array
*     (2) a number which is the desired index in the array.
* removeArtist removes an artist from the data array at the index.
* 
* For example, if removeArtist is invoked with the data and the number 0,
* it will remove Amedeo Modigliani from our dataset.
*/

function removeArtist(artists, element) {
  const index = artists.indexOf(element);
  // return artists.splice(index, 1);
  artists.splice(index, 1);
  
}

console.log(removeArtist(artists, 0));