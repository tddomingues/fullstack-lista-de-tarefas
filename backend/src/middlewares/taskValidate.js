const yup = require("yup");

const taskValidate = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(3, "O nome é muito curto."),
    description: yup
      .string()
      .required("Informe explicações sobre o projeto.")
      .min(3, "Informações é muito curta."),
    priority: yup.string().required("Escolha a prioridade"),
    status: yup.string().required("Escolha o status."),
    userId: yup
      .string()
      .required("Essa tarefa precisa estar vinculada a um usuário."),
  }),
});

module.exports = { taskValidate };
