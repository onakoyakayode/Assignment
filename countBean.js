function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "B") {
        count++;
      }
    }
    return (count);
}

console.log(countBs("BBBC"))



function countChar(str, char) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === char) {
            count++;
        }
    }

    return (count);
}

console.log(countChar("KKLLLLLL", "K"));