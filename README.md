# Quiz Management System

This is a simple Quiz Management System developed using HTML, CSS, and JavaScript. It allows users to select a category, set the number of questions, and choose a difficulty level to start a quiz. The system fetches questions from an external API (Open Trivia Database) based on the user's preferences. Users can then attempt the quiz, answering multiple-choice questions within a time limit. The system provides real-time feedback on answers and calculates scores based on response times. At the end of the quiz, users can view their final score and compare it with their high score, which is stored locally using browser storage.
![Alt text](display.png)


## Features

- **Dynamic Quiz Setup**: Users can choose a category, set the number of questions, and select a difficulty level before starting the quiz.
- **Real-time Feedback**: Instant feedback on selected answers, distinguishing between correct and incorrect responses.
- **Score Calculation**: Scores are calculated based on response times, with penalties for delayed answers.
- **High Score Tracking**: The system maintains a high score for each user locally, allowing them to track their progress over multiple quiz attempts.
- **Category Selection**: Users can select from a variety of categories to customize their quiz experience.

## Usage

1. Clone the repository: `git clone <https://github.com/ZavAhmed/Quiz-Management-System>`
2. Open the `index.html` file in a web browser.
3. Choose a category from the dropdown menu or leave it as "Any Category" to include questions from all categories.
4. Set the number of questions you want to attempt (between 1 and 50).
5. Select a difficulty level (Easy, Medium, Hard) or leave it as "Any Difficulty".
6. Click on the "Start Game" button to begin the quiz.
7. Answer the multiple-choice questions displayed on the screen by clicking on the respective buttons.
8. Receive instant feedback on your answers and see your score increase with each correct response.
9. At the end of the quiz, view your final score and compare it with your high score.
10. Optionally, restart the quiz to attempt it again with different settings.

## Credits

- **Open Trivia Database**: Source of the quiz questions used in the application.

## Dependencies

- **Google Fonts (Poppins)**: Used for styling the text in the application.
- **Open Trivia Database API**: Provides the quiz questions based on user preferences.

## Contributing

Feel free to contribute, report issues, or suggest improvements by creating pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
