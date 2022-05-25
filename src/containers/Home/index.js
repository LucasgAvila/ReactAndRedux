import React from 'react';
import { Grid } from 'semantic-ui-react';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  return (
    <Grid className='Home'>
      <Searcher />
      <PokemonList />
    </Grid>
  );
}

export default Home;
