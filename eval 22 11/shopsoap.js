function findindex(x, arr) {
  
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === x) {
            return [mid,true] ;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [mid,false];
}
function findless(m, arr) {
    let [ans,included] = findindex(m, arr);
    return (ans === 0) ? 0 : (ans === arr.length - 1) ?arr.length :(included)?mid:;
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, q,...query] = input.trim().split("\n");

    n = +n;
    arr = arr.trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    q = +q;
    let line = -1;
    while (q--) {
        let m = Number(query[++line].trim());
       console.log(findless(m,arr));
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
  
  
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