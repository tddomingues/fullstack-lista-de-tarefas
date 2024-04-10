const yup = require("yup")

const registerValidation = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(3, "O nome é muito curto."),
    email: yup
      .string()
      .required("O e-mail é obrigatório.")
      .email("E-mail inválido."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .min(3, "Senha curta."),
    confirmPassword: yup
      .string()
      .required("A senha é obrigatória.")
      .min(3, "Senha curta.")
      .oneOf([yup.ref("password"), null], "Senhas não correspondentes!.")
  })
})

const loginValidation = yup.object({
  body: yup.object({
    email: yup
      .string()
      .required("O e-mail é obrigatório.")
      .email("O e-mail deve ser válido."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .min(3, "O senha deve conter mais de 3 caracteres."),
  })
})

const updateValidation = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(3, "O nome é muito curto."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .min(3, "Senha curta."),
    confirmPassword: yup
      .string()
      .required("A senha é obrigatória.")
      .min(3, "Senha curta.")
      .oneOf([yup.ref("password"), null], "Senhas não correspondentes!.")
  })
})

module.exports = { registerValidation, loginValidation, updateValidation }
