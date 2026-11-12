let materials = [];

function uploadFile() {
    let file = document.getElementById("file").files[0];

    if (!file) {
        alert("Select a file first!");
        return;
    }

    let url = URL.createObjectURL(file);

    materials.push({name: file.name, url: url});

    displayFiles();
    document.getElementById("message").innerHTML =
        "Upload successful!";
}

function displayFiles() {
    document.getElementById("uploaded").innerHTML =
    materials.map(file => `
        <div class="card">
            <h3>${file.name}</h3>
            <a href="${file.url}" download="${file.name}">
                <button>Download</button>
            </a>
        </div>
    `).join("");
}
