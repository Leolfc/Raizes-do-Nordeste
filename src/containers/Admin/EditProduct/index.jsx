import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Container, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, ErrorMessage } from "./styles"
import { ImageIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import {api} from "../../../services/api"
import { toast } from "react-toastify"
import {useLocation} from "react-router-dom"
const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    price: yup.number().positive().integer().required("Campo obrigatório").typeError("Informe um valor numérico"),
    category: yup.object().required("Campo obrigatório"),
    file: yup.mixed().test("required", "Campo obrigatório", (value) => {
      return value && value.length > 0
    }),
  })
  .required()

export function EditProduct(){
  const [filename, setFilename] = useState(null)
  const [categories, setCategories] = useState([])
useEffect(()=>{
  async function loadCategories(){
    const {data} = await api.get("/categories")

    setCategories(data)
  }
  loadCategories()
},[])
   const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data)  => {
    const productFormData = new FormData()
    productFormData.append("name", data.name)
    productFormData.append("price", data.price * 100)
    productFormData.append("category_id", data.category.id)
    productFormData.append("file", data.file[0])

    await toast.promise(api.post("/products", productFormData), {
      pending: "Adicionando produto...",
      success: "Produto adicionado com sucesso",
      error: "Falha ao adicionar produto"
    })
  }
  return(
    <Container>
    <Form onSubmit={handleSubmit(onSubmit)}>
    <InputGroup>
    <Label>Nome</Label>
    <Input type="text" {...register("name")}  />
    <ErrorMessage>{errors.name?.message}</ErrorMessage>
    </InputGroup>
      <InputGroup>
      <Label>Preço</Label>
    <Input type="number" {...register("price")}/>
    <ErrorMessage>{errors.price?.message}</ErrorMessage>
    </InputGroup>
      <InputGroup>
    <LabelUpload>
   <ImageIcon/>
   <input {...register("file")}type="file" accept="image/png, image/jpeg"
   onChange={(value=>{
    setFilename(value?.target?.files[0]?.name)
    register("file").onChange(value)
   })}
    />
    {filename || "Selecione uma imagem"}
    </LabelUpload> 
    <ErrorMessage>{errors.file?.message}</ErrorMessage>
    </InputGroup>

  <InputGroup>
  <Label>Categoria</Label>
  <Controller
 name="category"
 control={control}
 render={({field})=>(


  <Select 
  {...field}
 options={categories}
  getOptionLabel={(category)=> category.name}
  getOptionValue={(category)=> category.id}
  placeholder="Selecione uma categoria"
  menuPortalTarget={document.body}
  />
  )}/>
  <ErrorMessage>{errors.category?.message}</ErrorMessage>
  </InputGroup> 

    <SubmitButton onClick={handleSubmit(onSubmit)} >Adicionar Produto</SubmitButton>
    </Form>
    </Container>
  )
}