import { Card, Info } from './styles';

export default function ShowCard( {title, image, language} ){
  //Imagem genérica
  const defaultImage = 'https://via.placeholder.com/210x295?text=Sem+Imagem';

  return(
    <Card>
      <img src={image || defaultImage} alt={title} />
      <Info>
        <h3>Título: {title}</h3>
        <p>Idioma: {language || 'Não informado'}</p>
      </Info>
    </Card>
  );
}