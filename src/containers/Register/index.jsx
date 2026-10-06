import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from "../../services/api.js"
import { toast } from "react-toastify"
import { Container, Form, InputContainer, LeftContainer,  RightContainer, Title, Link} from "./styles"
import Logo from "../../assets/Logo.svg"
import {Button} from "../../components/Button/index"
import { useNavigate } from "react-router-dom"



export function Register(){
const navigate = useNavigate()
const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Digite um email válido").required(),
    password: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais").required("Confirme sua senha"),
  })
  .required()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    try{
      const {status} = await api.post("/users", {
      name: data.name,
      email: data.email,
      password: data.password
    },
    {
      validateStatus: ()=> true
    }
    )
    if(status===200 || status===201){
      setTimeout(()=>{
useNavigate("/login")
      }, 2000)
      toast.success("Cadastro realizado com sucesso😉")
    }else if(status === 409){
toast.error("Email já cadastrado🥲")
    }else{
      throw new Error()
    }
    console.log(status);
    }catch(error){
   toast.error("🥲 Falha no sistema! Tente novamente.")
    }
    
  }


  return(
      <Container>
    
       <LeftContainer>
       <img src={Logo}/>
       </LeftContainer>

        <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
      <label >Nome</label>
      <input type="text" {...register("name")} />
      <p>{errors.name?.message}</p>
    </InputContainer>

  <InputContainer>
      <label htmlFor="">Email</label>
      <input type="email" {...register("email")} />
      <p>{errors.email?.message}</p>
    </InputContainer>

     <InputContainer>
      <label htmlFor="">Senha</label>
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
    </InputContainer>

     <InputContainer>
      <label >Confirmar senha</label>
      <input type="password" {...register("confirmPassword")} />
      <p>{errors.confirmPassword?.message}</p>
    </InputContainer>


    <Button type="submit" >Criar conta</Button>
        </Form>
        <p>Já possui uma conta? Clique aqui <Link to={"/"}>Clique aqui.</Link></p>
        </RightContainer>
      </Container>
  )
}