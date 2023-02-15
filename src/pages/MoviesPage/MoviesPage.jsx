import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchFilms } from 'components/services/themoviedb-api';

import MovieSearchForm from 'components/modules/MovieSearchForm/MovieSearchForm';
import MovieList from 'components/modules/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

import styles from './movies-page.module.scss';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await fetchSearchFilms(search);
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <div>
      <h2 className={styles.title}>Пошук фільма</h2>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
    </div>
  );
};

export default MoviesPage;
