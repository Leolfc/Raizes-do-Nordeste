import { use, useEffect, useState } from "react";
import { Banner,CategoryButton,CategoryMenu, Container, ProductsContainer } from "./styles";
import {api} from "../../services/api.js"
import { formatPrice } from "../../utils/formatPrice.js";
import {CardProduct} from "../../components/CardProduct"
import {useLocation, useNavigate} from "react-router-dom";

export function Menu() {
  const navigate = useNavigate()

const {search} = useLocation()

const queryParams = new URLSearchParams(search)
  const [categories, setCategories] = useState([])
const [products, setProducts]  = useState([])
const [filteredProducts, setFilteredProducts] = useState([])
const [activeCategory ,setActiveCategory] = useState(()=>{
  const categoryId  = +queryParams.get("categoria")
  if(categoryId){
    return categoryId
  }
  return 0
})



    useEffect(()=>{
async function loadCategories() {
  const {data} = await api.get("/categories")
  const newCategories = [{id:0,name:"Todos"},
  ...data];
  setCategories(newCategories)
}

async function loadProducts() {
  const {data} = await api.get("/products")
  const newProducts  = data.map((product)=>(
    {currencyValue:formatPrice(product.price),
    ...product
    }
  ))
  
  setProducts(newProducts)

}
loadProducts()
loadCategories()
  }, [])

useEffect(()=>{
  if(activeCategory === 0){
    setFilteredProducts(products)
  }else{
    const newFilteredProducts = products.filter((product)=>product.categoryId === activeCategory)
    setFilteredProducts(newFilteredProducts)
  }
},[activeCategory,products])

  
  return (
    <main>
     <Container>
      <Banner>
        <h1>O MELHOR <br />HAMBURGUER<br /> ESTA AQUI!
         <span>
        Este cardápio esta inrresistivel!
      </span>
        </h1>
       
      </Banner>
      <CategoryMenu>
     {categories.map(category=>(
      <CategoryButton key={category.id}
      $isActiveCategory={category.id === activeCategory}
       onClick={()=>{
        navigate(
          {
            pathname:"/cardapio",
            search:`?categoria=${category.id}`
          },
          {
            replace:true
          },
         
        )
         setActiveCategory(category.id)
      }}>
      {category.name}
      </CategoryButton>
     ))}
      </CategoryMenu>
     <ProductsContainer>
  {filteredProducts.map(product=>(
    <CardProduct product={product} key={product.id} />
  ))}
     </ProductsContainer>
      
      </Container>
    </main>
  );
}
