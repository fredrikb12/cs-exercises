const LinkedList = require("./LinkedList");

const list = new LinkedList(1, 2, 4, 5, 6, 7);
list.to_s();
console.log(list);
console.log("head: ", list.head);
console.log("tail: ", list.tail);
console.log("at index 3: ", list.at(3));
console.log("list contains 2: ", list.contains(3));
console.log("list contains 4: ", list.contains(4));
console.log("finding index for value 6: ", list.find(6));
console.log("appending 10");
list.append(10);
console.log("prepending 15");
list.prepend(15);
list.to_s();
