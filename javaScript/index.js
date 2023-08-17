const textArea = document.getElementById('text-area');

function f1(e) {
  let value = e.value;
  textArea.style.fontSize = value + 'px';
}

function f2(e) {
  if (textArea.style.fontWeight === 'bold') {
    textArea.style.fontWeight = 'normal';
    e.classList.remove('active');
  } else {
    textArea.style.fontWeight = 'bold';
    e.classList.add('active');
  }
}

function f3(e) {
  if (textArea.style.fontStyle === 'italic') {
    textArea.style.fontStyle = 'normal';
    e.classList.remove('active');
  } else {
    textArea.style.fontStyle = 'italic';
    e.classList.add('active');
  }
}
function f4(e) {
  if (textArea.style.textDecoration === 'underline') {
    textArea.style.textDecoration = 'none';
    e.classList.remove('active');
  } else {
    textArea.style.textDecoration = 'underline';
    e.classList.add('active');
  }
}

function f8(e) {
  let value = e.value;
  textArea.style.color = value;
}

function f5(e) {
  textArea.style.textAlign = 'left';
}
function f6(e) {
  textArea.style.textAlign = 'center';
}

function f7(e) {
  textArea.style.textAlign = 'right';
}
function f9(e) {
  if (textArea.style.textTransform === 'uppercase') {
    textArea.style.textTransform = 'lowercase';
    e.classList.remove('active');
  } else {
    textArea.style.textTransform = 'uppercase';
    e.classList.add('active');
  }
}
