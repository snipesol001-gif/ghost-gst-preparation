let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];

// Redirect if not logged in
if(!localStorage.getItem('gst_active_user')) {
    window.location.href = 'index.html';
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initExam() {
    shuffle(questionBank);
    let limit = Math.min(40, questionBank.length);
    selectedQuestions = questionBank.slice(0, limit);
    userAnswers = new Array(selectedQuestions.length).fill(null);
    loadQuestion();
}

function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    document.getElementById('qNum').innerText = currentQuestion + 1;
    document.getElementById('questionText').innerText = q.q;
    document.getElementById('explanationBox').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';

    let progress = (currentQuestion / selectedQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'block';

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = option;
        div.onclick = () => selectOption(index, div);
        optionsContainer.appendChild(div);
    });

    if (userAnswers[currentQuestion] !== null) {
        const options = document.querySelectorAll('.option');
        const userChoice = userAnswers[currentQuestion];
        options.forEach(opt => opt.classList.add('disabled'));
        if (userChoice === q.answer) {
            options[userChoice].classList.add('correct');
        } else {
            options[userChoice].classList.add('wrong');
            options[q.answer].classList.add('correct');
        }
        document.getElementById('explanationText').innerText = q.explanation;
        document.getElementById('explanationBox').style.display = 'block';
        let nextBtn = document.getElementById('nextBtn');
        nextBtn.style.display = 'block';
        nextBtn.innerText = currentQuestion === selectedQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
    }
    document.getElementById('quizContent').classList.remove('fade-out');
}

function selectOption(index, element) {
    if(userAnswers[currentQuestion] !== null) return;
    const q = selectedQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    userAnswers[currentQuestion] = index;
    options.forEach(opt => opt.classList.add('disabled'));

    if (index === q.answer) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
        options[q.answer].classList.add('correct');
    }

    document.getElementById('explanationText').innerText = q.explanation;
    document.getElementById('explanationBox').style.display = 'block';
    let nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'block';
    nextBtn.innerText = currentQuestion === selectedQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= selectedQuestions.length) {
        finishExam();
    } else {
        document.getElementById('quizContent').classList.add('fade-out');
        setTimeout(loadQuestion, 400);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        document.getElementById('quizContent').classList.add('fade-out');
        setTimeout(loadQuestion, 400);
    }
}

function finishExam() {
    // Save as temporary score for result.html to read
    localStorage.setItem('gst_temp_score', score);
    localStorage.setItem('gst_temp_total', selectedQuestions.length);
    window.location.href = 'result.html';
}

initExam();