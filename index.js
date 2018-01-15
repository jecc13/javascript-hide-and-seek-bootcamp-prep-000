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
    lis[i].innerText = parseInt(parseInt(lis[i].innerText) + n);
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


/* test info
  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)
  
function increaseRankBy(n) {
      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      
      let start = 1; 
      for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = parseInt(start + i + 3);
      }

      children = secondList.children;
      start = 12;

      for (let i = 0, l = children.length; i < l; i++) {
        children[i].innerHTML = parseInt(start - i + 3);
      }
}

*/
