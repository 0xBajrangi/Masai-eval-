function findLifts(str) {
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1])
            count++;
    }
    console.log(count);
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...arr] = input.trim().split('\n');
    test = +test;

    let line = -1;
    while (test--) {
        let str = arr[++line].trim().split("");
        findLifts(str);
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`2
aaaaa
abbbaaz`);
  
  
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