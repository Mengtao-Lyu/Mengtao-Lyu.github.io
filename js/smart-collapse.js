function toggleCollapse(id) {
    const content = document.getElementById(id);
    const trigger = content.previousElementSibling;
    const icon = trigger.querySelector('.toggle-icon');
    
    content.classList.toggle('show');
    if (content.classList.contains('show')) {
        icon.textContent = '▼';
    } else {
        icon.textContent = '▶';
    }
}