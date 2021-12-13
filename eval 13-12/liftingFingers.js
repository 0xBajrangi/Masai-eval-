function liftingFingers(str) {
    let count = 1;
    if (str.length == 1) {
        console.log(0);
        return;
    }
    for (let c = 1; c < str.length;c++) {
        if (str[c] != str[c - 1]) {
            count++;
        }
    }
    console.log(count)
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...arr] = input.trim().split('\n');
    test = +test;

    let line = -1;
    while (test--) {
        let str = arr[++line].trim();
        liftingFingers(str);
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