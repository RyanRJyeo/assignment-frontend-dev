export function paginator(currentPage, totalPages) {
  let pages = [];
  // your code here, have fun!



  // Test 1
  if(totalPages < 6){
    for(let i=0; i < totalPages; i++){
      pages[i] = i+1;
    };
  } else {


  // Test 2
    if(currentPage < 4){
      for(let i=0; i < 5; i++){
        pages[i] = i+1;
      };


  // Test 4
    } else if(currentPage > totalPages - 3){
      let j = 0;
      for(let i = totalPages - 4; i < totalPages + 1 ; i++){
        pages[j] = i;
        j++
      };


    // Test 3
    } else {
      pages[0] = currentPage - 2;
      pages[1] = currentPage - 1;
      pages[2] = currentPage;
      pages[3] = currentPage + 1;
      pages[4] = currentPage + 2;
    };

  };

  return pages;
}