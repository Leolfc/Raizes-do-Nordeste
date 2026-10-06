import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from "../../services/api.js"
import { toast } from "react-toastify"
import { Container, Form, InputContainer, LeftContainer,  RightContainer, Title} from "./styles"
import Logo from "../../assets/logoRaizes.jfif"
import {Button} from "../../components/Button/index"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {userUser} from "../../hooks/UserContext.jsx"

export function Login(){
const navigate = useNavigate()
const {putUserData} = userUser()
const schema = yup
  .object({
    email: yup.string().email("Digite um email válido").required(),
    password: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required(),
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
    try {
        const {data:userData}= await toast.promise
        (api.post("/sessions", {
      email: data.email,
      password: data.password
    }),
    {
      pending: "Verificando seus dados...",
      success: {
        render(){
          setTimeout(() => {
            if(userData?.admin){
                 navigate("/admin/pedidos")
            }else{
               navigate("/")
            }
           
         
          }, 2000);
          return "Login realizado com sucesso😉"
        },
      },
    error: "E-mail ou senha incorretos😥"
    }
    )
putUserData(userData)
    

    } catch (error) {
      toast.error("🥲 Falha no sistema! Tente novamente.")
    }
  
  
  }


  return(
      <Container>
    
       <LeftContainer>
       <img src={Logo}/>
       </LeftContainer>

        <RightContainer>
        <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br/>
Acesse com seu <span>Login e senha.</span>
      </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
      <label >Email</label>
      <input type="email" {...register("email")} />
      <p>{errors.email?.message}</p>
    </InputContainer>


     <InputContainer>
      <label htmlFor="">Senha</label>
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
    </InputContainer>
    <Button type="submit" >Entrar</Button>
        </Form>
        <p>Não possui uma conta? <Link  
        to="/cadastro">Clique aqui.</Link></p>
        </RightContainer>
      </Container>
  )
}