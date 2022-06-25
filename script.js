const container = document.querySelector('.container');

function AppendElements(htmlStringList) {
  for (let i = 0;i < htmlStringList;++i) {
    var div = document.createElement('div');
    div.classList.add('children');
    container.appendChild(div);
  }
}

AppendElements(6)