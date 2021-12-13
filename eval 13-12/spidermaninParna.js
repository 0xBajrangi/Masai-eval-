
function spiderman(n, arr) {
    let dp = new Array(n).fill(1000000);
    dp[0] = 0;
   
    for (let i = 0; i < n; i++){
        let j = i + 1;
        while(j<i+3 && j <n){
        
            dp[j] = Math.min(dp[j], dp[i] + Math.abs(arr[i] - arr[j]));
            j++;
        }
    }
    console.log(dp[n - 1]);

}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split('\n');
    n = +n;
    arr = arr.split(" ").map(Number);

    spiderman(n, arr);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`4
10 10 20 30`);
  
  
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