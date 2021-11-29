function findpos(pos, order) {
    let low = 0;
    let high = order.length - 1;
    if (order[0] > pos) {
        return ["Front", order[0]];
    } if(order[order.length - 1] < pos) {
        return [order[order.length - 1],"Last"]
    }
    while(high>low){
        let mid = low + Math.floor((high - low) / 2);
        if (pos >= order[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return [order[high-1],order[high]]
}

function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...arr] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let pos = Number(arr[++line].trim());
        let order = arr[++line].trim().split(" ").map(Number);
        let ans = findpos(pos, order);
              console.log(ans.join(" "))
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`3
3
1 4 5 6 8 9
5 
1 2 6 7 8
1
2 3 4 5 6`);
  
  
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