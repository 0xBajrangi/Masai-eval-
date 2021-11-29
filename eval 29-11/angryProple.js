function findAngryPeople(n, arr) {
    
    let adjacent = [];
    let track = {};
    for (let i = 0; i < n; i++){
        track[arr[i]] = 0;
    }
    
    for (let i = 0; i < n-1; i++){
       
        
        if (track[arr[i]] == 0) {
            adjacent.push([arr[i], arr[i + 1]]);
            adjacent.push([arr[i],arr[i+2]]);
            track[arr[i]] = 2;
            track[arr[i + 1]] = 1;
            track[arr[i + 2]] = 1;
            
        } else if (track[arr[i]] === 1) {
            if (arr[i + 1] != arr[n - 1]) {
            adjacent.push([arr[i], arr[i + 2]]);
                track[arr[i]]++;
                track[arr[i + 2]]++;
            } else {
                adjacent.push([arr[i], arr[i + 1]]);
                   track[arr[i]]++;
                track[arr[i + 1]]++;
            }
            
        }



    }
    let max_anger = -Infinity;
    for (let i = 0; i < adjacent.length; i++) {
        max_anger = Math.max(max_anger, adjacent[i][1]-adjacent[i][0])
    }
    console.log(max_anger)


}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split('\n');
    n = +n;
    arr = arr.trim().split(" ").map(Number).sort((a, b) => {
        return (a - b)
    });
    
    findAngryPeople(n, arr);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`7
5 10 6 8 11 13 14`);
  
  
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