function calculateBudget() {
    let formData = new FormData(document.getElementById('umrahForm'));

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
    });
}
