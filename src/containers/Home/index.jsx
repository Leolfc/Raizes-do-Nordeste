
import { OffersCarousel,CategoriesCarousel } from "../../components";
import { Banner, Container, Content } from "./style";


export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
         <CategoriesCarousel></CategoriesCarousel>
          <OffersCarousel/>
       
        </Content>
      </Container>
    </main>
  );
}
