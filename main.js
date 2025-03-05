function copyCode(fileName) {
    fetch(`codes/${fileName}.txt`)
        .then(response => response.text())
        .then(code => {
            navigator.clipboard.writeText(code).then(() => {
                console.log(`${fileName} code copied!`);
            });
        })
        .catch(error => console.error('Error fetching the code:', error));
}
