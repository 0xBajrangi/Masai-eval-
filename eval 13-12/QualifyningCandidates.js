function Qualify(n, k, score) {
    
    score = score.sort((a, b) => b - a);
  
    let rank = [];
    rank[0] = 1;
    for (let i = 1; i < n; i++){
        if (rank[i - 1] <= k) {
            if (score[i] == score[i - 1]) {
                rank[i] = rank[i - 1];
            } else {
                rank[i] = i + 1;
            }
        } else {
            break;
        }
    }
   
    console.log(rank.length-1)
//     let count = 0;
//     for (let el in rank) {
//         if (el <= k) {
//             count++;
//         }
//     }
// console.log(count)

}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...arr] = input.trim().split('\n');
    test = +test;

    let line = -1;
    while (test--) {
        let [n, k] = arr[++line].trim().split(' ').map(Number);
        let score = arr[++line].split(" ").map(Number);
        Qualify(n, k, score)

    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`1
5 2
2 2 5 4 1`);
  
  
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