
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split('\n');
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    obj = {};
    for (let el of arr) {
        if (obj[el] === undefined) {
            obj[el] = 1;
        } else {
            obj[el]++;
       }
    }
    console.log(obj[0],obj[1],obj[2])
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
  
  
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