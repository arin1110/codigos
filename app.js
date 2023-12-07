function uploadCode() {
    var formData = new FormData(document.getElementById("codeForm"));

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = data.message;
    })
    .catch(error => console.error("Error:", error));
}
