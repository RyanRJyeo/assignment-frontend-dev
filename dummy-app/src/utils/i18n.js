export function getCurrentLocale(url) {
  // your code here. have fun!

  // Substrings
  const en = "en";
  const zh = "zh-cn";

  if(url.indexOf(zh) === 1){
    return "zh-cn"
  } else {
    return "en"
  }

}