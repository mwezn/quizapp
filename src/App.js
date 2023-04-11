import logo from './logo.svg';
import './App.css';
import Question from './components/question'
import QuizAPI from './components/quizapi'

function App() {
  return (
    <div className="App">
      <Question></Question>
      <QuizAPI></QuizAPI>
    </div>
  );
}

export default App;
