 //Linked List
 class LinkedList{
  constructor(node){
    this.node = node;
    this.next = null;
  }
}

createLinkedList(arr){
  let node, temp;
  for(let decrement = arr.length-1; decrement >= 0; decrement--){
    if(!node){
      node = new LinkedList(arr[decrement]);
    }
    else{
      temp = new LinkedList(arr[decrement]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}
//Binary Seach
 binarySearch(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (counters[mid] == value) {
      return counters[mid];
    } else if (counters[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }   
  return null;
} 
//Timer for search
/* Handle para request de busca */
let timer;
const interval = 5000;
$(document).on('keyup', () => {
  clearTimeout(timer);
  logger.log('digitando...');
  timer = setTimeout(() => {
    logger.log('parou de digitar.');
  }, interval);
});

$(document).on('keydown', function() {
  clearTimeout(timer);
});

