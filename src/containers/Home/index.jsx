import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container, Content, MenuLink } from "./style";

export function Home() {
  return (
    <main>
      <Banner>
        <div>
          <h1>Bem-vindo(a)!</h1>
          <p>O sabor do sertão em cada mordida.</p>
          <MenuLink to="/cardapio">Ver cardápio</MenuLink>
        </div>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
}
