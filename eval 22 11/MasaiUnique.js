function Unique(str) {
    let uniq = {};
    for (let i = 0; i < str.length; i++){
        if (uniq[str[i]] === undefined) {
            uniq[str[i]] = 1;
        } else {
            return "No"
        }
    }
    return "Unique"
}

function runProgram(input) {
     //format the input and call the function to execute
    let str = input.trim();
    console.log(Unique(str));
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`masai`);
  
  
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