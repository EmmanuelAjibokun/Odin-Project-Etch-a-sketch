const container = document.querySelector('.container');

const grid = document.querySelector('.grid-number');


grid.addEventListener('click', updateGrid)

function updateGrid() {
  let div = document.getElementsByClassName('children');
  let div2 = document.getElementsByClassName('xChidren');
  div.removeChild(div2);
  let gridValue = prompt("Grid number should be between 1-100: ");
  gridDisplay(gridValue, gridValue)
}



function gridDisplay(yNodeCount, xNodeCount) {
  for (let i = 0;i < yNodeCount; ++i) {
    let div = document.createElement('div');
    div.classList.add('children');
    container.appendChild(div);
    for(let j = 0; j < xNodeCount; ++j) {
      let div2 = document.createElement('div');
      div2.classList.add('xChildren');
      div.appendChild(div2);
    }
  }

}

container.addEventListener('click', (e) => {
  e.target.style.cssText = 'background: black';
  console.log(e.target)
})

gridDisplay(4, 4)