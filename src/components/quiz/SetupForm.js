import React from 'react';
import { useGlobalContext } from './context';
import quizCSS from './quiz.module.css';

const SetupForm = () => {
  const { error, quiz, handleChange, handleSubmit } = useGlobalContext();

  return (
    <main className={quizCSS.main}>
      <section className={`${quizCSS.quiz} ${quizCSS.quizSmall}`}>
        <form className={quizCSS.setupForm}>
          <h2>setup quiz</h2>
          {/* {amount} */}
          <div className={quizCSS.formControl}>
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className={quizCSS.formInput}
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className={quizCSS.formControl}>
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className={quizCSS.formInput}
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className={quizCSS.formControl}>
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className={quizCSS.formInput}
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className={quizCSS.error}>
              can't generate questions, please try different options
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className={quizCSS.submitBtn}
          >
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
