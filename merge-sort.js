function mergeSort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length === 2) {
    if (arr[0] < arr[1]) return arr;
    else return [arr[1], arr[0]];
  }
  const leftHalf = mergeSort(arr.slice(0, parseInt(arr.length / 2)));
  const rightHalf = mergeSort(
    arr.slice(parseInt(arr.length / 2, arr.length - 1))
  );
  debugger;
  const sorted = [];
  let i = 0;
  let j = 0;
  leftLoop: while (i <= leftHalf.length) {
    rightLoop: while (j < rightHalf.length || !rightHalf[j]) {
      if (leftHalf[i] < rightHalf[j] || !rightHalf[j]) {
        sorted.push(leftHalf[i]);
        i++;
      } else if (leftHalf[i] >= rightHalf[j] || !leftHalf[i]) {
        sorted.push(rightHalf[j]);
        j++;
      }
      if (sorted.length === leftHalf.length + rightHalf.length) break;
    }
    if (sorted.length === leftHalf.length + rightHalf.length) break;
  }
  return sorted;
}

console.log(mergeSort([4, 3, 5, 6, 1, 7, 8, 9, 2, 8, 7]));
