const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert('Please enter something!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="delete-btn">×</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = '';

    // Remove task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    // Complete toggle
    li.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        li.classList.toggle('completed', this.checked);
    });
}