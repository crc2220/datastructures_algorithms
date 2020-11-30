/*
getting the min or max value in collection/group
get min/max: o(1)
insert/remove: o(log n)

Priority Queue 
which task is the most pressing? do that next, complete? remove, reorganize heap

parent = i
left child = 2*i + 1
right child = 2*i + 2

get parent of child?
child = i
parent = i/2
*/
class minHeap {
  constructor() {
    this.heap = [null];
  }
  getmin() {
    return this.heap[1];
  }
  insert(node) {
    this.heap.push(node);

    // if heap has nodes do some potential shuffling
    if (this.heap.length > 2) {
      // get the index of recently inserted node
      let current = this.heap.length - 1;
      // while new node is less than parent, swap
      // the term for this process is called "heapifyUp"
      while (this.heap[current] < this.heap[Math.floor(current / 2)]) {
        // if we haven't reached the root node
        if (current >= 1) {
          // put parent where the new node position is
          // put child where the parent position is
          [this.heap[Math.floor(current / 2)], this.heap[current]] = [
            this.heap[current],
            this.heap[Math.floor(current / 2)],
          ];
          // use the old current position to find the new current position since making the swap
          // new node went up so essentially you're getting it's new current position
          current = Math.floor(current / 2);
        } else {
          console.log("reached root node");
          break;
        }
      }
    }
  }
  // remove just removes the min/max
  remove() {
    let smallest = this.heap[1];

    // if there are nodes to reshuffle...
    if (this.heap.length > 2) {
      // get largest far right node and replace root using it
      // this effectively removes it but now you have to resort heap
      this.heap[1] = this.heap[this.heap.length - 1];
      // also remove that large far right node
      this.heap.splice(this.heap.length - 1);

      // if there are just two nodes, remember first node is null
      if (this.heap.length === 3) {
        // then do a quick compare/swap if needed
        // and return smallest node
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let left = current * 2;
      let right = current * 2 + 1;
      while (
        this.heap[current] >= this.heap[left] ||
        this.heap[current] >= this.heap[right]
      ) {
        //   if left child is smaller than right child
        //   have left child be the new root node and swap
        if (this.heap[left] < this.heap[right]) {
          // go down the left branch and swap
          [this.heap[current], this.heap[left]] = [
            this.heap[left],
            this.heap[current],
          ];
          // set new parent to be left child
          current = 2 * current;
        } else {
          // go down the right branch and swap
          [this.heap[current], this.heap[right]] = [
            this.heap[right],
            this.heap[current],
          ];
          // set new parent to be right child
          current = 2 * current + 1;
        }
        // set new children up based on new parent
        left = 2 * current;
        right = 2 * current + 1;

        // if two children of parent don't exist then break out;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      //   if [null, {item}] then just remove one item at index 1
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    // after reorganizing return smallest node
    return smallest;
  }
  // don't really use sort idk
  sort() {
    let result = [];
    let copy = [...this.heap];
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    this.heap = copy;
    return result;
  }
}

let min_heap = new minHeap();
min_heap.insert(10);
min_heap.insert(125);
min_heap.insert(15);
min_heap.insert(8);
min_heap.insert(14);
min_heap.insert(200);
min_heap.remove();
console.log(min_heap.getmin());
console.log(min_heap.sort());
console.log(min_heap.heap);
