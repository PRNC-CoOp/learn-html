
const renderBtn = document.getElementById("render");

const renderFunction = () => {
    const html = document.getElementById("wrcode").value;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const output = document.getElementById('run');
    output.innerHTML = '';
    output.appendChild(doc.body);
}

renderBtn.addEventListener("click", renderFunction);