document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем ответы
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value,
        q6: document.querySelector('input[name="q6"]:checked')?.value,
        q7: document.querySelector('input[name="q7"]:checked')?.value
    };
    
    // Проверяем, что все вопросы отвечены
    for (const key in answers) {
        if (!answers[key]) {
            alert('Ответьте на все вопросы!');
            return;
        }
    }
    
    // Анализируем результаты
    let resultText = "";
    const aCount = Object.values(answers).filter(v => v === 'a').length;
    const bCount = Object.values(answers).filter(v => v === 'b').length;
    const cCount = Object.values(answers).filter(v => v === 'c').length;
    
    if (aCount > bCount && aCount > cCount) {
        resultText = "Ты еблан! Фармишь 70 минут, сидишь в таверне и слушаешь RR. Твоя тима — долбаебы, а сап — хуесос.";
    } else if (bCount > aCount && bCount > cCount) {
        resultText = "Ты сливаешь мид за 0 минут! Пошлая молли и кач 40 минут — твой конек. Возможно, ты даже шаришь за чишокича.";
    } else if (cCount > aCount && cCount > bCount) {
        resultText = "Ты второй человек после папича! Блекхол в крипов, пудж-инвалид и стратегические игры на офисе — это про тебя.";
    } else {
        resultText = "Ты непредсказуемый ебанат! Комбинация всех стилей игры делает тебя уникальным долбаебом.";
    }
    
    // Показываем результат
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('result').classList.remove('hidden');
});