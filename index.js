let display = document.getElementById('input');

function clearDisplay()
{
    display.value = '';
}

function appendToDisplay(value)
{
    display.value += value;
}

function calculate()
{
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}