let currentQuestion = 0;
let score = 0;
let examTotalPoints = 0;
let selectedQuestions = [];
let userAnswers = [];
let questionStartTime = 0;

if(!localStorage.getItem('gst_active_user')) window.location.href = 'index.html';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initExam() {
    shuffle(questionBank);
    selectedQuestions = questionBank.slice(0, Math.min(40, questionBank.length));
    userAnswers = new Array(selectedQuestions.length).fill(null);
    loadQuestion();
}

function getExplanationHTML(q, userChoice) {
    let html = "";
    if (userChoice !== q.answer) {
        const wrongText = q.options[userChoice];
        const wrongExplain = q.optionExplanations ? q.optionExplanations[userChoice] : "This option is incorrect.";
        html += `<div style="color: var(--danger); margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,0,85,0.3);"><strong>❌ Your Selection (${wrongText}):</strong><br>${wrongExplain}</div>`;
    }
    const correctText = q.options[q.answer];
    const correctExplain = q.optionExplanations ? q.optionExplanations[q.answer] : q.explanation;
    html += `<div style="color: var(--success);"><strong>✅ Correct Answer (${correctText}):</strong><br>${correctExplain}</div>`;
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

    if (userAnswers[currentQuestion] !== null) {
        const options = document.querySelectorAll('.option');
        const userChoice = userAnswers[currentQuestion];
        options.forEach(opt => opt.classList.add('disabled'));
        if (userChoice === q.answer) options[userChoice].classList.add('correct');
        else { options[userChoice].classList.add('wrong'); options[q.answer].classList.add('correct'); }
        document.getElementById('explanationText').innerHTML = getExplanationHTML(q, userChoice);
        document.getElementById('explanationBox').style.display = 'block';
        let nextBtn = document.getElementById('nextBtn');
        nextBtn.style.display = 'block';
        nextBtn.innerText = currentQuestion === selectedQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
    }
    
    // Start timer for this question
    questionStartTime = Date.now();
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
        
        // SPEED POINTS LOGIC
        let timeTaken = (Date.now() - questionStartTime) / 1000; // in seconds
        let pts = 5;
        let speedMsg = "Slow";
        if (timeTaken < 5) { pts = 15; speedMsg = "Fast"; }
        else if (timeTaken < 15) { pts = 10; speedMsg = "Medium"; }
        
        examTotalPoints += pts;
        showPointsPopup(pts, speedMsg);
    } else {
        element.classList.add('wrong');
        options[q.answer].classList.add('correct');
    }

    document.getElementById('explanationText').innerHTML = getExplanationHTML(q, index);
    document.getElementById('explanationBox').style.display = 'block';
    let nextBtn = document.getElementById('nextBtn');
    nextBtn.style.display = 'block';
    nextBtn.innerText = currentQuestion === selectedQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
}

function showPointsPopup(pts, speed) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '40%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = pts === 15 ? 'gold' : (pts === 10 ? '#00f2ff' : '#fff');
    popup.style.padding = '20px 40px';
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '24px';
    popup.style.fontWeight = 'bold';
    popup.style.zIndex = '9999';
    popup.style.border = `2px solid ${pts === 15 ? 'gold' : '#00f2ff'}`;
    popup.style.transition = 'all 0.8s ease-out';
    popup.innerHTML = `+${pts} Points! <br><span style="font-size:14px;">(${speed})</span>`;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -100%)';
    }, 500);
    setTimeout(() => popup.remove(), 900);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= selectedQuestions.length) finishExam();
    else { document.getElementById('quizContent').classList.add('fade-out'); setTimeout(loadQuestion, 400); }
}

function prevQuestion() {
    if (currentQuestion > 0) { currentQuestion--; document.getElementById('quizContent').classList.add('fade-out'); setTimeout(loadQuestion, 400); }
}

function finishExam() {
    localStorage.setItem('gst_temp_score', score);
    localStorage.setItem('gst_temp_total', selectedQuestions.length);
    localStorage.setItem('gst_temp_points', examTotalPoints); // Save speed points!
    window.location.href = 'result.html';
}

window.confirmSubmit = function() { document.getElementById('submitModal').style.display = 'flex'; }
window.closeSubmitModal = function() { document.getElementById('submitModal').style.display = 'none'; }

initExam();