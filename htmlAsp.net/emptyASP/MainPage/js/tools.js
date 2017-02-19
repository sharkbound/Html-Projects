
function setText(id, newText) {
    $(id).text(newText);
}

function getText(id) {
    return $(id).text();
}

function setHtml(id, newHtml) {
    $(id).html(newHtml);
}

function getHtml(id) {
    return $(id).html();
}

function addText(id, text) {
    $(id).text($(id).text() + text);
}

function clearText(id) {
    $(id).text('');
}

function remLeadingPound(strr) {
    if (strr.substring(0) === '#' && strr.substring(1) === '.' || strr.substring(1) === '#') {
        return strr.substring(1, strr.length - 1);
    }
}