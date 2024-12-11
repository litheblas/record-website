fetchCurrentProgress();

function fetchCurrentProgress() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxtLrgIy9K9MzmibNuueC_7no4pUSV8Zs1SwuRGAbl7IOydOVv5JxecbBKUKg04vJNhHQ/exec";
    
    fetch(scriptURL, {
        redirect: "follow",
        method: 'GET',
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }
    })
    .then((response) => response.json())
    .then((json) => {
        const precent = 100 * (parseFloat(json.data) / 50000)
        const progressFill = document.getElementById("progress-fill");
        progressFill.classList = "";
        progressFill.style.width = precent + "%";
    } );
}