import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './movie-search-form.module.scss';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      Notify.info('Please enter what to search for!');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button} onSubmit={handleSubmit}>
          <span className={styles.button__label}>Search</span>
        </button>

        <input
          className={styles.input}
          value={search}
          onChange={handleChange}
          name="search"
          placeholder="Введіть назву фільма для пошуку"
          required
        />
      </form>
    </header>
  );
};
export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
