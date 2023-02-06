const arr = [4, 7, 20];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}
console.log(`sumFor:${sumFor(arr)}`);

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(`sumWhile:${sumWhile(arr)}`);

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
console.log(`sumRecursion:${sumRecursion(arr)}`);

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(`sumTheSimpleWay:${sumTheSimpleWay(arr)}`);
