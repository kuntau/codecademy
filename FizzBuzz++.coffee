#hello

FizzBuzzPlus =
  isFizzBuzzie: (num) ->
    #@num = num
    if num%3 is 0
      return false if num%5 is 0
      true
    else if num%5 is 0
      true
    else false

  getFizzBuzzSum: (num) ->
    total = 0
    total += i for i in [1...num] when @isFizzBuzzie i
    total

  getFizzBuzzCount: (num) ->
    total = 0
    total++ for i in [1...num] when @isFizzBuzzie i
    total

  getFizzBuzzAverage: (num) ->
    @getFizzBuzzSum(num) / @getFizzBuzzCount(num)

console.log "Zzzz " + FizzBuzzPlus.getFizzBuzzSum(10)
console.log "Zzzz " + FizzBuzzPlus.getFizzBuzzCount(10)
console.log "Zzzz " + FizzBuzzPlus.getFizzBuzzAverage(10)
