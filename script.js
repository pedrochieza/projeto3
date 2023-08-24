const popup = document.getElementById('popup');
const content = document.getElementById('content');
const texto = document.getElementById('texto');
const btnSim = document.getElementById('btnSim');
const btnNao = document.getElementById('btnNao');
const btnContinuar = document.getElementById('btnContinuar');
const btnReiniciar = document.getElementById('btnReiniciar');

function exibirPopup() {
  popup.style.visibility = 'visible';
}

function esconderPopup() {
  popup.style.visibility = 'hidden';
}

function exibirPergunta(pergunta, simCallback, naoCallback) {
  texto.innerText = pergunta;
  btnSim.style.display = 'inline-block';
  btnNao.style.display = 'inline-block';
  btnContinuar.style.display = 'none';
  btnReiniciar.style.display = 'none';
  btnSim.onclick = () => {
    esconderPopup();
    simCallback();
  };
  btnNao.onclick = () => {
    esconderPopup();
    naoCallback();
  };
  exibirPopup();
}

function exibirFrase(frase, continuarCallback) {
  texto.innerText = frase;
  btnSim.style.display = 'none';
  btnNao.style.display = 'none';
  btnContinuar.style.display = 'inline-block';
  btnReiniciar.style.display = 'none';
  btnContinuar.onclick = () => {
    esconderPopup();
    continuarCallback();
  };
  exibirPopup();
}

function Pergunta1() {
  exibirPergunta(
    'Você é uma pessoa física (como o José)?',
    () => Frase1(),
    () => Pergunta6()
  );
}

function Frase1() {
  exibirFrase('Olá, José!!! Seja bem-vindo!', () => Pergunta2());
}

function Pergunta6() {
  exibirPergunta('Então você é uma instituição financeira?',
  () => Frase7(),
  () => Frase8());
}

function Frase7() {
  exibirFrase(
    'Serão realizadas perguntas de ações preventivas voltadas para organizações.',
    () => Pergunta7()
  );
}

function Frase8() {
  exibirFrase('Certo... Por favor, revise a pergunta realizada.', () =>
    Pergunta1()
  );
}

function Pergunta2() {
  exibirPergunta(
    'Suas senhas são consideradas "fracas" e de fácil acesso?',
    () => Frase2(),
    () => Pergunta3()
  );
}

function Frase2() {
  exibirFrase(
    'Recomendação: Atualize suas senhas, para que elas fiquem mais segura e protegidas. Após isso, retome ao passo anterior.',
    () => Pergunta2()
  );
}

function Pergunta3() {
  exibirPergunta(
    'Suas senhas são as mesmas em todos os sites?',
    () => Frase3(),
    () => Pergunta4()
  );
}

function Frase3() {
  exibirFrase(
    'Recomendação: Crie uma senha única para cada site ou aplicativo. Após isso, retome ao passo anterior.',
    () => Pergunta3()
  );
}

function Pergunta4() {
  exibirPergunta(
    'Suas senhas são atualizadas com frequência?',
    () => Pergunta5(),
    () => Frase4()
  );
}

function Frase4() {
  exibirFrase(
    'Recomendação: Atualize sua senha com frequência, mantendo-as sempre seguras. Após isso, retome ao passo anterior.',
    () => Pergunta4()
  );
}

function Pergunta5() {
  exibirPergunta(
    'Você verifica todas as movimentações que ocorrem nas suas contas bancárias?',
    () => Frase5(),
    () => Frase6()
  );
}

function Frase5() {
  exibirFrase(
    'Meus parabéns, José!!! Você protege com sucesso seu nome e suas contas bancárias, mas nunca é tarde para se proteger, não se esqueça de sempre atualizar ao máximo as táticas de segurança de seus dados, até!',
    () => Fim()
  );
}

function Frase6() {
  exibirFrase(
    'Recomendação: Sempre confirme se foi você quem efetuou as transações em suas contas bancárias. Após isso, retome ao passo anterior.',
    () => Pergunta5()
  );
}

function Pergunta7() {
  exibirPergunta(
    'Você é um dos dois bancos onde foram abertas contas digitais no nome do José da Silva nos últimos 18 meses?',
    () => Frase9(),
    () => Pergunta8()
  );
}

function Frase9() {
  exibirFrase(
    'Olá, por favor responda as perguntas seguintes para manter sempre os dados de seus clientes protegidos e seguros!',
    () => Pergunta9()
  );
}

function Pergunta8() {
  exibirPergunta(
    'Então você é a Financeira do Banco dos Açores?',
    () => Frase10(),
    () => Frase11()
  );
}

function Frase10() {
  exibirFrase(
    'Olá, por favor responda as perguntas seguintes para manter sempre os dados de seus clientes protegidos e seguros!',
    () => Pergunta13()
  );
}

function Frase11() {
  exibirFrase('Certo... Por favor, revise a pergunta realizada.', () =>
    Pergunta7()
  );
}

function Pergunta9() {
  exibirPergunta(
    'A verificação de identidade está sendo feita para abertura de novas contas?',
    () => Pergunta10(),
    () => Frase12()
  );
}

function Frase12() {
  exibirFrase(
    'Recomendação: Sempre comprovar a veracidade na identidade de quem está realizando a abertura de conta. Após isso, retome ao passo anterior.',
    () => Pergunta9()
  );
}

function Pergunta10() {
  exibirPergunta(
    'A política de autenticação está funcionando corretamente?',
    () => Pergunta11(),
    () => Frase13()
  );
}

function Frase13() {
  exibirFrase(
    'Recomendação: Realizar a autenticação em duas etapas (2FA) para melhoria de processos internos. Após isso, retome ao passo anterior.',
    () => Pergunta10()
  );
}

function Pergunta11() {
  exibirPergunta(
    'A política de conscientização aos clientes está sendo aplicada?',
    () => Pergunta12(),
    () => Frase14()
  );
}

function Frase14() {
  exibirFrase(
    'Recomendação: Conscientizar os clientes sobre o perigo da falta de proteção dos dados pessoais nos meios digitais. Após isso, retome ao passo anterior.',
    () => Pergunta11()
  );
}

function Pergunta12() {
    exibirPergunta(
      'Os sistemas utilizados pela instituição estão devidamente atualizados?',
      () => Frase21(),
      () => Frase15()
    );
  }


function Frase15() {
  exibirFrase(
    'Recomendação: Realizar uma atualização em todos os sistemas utilizados pelo banco, para funcionários ou clientes. Após isso, retome ao passo anterior.',
    () => Pergunta12()
  );
}

function Pergunta13() {
  exibirPergunta(
    'A política de concessão de crédito está devidamente de acordo?',
    () => Pergunta14(),
    () => Frase17()
  );
}

function Frase17() {
  exibirFrase(
    'Recomendação: Revisar possíveis congruências dentro das políticas de concessão de crédito. Após isso, retome ao passo anterior.',
    () => Pergunta13()
  );
}

function Pergunta14() {
  exibirPergunta(
    'Os sistemas internos estão devidamente integrados?',
    () => Pergunta15(),
    () => Frase18()
  );
}

function Frase18() {
  exibirFrase(
    'Recomendação: Realizar a integração entre os sistemas internos do banco. Após isso, retome ao passo anterior.',
    () => Pergunta14()
  );
}

function Pergunta15() {
  exibirPergunta(
    'A comunicação entre áreas está devidamente integrada?',
    () => Pergunta16(),
    () => Frase19()
  );
}

function Frase19() {
  exibirFrase(
    'Recomendação: Confirmar como está sendo feito o processo de comunicação entre áreas na organização. Após isso, retome ao passo anterior.',
    () => Pergunta15()
  );
}

function Pergunta16() {
  exibirPergunta(
    'O atendimento ao cliente está sendo realizado de forma transparente?',
    () => Pergunta17(),
    () => Frase20()
  );
}

function Frase20() {
  exibirFrase(
    'Recomendação: Prezar sempre pelo nome do cliente, o avisando de transações, incomuns ou não. Após isso, retome ao passo anterior.',
    () => Pergunta16()
  );
}

function Pergunta17() {
  exibirPergunta(
    'O banco está ciente do perfil de seus clientes juntamente com seus tipos de movimentação?',
    () => Frase21(),
    () => Frase22()
  );
}

function Frase21() {
    exibirFrase(
      'Meus parabéns!!! Você, como instituição financeira, está fazendo sua parte protegendo com sucesso os dados de seus clientes, mas nunca é tarde para se proteger, não se esqueça de sempre atualizar ao máximo a forma de proteção de seus dados, até!',
      () => Fim()
    );
  }
  
  function Frase22() {
    exibirFrase(
      'Recomendação: Notar padrões de compras e transações de seus clientes, para aumentar a confiança no banco. Após isso, retome ao passo anterior.',
      () => Pergunta17()
    );
  }
  
  function Fim() {
    exibirFrase('Fim do Fluxograma Interativo.', () => exibirReiniciar());
  }
  
  function exibirReiniciar() {
    texto.innerText = 'Para reiniciar, clique no botão abaixo.';
    btnSim.style.display = 'none';
    btnNao.style.display = 'none';
    btnContinuar.style.display = 'none';
    btnReiniciar.style.display = 'inline-block';
    btnReiniciar.innerText = 'Reiniciar';
    btnReiniciar.onclick = () => {
      esconderPopup();
      Reiniciar();
    };
    exibirPopup();
  }
  
  function Reiniciar() {
    Pergunta1();
    btnReiniciar.style.backgroundColor = '#f321e2';
    btnReiniciar.style.color = '#fff';
  }
  
  Reiniciar();
  
