let string1 = "maddam"

let string = string1.toUpperCase().replace(/[\W_]/g,'');

for(let i=0;i<(string.length)/2;i++){
  console.log(string[i],string[string.length-1-i])
}

