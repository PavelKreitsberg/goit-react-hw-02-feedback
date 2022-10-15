import React from 'react';
import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};
