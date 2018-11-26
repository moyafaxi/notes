var a = [5, 8, 7, 3, 1];
a.sort((a, b)=>{
  return a-b < 0;
})

console.log(a);