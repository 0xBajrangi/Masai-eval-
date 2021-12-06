
function diffWays(n,coins) {
  

    let arr = [];
    for (let i = 0; i < n + 1; i++) {
        arr[i] = 0;
    }
    arr[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (coins[i] <= j) {
                arr[j] += arr[(j - coins[i])];
            }
        }
        
    }
console.log(arr[n]+arr[n-1])




}


function runProgram(input) {
     //format the input and call the function to execute
    let n = Number(input.trim());
    let ans = diffWays(n,[1,3,4]);
    
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`5`);
  
  
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }