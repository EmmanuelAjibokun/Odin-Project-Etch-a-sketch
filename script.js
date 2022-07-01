const container = document.querySelector('.container');
const grandChild = document.getElementsByClassName('xChildren')
const undoBtn = document.querySelector('.grid-undo');
const grid = document.querySelector('.grid-number');
const eraser = document.querySelector('.eraser');

grid.addEventListener('click', updateGrid)

function undoGrid() {
  for(const child of grandChild) {
    child.style.cssText = 'background: white';
  }
}

function updateGrid() {
  for(let i = container.children.length; i > 0; i--) {
    for(const child of container.children) {
      container.removeChild(child)
    }
  }
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
})

undoBtn.addEventListener('click', undoGrid)

gridDisplay(16, 16)
    // for(const grandChild of child.children) {
    //   grandChild.parentNode.removeChild(grandChild)
    //   console.log(grandChild)
    // }