import { Container } from './styles.js';

export default function Footer() {
  return(
    <Container>
      <p>
        &copy; {new Date().getFullYear()} - Todos os direitos reservados.
      </p>
    </Container>
  );
}