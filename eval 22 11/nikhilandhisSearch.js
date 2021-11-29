function findindex(x, arr) {
  
    let low = 0;
    let high = arr.length - 1;
    
    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            high = mid;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

function findLess(x, arr) {
    let ans = findindex(x, arr);
    
    return (ans === -1) ? 0 : arr.length - ans;
}
function findGreater(x, arr) {
    let ans = findindex(x, arr);
    return (ans === -1) ? 0 : arr.length - ans-1;
}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, q, ...query] = input.trim().split('\n');
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    q = +q;
    arr = arr.sort((a,b)=>(a-b));
    let line = -1;
    while (q--) {
        let [qry,x] = query[++line].trim().split(' ').map(Number);
        if (qry === 0) {
          console.log(  findLess(x, arr));
        } else if (qry === 1) {
            console.log(findGreater(x, arr));
        }
    }

   
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`4
1 1 3 3
3
0 1
1 3
0 3`);
  
  
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