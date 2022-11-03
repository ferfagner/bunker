import * as Yup from "yup";

export const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    userName: Yup.string().required('Nome de Usuário é Obrigatório'),
    email: Yup.string().email().required('E-mail é Obrigatório'),
    senha: Yup.string().required('Senha é Obrigatório'),
    confSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'A senha deve ser Igual')
})