import React, {useEffect} from 'react';
import { Grid } from 'semantic-ui-react';
import { getPokemons } from '../../api/getPokemons';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  useEffect(() => {
    getPokemons().then(res => console.log(res))
  })

  return (
    <Grid className='Home'>
      <Searcher />
      <PokemonList />
    </Grid>
  );
}

export default Home;
