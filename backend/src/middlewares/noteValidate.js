const yup = require("yup");

const noteValidate = yup.object({
  body: yup.object({
    comment: yup
      .string()
      .required("O Comentário é obrigatório.")
      .min(3, "Comentário muito curto."),
  }),
});

module.exports = { noteValidate };
