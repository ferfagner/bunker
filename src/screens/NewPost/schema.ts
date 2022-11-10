import * as Yup from "yup";

export const schema = Yup.object().shape({
    post: Yup.string().required('Você precisa nos contar algo!'),
})