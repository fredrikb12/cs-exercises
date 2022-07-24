function fibIterate(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  const array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

function fibRecurse(n) {
  debugger;
  if (n < 1) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  const arr = fibRecurse(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
}

//console.log(fibIterate(15));

//console.log(fibRecurse(0));
