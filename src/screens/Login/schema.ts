import * as Yup from "yup";

export const schema = Yup.object().shape({
    email: Yup.string().email('Voce precisa digitar um e-mail válido!').required('Nome é Obrigatório!'),
    senha: Yup.string().required('Senha é Obrigatório!')
   
})