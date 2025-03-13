async function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;

    const response = await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ num1, num2, operation })
    });

    const data = await response.json();
    if (data.error) {
        document.getElementById('result').textContent = data.error;
    } else {
        document.getElementById('result').textContent = data.result;
        const history = document.getElementById('history');
        history.innerHTML = '';
        data.history.forEach(entry => {
            const item = document.createElement('li');
            item.textContent = `${entry.num1} ${entry.operation} ${entry.num2} = ${entry.result}`;
            history.appendChild(item);
        });
    }
}
