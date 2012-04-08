(function() {
  var FizzBuzzPlus;

  FizzBuzzPlus = {
    isFizzBuzzie: function(num) {
      if (num % 3 === 0) {
        if (num % 5 === 0) return false;
        return true;
      } else if (num % 5 === 0) {
        return true;
      } else {
        return false;
      }
    },
    getFizzBuzzSum: function(num) {
      var i, total;
      total = 0;
      for (i = 1; 1 <= num ? i < num : i > num; 1 <= num ? i++ : i--) {
        if (this.isFizzBuzzie(i)) total += i;
      }
      return total;
    },
    getFizzBuzzCount: function(num) {
      var i, total;
      total = 0;
      for (i = 1; 1 <= num ? i < num : i > num; 1 <= num ? i++ : i--) {
        if (this.isFizzBuzzie(i)) total++;
      }
      return total;
    },
    getFizzBuzzAverage: function(num) {
      return this.getFizzBuzzSum(num) / this.getFizzBuzzCount(num);
    }
  };

  console.log("Zzzz " + FizzBuzzPlus.getFizzBuzzSum(10));

  console.log("Zzzz " + FizzBuzzPlus.getFizzBuzzCount(10));

  console.log("Zzzz " + FizzBuzzPlus.getFizzBuzzAverage(10));

}).call(this);
