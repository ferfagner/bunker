import * as Yup from "yup";

export const schema = Yup.object().shape({
    textComment: Yup.string().required('Você precisa nos contar algo!'),
})