import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import * as CarouselModule from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { CategoryButton, Container, ContainerItems, Title } from "./style.js"
import { useNavigate } from "react-router-dom"

const Carousel = CarouselModule.default.default

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1280, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 560 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
}

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories")
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={true}
        removeArrowOnDeviceType={["mobile"]}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} $imageUrl={category.url}>
            <CategoryButton
              type="button"
              onClick={() => {
                navigate({
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                })
              }}
            >
              {category.name}
            </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
