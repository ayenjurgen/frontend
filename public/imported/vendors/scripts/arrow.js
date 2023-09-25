// Add event listeners to handle input events
document.addEventListener('input', function (event) {
    if (event.target.type === 'number') {
        // Prevent non-numeric input
        event.target.value = event.target.value.replace(/[^0-9]/g, '');

        // Ensure the value is within a specific range (optional)
        const minValue = 0;
        const maxValue = 100;
        const parsedValue = parseInt(event.target.value, 10);
        if (parsedValue < minValue) {
            event.target.value = minValue;
        } else if (parsedValue > maxValue) {
            event.target.value = maxValue;
        }
    }
});
