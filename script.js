const container = document.querySelector('.container');

function AppendElements(yNodeCount, xNodeCount) {
  for (let i = 0;i < yNodeCount; ++i) {
    var div = document.createElement('div');
    div.classList.add('children');
    container.appendChild(div);
    for(let j = 0; j < xNodeCount; ++j) {
      var div2 = document.createElement('div');
      div2.classList.add('xChildren');
      div.appendChild(div2);
    }
  }
}

AppendElements(10, 20)