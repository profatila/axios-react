import { useState, useEffect } from 'react';

//Camada de serviço
import api from './services/api';

//Componentes
import Header   from './components/Header';
import Footer   from './components/Footer';
import ShowCard from './components/ShowCard';

//Estilos
import { Main, Grid, StatusMessage } from './App.styles';

export default function App() {
  //Estados iniciais
  const [shows, setShows]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function buscarShows(){
      try{
        setLoading(true);
        const response = await api.get('/shows');
        setShows(response.data.slice(0, 100));
      } catch (err){
        setError('Ocorreu algum erro ao carregar os filmes');
      } finally {
        setLoading(false);
      }
    }
    buscarShows();
  }, []); // Array de dependências vazio

  return(
    <>
      <Header />
      <Main>
        {loading && <StatusMessage>Carregando séries...</StatusMessage>}
        {error && <StatusMessage>{error}</StatusMessage>}

        {!loading && !error && (
          <Grid>
            {shows.map((item) => (
              <ShowCard key={item.id}
                        title={item.name}
                        image={item.image?.medium}
                        language={item.language}
              />
            ))}
          </Grid>
        )}
      </Main>
      <Footer />
    </>
  );
}