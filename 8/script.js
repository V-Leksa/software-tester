const button = document.getElementById('action-button');

button.addEventListener('click', e => {
    const hiddenContainer = document.getElementById('hidden-container');
    const textContent = 'Текст появился';

    hiddenContainer.textContent = textContent;
});