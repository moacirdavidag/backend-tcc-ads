const enumsCotaAlunos = {
  ESCOLA_PUBLICA: "Oriundo de escola pública",
  ESCOLA_PUBLICA_PPI: "Oriundo de escola pública, declarado PPI",
  ESCOLA_PUBLICA_PCD: "Oriundo de escola pública, declarado PCD",
  ESCOLA_PUBLICA_RENDA_15:
    "Oriundo de escola pública, com renda inferior a 1,5 S.M.",
  ESCOLA_PUBLICA_RENDA_15_PCD:
    "Oriundo de escola pública, com renda inferior a 1,5 S.M., declarado PCD",
  ESCOLA_PUBLICA_RENDA_15_PPI:
    "Oriundo de escola pública, com renda inferior a 1,5 S.M., declarado PPI",
  ESCOLA_PUBLICA_RENDA_15_PPI_PCD:
    "Oriundo de escola pública, com renda inferior a 1,5 S.M., declarado PPI, declarado PCD"
};

const enumCotaParaTextoValido = (valor) => {
  return enumsCotaAlunos[valor];
};

const enumsSituacaoAlunos = {
  AFASTADO: "Afastado",
  AGUARDANDO_COLACAO_GRAU: "Aguardando Colação de Grau",
  AGUARDANDO_ENADE: "Aguardando ENADE",
  AGUARDANDO_SEMINARIO: "Aguardando Seminário",
  CONCLUDENTE: "Concludente",
  CONCLUIDO: "Concluído",
  EGRESSO: "Egresso",
  ESTAGIARIO_CONCLUDENTE: "Estagiario (Concludente)",
  EVASAO: "Evasão",
  FALECIDO: "Falecido",
  INTERCAMBIO: "Intercâmbio",
  JUBILADO: "Jubilado",
  TRANCADO: "Trancado",
  MATRICULADO: "Matriculado",
  MATRICULA_VINCULO_INSTITUCIONAL: "Matrícula Vínculo Institucional",
  NAO_CONCLUIDO: "Não concluído",
  CANCELADO: "Cancelado",
  FORMADO: "Formado",
  CONCLUIDO: "Concluído",
  CANCELAMENTO_COMPULSORIO: "Cancelamento Compulsório",
  TRANSFERIDO_EXTERNO: "Transferido Externo",
  TRANSFERIDO_INTERNO: "Transferido Interno",
  TRANCADO_VOLUNTARIAMENTE: "Trancado Voluntariamente",
};

const enumSituacaoParaTextoValido = (valor) => {
  return enumsSituacaoAlunos[valor];
};

const enumCategoriaBolsaParaTextoValido = (valor) => {
  switch (valor) {
    case "ALIMENTACAO":
      return "Alimentação";
    case "FOTOCOPIA":
      return "Fotocópia";
    case "MORADIA":
      return " Moradia Estudantil";
    case "ALMOCO":
      return "Alimentação ALMOÇO";
    case "JANTA":
      return "Alimentação JANTAR";
    case "TRANSPORTE_ESTUDANTIL":
      return "Transporte Estudantil";
  }
};

const enumsModalidadeCursos = {
  CONCOMITANTE: "Concomitante",
  FIC: "FIC",
  LICENCIATURA: "Licenciatura",
  BACHARELADO: "Bacharelado",
  ESPECIALIZACAO: "Especialização",
  SUBSEQUENTE: "Subsequente",
  INTEGRADO: "Integrado",
  INTEGRADO_EJA: "Integrado EJA",
  TECNOLOGIA: "Tecnologia",
  MESTRADO: "Mestrado"
};

const enumModalideCursoParaTextoValido = (valor) => {
  return enumsModalidadeCursos[valor];
};

const enumNaturezaParticipacaoParaTextoValido = (valor) => {
  switch (valor) {
    case "PRESENCIAL":
      return "Presencial";
    case "EAD":
      return "EaD";
  }
};

module.exports = {
  enumCotaParaTextoValido,
  enumSituacaoParaTextoValido,
  enumCategoriaBolsaParaTextoValido,
  enumModalideCursoParaTextoValido,
  enumNaturezaParticipacaoParaTextoValido,
};
