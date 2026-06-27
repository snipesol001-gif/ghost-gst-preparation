let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];

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

// Helper function to build the explanation HTML
function getExplanationHTML(q, userChoice) {
    let html = "";
    const isCorrect = userChoice === q.answer;
    
    // If user got it wrong, show what they selected and why it's wrong
    if (!isCorrect) {
        const wrongText = q.options[userChoice];
        // Use specific option explanation if available, otherwise generic fallback
        const wrongExplain = q.optionExplanations ? q.optionExplanations[userChoice] : "This option is incorrect based on the historical facts.";
        html += `<div style="color: var(--danger); margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,0,85,0.3);">
                    <strong>❌ Your Selection (${wrongText}):</strong><br>
                    ${wrongExplain}
                 </div>`;
    }

    // Always show the correct answer and why it's right
    const correctText = q.options[q.answer];
    const correctExplain = q.optionExplanations ? q.optionExplanations[q.answer] : q.explanation;
    html += `<div style="color: var(--success);">
                <strong>✅ Correct Answer (${correctText}):</strong><br>
                ${correctExplain}
             </div>`;

    return html;
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

    // If user already answered this question (e.g. they hit Previous button), restore the state
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

        document.getElementById('explanationText').innerHTML = getExplanationHTML(q, userChoice);
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
        options[q.answer].classList.add('correct'); // Highlight the right one
    }

    // Generate and show the dual explanation
    document.getElementById('explanationText').innerHTML = getExplanationHTML(q, index);
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
    localStorage.setItem('gst_temp_score', score);
    localStorage.setItem('gst_temp_total', selectedQuestions.length);
    window.location.href = 'result.html';
}

initExam();