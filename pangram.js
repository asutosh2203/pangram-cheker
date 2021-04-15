var str = "The quick brown fox over the lazy dog"
function checkPangrams(str) {
  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  var regex = /\s/g;
  var lowerString = str.toLowerCase().replace(regex, "");
 
  for(var i = 0; i < alphabets.length; i++){
   if(lowerString.indexOf(alphabets[i]) === -1){
     return "It is not pangram";
   }
  }
 
 return "It is a pangram";
}


function missingChars(str) {
  // A boolean array to store characters
  // present in string.
  var present = [];
  var maxChar = 26;
  for (var i = 0; i <= maxChar; i++) {
    present.push(false);
  }

  // Traverse string and mark characters
  // present in string.
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= "a".charCodeAt(0) && str[i].charCodeAt(0) <= "z".charCodeAt(0)) {
      present[str[i].charCodeAt(0) - "a".charCodeAt(0)] = true;
    } else if (str[i].charCodeAt(0) >= "A".charCodeAt(0) && str[i].charCodeAt(0) <= "Z".charCodeAt(0)) {
      present[str[i].charCodeAt(0) - "A".charCodeAt(0)] = true;
    }
    
  }

  // Store missing characters in alphabetic
  // order.
  var res = [];
  for (var i = 0; i < 26; i++)
    if (present[i] == false) {
      res.push(i + "a".charCodeAt(0));
    }

  var requiredChars = "";
  res.forEach((ascii) => {
    requiredChars += String.fromCharCode(ascii);
  });

  if (requiredChars == ""){
    return "No missing characters"
  } else {
    return "Missing characters are "+requiredChars
  }
}

console.log(checkPangrams(str))
console.log(missingChars(str));
