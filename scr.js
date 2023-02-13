

function sortear() {
    let frases = [
" As coisas só se tornam impossíveis quando não nos damos a oportunidade de acreditar – Eduardo Frederico;",
"As coisas só se tornam impossíveis quando não nos damos a oportunidade de acreditar – Eduardo Frederico;",
" Você não tem o direito de sair da presença de uma pessoa sem a deixar melhor e mais feliz – Madre Tersa de Calcutá;",
" A vontade de se preparar tem que ser maior que a vontade de vencer. Vencer será consequência da boa preparação – Bernardinho;",
" Esteja sempre preparado para as oportunidades – Luiz Felipe Scolari;",
" Os grandes navegadores devem sua reputação às grandes tempestades – Epicuro (341 a.C);",
" A felicidade e realização não estão condicionadas apenas ao passado ou ao que sempre fizemos. As mudanças existem para melhorar a qualidade de vida e proporcionar o desenvolvimento de todos – Wagner Campos;",
"Acreditar é tão importante quanto desejar, elaborar, analisar e agir. Seja para adquirir um bom emprego, comprar algo, ser melhor remunerado ou ganhar um prêmio. Sempre será necessário agirmos, termos atitude – Wagner Campos;",
" O maior valor de um ser humano está na capacidade de reconhecer seus erros e seus limites, de buscar seu autodesenvolvimento e superar-se diante dos grandes obstáculos – Eduardo Frederico",
" Sorte é o que acontece quando a preparação encontra a oportunidade – H.W.Beecher;",
"  É impossível avaliar a força que possuímos sem medir o tamanho do obstáculo que podemos vencer – H.W.Beecher;" ,
" O desempenho de uma empresa é baseado em soluções e problemas, se for um problema, tem solução! Se não tem solução, então não deve ser um problema – Autor desconhecido;", 
"Vencer é apesar de tudo que possa acontecer, acreditar nas pessoas e saber que por de traz de cada ato humano, por mais difícil que alguém possa parecer há sempre uma intenção positiva para consigo – Flávio Souza;",
" É melhor estar preparado para uma oportunidade e não ter nenhuma, do que ter uma oportunidade e não estar preparado – Whitney Young Jr;",
" A sabedoria da vida não está em fazer aquilo de que se gosta, mas gostar daquilo que se faz – Leonardo da Vinci;",
" Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver – Dalai Lama;",
"Sucesso é conseguir o que você quer. Felicidade é querer o que você conseguiu – Dr. Lair Ribeiro;",
" As pessoas que vencem neste mundo são as que procuram as circunstâncias de que precisam e, quando não as encontram, as criam – Bernard Shaw;",
" Para quem só sabe usar martelo, todo problema é um prego – Abraham Maslow;",
" O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência – Henry Ford.",
"Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos", 
"O sucesso normalmente vem para quem está ocupado demais para procurar por ele", 
"A vida é melhor para aqueles para quem fazem o possível para terem o melhor", 
"Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência", 
"Se você não está disposto a arriscar, esteja disposto a uma vida comum", 
"Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso",
"Para de perseguir o dinheiro e comece a perseguir o sucesso",
"Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los", 
"Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo",
"Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali",
"Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa. Para mim, sucesso é paz interior", 
"Oportunidades não surgem. É você que as cria",
"Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor", 
"Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança", 
"A melhor vingança é um sucesso estrondoso", 
"Eu não falhei. Só descobri 10 mil caminhos que não eram o certo", 
"Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele", 
"Ninguém pode fazer você se sentir inferior sem o seu consentimento",
"O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo", 
"Se você está atravessando um inferno, continue atravessando", 
"O que nos parece uma provação amarga pode ser uma bênção disfarçada",
"A distância entre a insanidade e a genialidade é medida pelo sucesso",
"Não tenha medo de desistir do bom para"
       



       
       
       
       
       
       
           ]
    let indiceSorteado = Math.floor(Math.random() * frases.length);
    
  let fraseDita = document.getElementById('frasedita')
  fraseDita.innerHTML = frases[indiceSorteado];


  }
  
  