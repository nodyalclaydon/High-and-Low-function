function highAndLow(numbers){
  const arr = numbers.split(" ").map(item => {
    return Number(item)
  }).sort(function(a, b) {return a - b})
  
  const highLowArr = [arr[0], arr[arr.length - 1]].join(" ")
  
  console.log(highLowArr)
  return highLowArr
}

highAndLow("5 3 7 6 9 11 -3 -56")