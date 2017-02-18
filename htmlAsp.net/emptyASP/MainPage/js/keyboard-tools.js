var firstPress = true;
var keyPressLog = '#keypress-log';

function ConnectKeyPressHandler() {
    $(document).on('keydown', function (e) {
        $("#keylog").text('key pressed: ' + e.which);
        $("#typelog").text('Event Type: ' + e.type);

        if (firstPress) {
            addText(keyPressLog, e.which);
            firstPress = false;
        }
        else {
            addText(keyPressLog, ', ' + e.which);
        }

        switch (e.which) {
            case 1:
                break;
        }
    });
}