var firstPress = true;
var keyPressLog = '#keypress-log';
var requireTextInputFocus = true;

function ConnectKeyPressHandler() {
    $(document).on('keydown', function (e) {
        $("#keylog").text('key pressed: ' + e.which);
        $("#typelog").text('Event Type: ' + e.type);

        if (requireTextInputFocus && !$('#focus-input').is(':focus')) return;
        logKeyPress(e.which);

        switch (e.which) {
            case 1:
                break;
        }
    });
}

function toggleBool(variable) {
    switch (variable) {
        case 'focus':
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
        addText(keyPressLog, ', ' + key);
    }
}