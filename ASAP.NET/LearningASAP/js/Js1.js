
function popup(text) {
    alert(text);
};

function setTxt(id, newtext) {
    document.getElementById(id).innerText = newtext;
};

function getTxt(id) {
    return document.getElementById(id).innerHTML;
}

function setLableText() {
    setTxt('change', getTxt('textInput'));
    //document.getElementById('change').innerText = 'changed!';
}