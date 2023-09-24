//创建一个会返回什么东西的函数，再创建一个不会返回任何东西的函数。
function add(a, b) {
    return a + b;
  }
  const result = add(2, 3);
  console.log(result); 
  //有返回的函数
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('world');
  //无返回的函数
  
 // 创建一个能够计算三角形面积的函数，再创建一个在控制台打印给定两个数值之间所有素数的函数。
  function cal(a, b) {
      // 计算三角形的面积
      const s = 0.5 * a * b;
      return s;
    }
    const a = parseFloat(prompt("请输入三角形的底："));
    const b = parseFloat(prompt("请输入三角形的高："));
    const triangleArea = cal(a, b);
    console.log(`三角形的面积是：${triangleArea}`);
  //能够计算三角形面积的函数
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });
  readline.question("输入较小的数字：", (num1) => {
      readline.question("输入较大的数字：", (num2) => {
          printPrimesBetweenNumbers(Number(num1), Number(num2));
          readline.close();
      });
  });
  //一个在控制台打印给定两个数值之间所有素数的函数
  function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
  }
  function printPrimesBetweenNumbers(num1, num2) {
      let primes = [];
      for (let i = num1; i <= num2; i++) {
          if (isPrime(i)) {
              primes.push(i);
          }
      }
      if (primes.length === 0) {
          console.log("none");
      } else {
          console.log("这两个数字之间的素数为: " + primes.join(", "));
      }
  }
  //一个在控制台打印给定两个数值之间所有素数的函数