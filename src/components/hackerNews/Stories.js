import React from 'react';
import hackersCSS from './hackers.module.css';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className={hackersCSS.loading}></div>;
  }
  return (
    <section className={hackersCSS.stories}>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article className={hackersCSS.story} key={objectID}>
            <h4 className={hackersCSS.title}>{title}</h4>
            <p className={hackersCSS.info}>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a href={url} className={hackersCSS.readLink} target="_blank">
                read mores
              </a>
              <button
                className={hackersCSS.removeBtn}
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
