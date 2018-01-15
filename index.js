function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  // ranks in all of the .ranked-lists by n. 
  // use parseInt()
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].innerText)
    lis[i].innerHTML = parseInt(parseInt(lis[i].innerHTML) + n);
  }  
}

function deepestChild() {
  // pulls out the most deeply nested child from 
  // div#grand-node. iterate over elements and 
  // use querySelector() or querySelectorAll()
  // only have to solve for div#grand-node having
  // one node at each level, ignore poss sibling nodes
  // think about using breadth-first search
  // challenging! 
  
var gNodes = document.querySelectorAll('#grand-node div');
return gNodes[gNodes.length - 1];
// return gNodes[gNodes.length - 1].innerText; ==> boo! 
}


