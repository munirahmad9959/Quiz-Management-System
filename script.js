document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const startButton = document.getElementById('start-btn');
    const baseScorePerQuestion = 1000;
    const penaltyPerSecond = 10;
    let questionStartTime;

    function fetchCategories(){
        fetch('https://opentdb.com/api_category.php').then (response => response.json()).then (data =>{
            data.trivia_categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        })
    }

    function startGame(){
        const category = categorySelect.value;
        const amount = amountInput.value;
        const difficulty = difficultySelect.value;
        fetchQuestions(amount, category, difficulty);
        gameSetupDiv.style.display = "none";
        quizDiv.style.display = "block";
    }

    function fetchQuestions (amount, category, difficulty){
        let url = `https://opentdb.com/api.php?amount=${amount}`;
        if(category) url+= 'category=${category}';
        if(difficulty) url+= `difficulty=${difficulty}`;
        url += `&type=multiple`;

        fetch(url).then(response =>response.json()).then(data =>{
            console.log(data);
            currentQuestions = data.results;
            questionIndex = 0;
            score = 0;
            displayQuestion();
        }).catch(error => alert('Error:' + error)); 
    }

    function displayQuestion(){
        if(questionIndex < currentQuestions.length){
            let currentQuestion = currentQuestions[questionIndex];
            questionContainer.innerHTML = decodeHTML(currentQuestion.question);
            displayAnswers(currentQuestion);
            updateProgress();
            questionStartTime= date.now;
        }else {
            updateHighScore();
            showResult();
        }
    }

    function displayAnswers(question){
        asnwersContainer.innerHTML = '';
        const answers = [...question.incorrect_answers, question.correct_answer];
        shuffleArray(answers);

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = decodeHTML(answer);
            button.className = 'answer-btn';
            button.addEventListener('click', () => selectAnswer(button, question.correct_answer, answers));
            answerContainer.appendChild(button);
        })
    }

    function selectAnswer(selectedButton, correctAnswer, answers){
        const timeTaken = (Date.now() - questionStartTime) / 1000;
        let scoreForThisQuestion = Math.max(baseScorePerQuestion - Math.floor(timeTaken)* penaltyPerSecond, 0);
        
        disableButtons();
        let correctButton;
        answers.forEach(answer => {
            if(decodeHTML(answer) === decodeHTML(correctAnswer)){
                correctButton = [...answersContainer.childNodes].find(button => button.innerHTML === decodeHTML(correctAnswer));
                
            }
        });
    }

    function disableButtons(){

    }





     fetchCategories();
});