import { useEffect, useState } from "react"
import {api} from "../../services/api.js"
import * as CarouselModule from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { CategoryButton, Container, ContainerItems, Title } from "./style.js"
import { useNavigate } from "react-router-dom"

const Carousel = CarouselModule.default.default

console.log("O que é o Carousel:", Carousel)
export function CategoriesCarousel(){
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()



  useEffect(()=>{
async function loadCategories() {
  const {data} = await api.get("/categories")
  setCategories(data)
   console.log(data);
}
loadCategories()

async function loadProducts() {
  const {data} = await api.get("/products")
  const onlyOffers  = data.filter((product)=> product.offer).map((product)=>(
    {currencyValue:formatPrice(product.price),
    ...product
    }
  ))
  console.log(onlyOffers)
  setOffers(onlyOffers)
}

loadProducts()
  }, [])

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


  return(
    <Container>
    <Title>Categorias</Title>
    <Carousel responsive={responsive}
    infinite={true}
    partialVisible={false}
    itemClass="carousel-item"
    >
   {categories.map(category =>(
      <ContainerItems key={category.id} imageUrl={category.url}>
      <CategoryButton onClick={()=>{
        navigate(
           {
            pathname:"/cardapio",
            search:`?categoria=${category.id}`
          },
        )
      }}> 
    
      {category.name}
      
      </CategoryButton>
     
      </ContainerItems>
   ))}
    
    </Carousel>
    </Container>
  )
}