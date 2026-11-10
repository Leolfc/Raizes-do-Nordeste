import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import * as CarouselModule from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Container, Title } from "./style.js"
import { CardProduct } from "../CardProduct/index.jsx"
import { formatPrice } from "../../utils/formatPrice"

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
    partialVisibilityGutter: 90,
  },
}

export function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/products")
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }))
      setOffers(onlyOffers)
    }
    loadProducts()
  }, [])

  return (
    <Container>
      <Title>Ofertas do dia</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={true}
        removeArrowOnDeviceType={["mobile"]}
        itemClass="carousel-item"
      >
        {offers.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  )
}
