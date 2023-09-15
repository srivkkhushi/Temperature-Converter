document.addEventListener('DOMContentLoaded', function () {
    const tempConverterForm = document.getElementById('tempConverterForm');
    const tempInput = document.getElementById('tempInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton');
    const result = document.getElementById('result');

    // Function to convert Celsius to Fahrenheit
    const celToFah = (cel) => ((cel * 9 / 5) + 32).toFixed(1);

    // Function to convert Fahrenheit to Celsius
    const fahToCel = (fah) => ((fah - 32) * 5 / 9).toFixed(1);

    // Function to calculate and display the result
    const calculateTemp = () => {
        const inputTemp = parseFloat(tempInput.value);
        const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

        let convertedTemp = '';

        if (selectedUnit === 'cel') {
            convertedTemp = celToFah(inputTemp) + "° Fahrenheit";
        } else {
            convertedTemp = fahToCel(inputTemp) + "° Celsius";
        }

        result.textContent = convertedTemp;
    };

    // Event listener for form submission
    tempConverterForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        calculateTemp();
    });

    // Event listener for clear button
    clearButton.addEventListener('click', function () {
        tempInput.value = '0';
        unitSelect.selectedIndex = 0;
        result.textContent = '';
    });
});
