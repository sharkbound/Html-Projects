var firstPress = true;
var keyPressLog = '#keypress-log';
var requireTextInputFocus = true;

function ConnectKeyPressHandler() {
    $(document).on('keydown', function (e) {
        $("#keylog").text('key pressed: ' + e.which);
        $('#keylog-char').text('Charater: ' + codeToChar(e.which));
        $("#typelog").text('Event Type: ' + e.type);

        if (requireTextInputFocus && !$('#text-input').is(':focus')) return;
        logKeyPress(codeToChar(e.which));
        $('#text-input').text('type anything');
        //clearText('#text-input');

        switch (e.which) {
            case 1:
                break;
        }
    });
}

function toggleBool(variable) {
    switch (variable) {
        case 'require_focus':
            requireTextInputFocus = !requireTextInputFocus;
            break;
    }
}

function logKeyPress(key) {

    if (firstPress) {
        addText(keyPressLog, key);
        firstPress = false;
    }
    else {
        addText(keyPressLog, ', ' + key + '');
    }
}

function codeToChar(code) {
    return String.fromCharCode(code);
}

function IsChecked(id) {
    return document.getElementById(id).IsChecked;
}