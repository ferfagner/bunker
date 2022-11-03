import * as Yup from "yup";

export const schema = Yup.object().shape({
    email: Yup.string().email().required('Nome é Obrigatório'),
    senha: Yup.string().required('Senha é Obrigatório')
   
})