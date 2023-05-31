const enumCotaParaTextoValido = (valor) => {
    switch(valor) {
        case "ESCOLA_PUBLICA":
            return "Oriundo de escola pública";
        case "ESCOLA_PUBLICA_PPI":
            return "Oriundo de escola pública, declarado PPI";
    }
}

const enumSituacaoParaTextoValido = (valor) => {
    switch(valor) {
        case "TRANCADO":
            return "Trancado";
        case "MATRICULADO":
            return "Matriculado";
        case "CANCELADO":
            return "Cancelado";
        case "FORMADO":
            return "Formado";
        case "CONCLUIDO":
            return "Concluído";
        case "CANCELAMENTO_COMPULSORIO":
            return "Cancelamento Compulsório";
        case "TRANSFERIDO":
            return "Transferido";
        case "TRANSFERIDO_EXTERNO":
            return "Transferido Externo";
        case "TRANCADO_VOLUNTARIAMENTE":
            return "Trancado Voluntariamente";
        case "EVASAO":
            return "Evasão";
    }
}

const enumCategoriaBolsaParaTextoValido = (valor) => {
    switch(valor) {
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
}

const enumModalideCursoParaTextoValido = (valor) => {
    switch(valor) {
        case "LICENCIATURA":
            return "Licenciatura";
        case "BACHARELADO":
            return "Bacharelado";
        case "ESPECIALIZACAO":
            return "Especialização";
        case "SUBSEQUENTE":
            return "Subsequente";
        case "INTEGRADO":
            return "Integrado";
        case "INTEGRADO_EJA":
            return "Integrado EJA";
    }
}

const enumNaturezaParticipacaoParaTextoValido = (valor) => {
    switch(valor) {
        case "PRESENCIAL":
            return "Presencial";
        case "EAD":
            return "EaD";
    }
}

module.exports = { enumCotaParaTextoValido, enumSituacaoParaTextoValido, 
    enumCategoriaBolsaParaTextoValido, enumModalideCursoParaTextoValido,
    enumNaturezaParticipacaoParaTextoValido
};

