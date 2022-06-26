function fibonnaci(num) {
  if (num <= 1) return num;

  return fibonnaci(num -1) + fibonnaci(num -2);
}

console.log(fibonnaci(6));