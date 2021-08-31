import React from 'react';
import { useGlobalContext } from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';
import quizCSS from './quiz.module.css';
import Modal from './Modal';

const Quiz = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);

    answers[tempIndex] = correct_answer;
  }

  return (
    <main className={quizCSS.main}>
      <Modal />
      <section className={quizCSS.quiz}>
        <p className={quizCSS.correctAnswers}>
          correct answers : {correct}/{index}
        </p>
        <article className={quizCSS.container}>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className={quizCSS.btnContainer}>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className={quizCSS.answerBtn}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(correct_answer === answer)}
                />
              );
            })}
          </div>
        </article>
        <button className={quizCSS.nextQuestion} onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
};

export default Quiz;
