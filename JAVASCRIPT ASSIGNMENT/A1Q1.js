function findSum(n)
 {
  let result = 0;
  for(let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result
}

let n= 10;
console.log(`Sum of numebers from 1 to ${n} is ${findSum(n)}`)