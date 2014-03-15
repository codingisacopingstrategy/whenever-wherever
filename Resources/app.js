// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var placeholderLabel = Titanium.UI.createLabel({
    color: '#821785',
    text: 'Placeholder',
    font: {
        fontSize: 20,
    },
    textAlign: 'center',
    width: 'auto',
});

var placeholderWindow = Ti.UI.createWindow();
placeholderWindow.add(placeholderLabel);

placeholderWindow.open();
