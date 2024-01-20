
function toggleCheckbox() {
    const checkbox = document.getElementById('customCheckbox');
    checkbox.checked = !checkbox.checked;
}

document.getElementById('customCheckbox').addEventListener('click', toggleCheckbox);
