document.getElementById('add-timer').addEventListener('click', function() {
    const timeInput = document.getElementById('time-input');
    const timeValue = parseInt(timeInput.value);

    if (isNaN(timeValue) || timeValue <= 0) {
        alert("Пожалуйста, введите корректное время в секундах.");
        return;
    }

    createTimer(timeValue);
});

function createTimer(duration) {
    const timerElement = document.createElement('li');
    timerElement.className = 'timer';

    const timerDisplay = document.createElement('span');

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Удалить';

    timerElement.appendChild(timerDisplay);
    timerElement.appendChild(stopButton);

    document.getElementById('timers').appendChild(timerElement);

    let remainingTime = duration;

    // Замыкание для управления состоянием таймера
    function updateTimer() {
        if (remainingTime >= 0) {
            timerDisplay.textContent = remainingTime + ' секунд';
            remainingTime--;
        } else {
            clearInterval(timerInterval);
            timerElement.remove(); // Удаляем элемент таймера после завершения
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    // Обработчик события для кнопки удаления
    stopButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerElement.remove();
    });

    updateTimer(); // Инициализируем отображение таймера сразу
}
