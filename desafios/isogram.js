//um isogram é uma palavra que não têm caracteres repetidos.
class Isogram () {
  isIsogram(str) {
    str = str.toLowerCase();

  isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; ++i)
      for(let j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }
  isIsogram2 (str) {
    return !str.match(/([a-z]).*\1/i);
  }

  isIsogram3(str){
	  return new Set(str.toUpperCase()).size == str.length;
  }
} 
