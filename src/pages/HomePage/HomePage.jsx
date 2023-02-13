import { useState, useEffect } from 'react';

import { fetchTrendingFilms } from 'components/services/themoviedb-api';

import MovieList from 'components/Loader/Loader';
import Loader from 'components/Loader/Loader';

import styles from './home-page.module.scss';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrandingMovie = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrendingFilms();
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrandingMovie();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>У тренді сьогодні</h2>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      {items.length > 0 && (
        <MovieList items={items} loading={loading} error={error} />
      )}
    </div>
  );
};

export default HomePage;
