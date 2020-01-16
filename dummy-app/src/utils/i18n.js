export function getCurrentLocale(url) {
  // your code here. have fun!

  // Substrings
  const en = "en";
  const zh = "zh-cn";

  // Test 1
  if(url.indexOf(en) === -1 && url.indexOf(zh) === -1){
    return "en";

  // Test 2
  } else if (url.indexOf(en) === 1){
    return "en";

  // Test 3
  } else if (url.indexOf(zh) === 1){
    return "zh-cn";

  // Test 4
  } else if (url.indexOf(en) !== 1 || url.indexOf(zh) !== 1){
    return "en";
  }
}