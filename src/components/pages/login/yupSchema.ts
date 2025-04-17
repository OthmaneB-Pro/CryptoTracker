import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Nom requis"),
    email: yup.string().email("Email non valide").required("Email requis"),
    password: yup.string().required("Mot de passe requis"),
})