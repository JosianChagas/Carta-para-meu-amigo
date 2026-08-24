import React, { type JSX } from 'react';
import './App.css';
import imagemfernando1 from './imagens/imagem-fernando 2.jpg';
import imagemfernando2 from './imagens/imagem-fernando.jpg';

// Tipagem explícita do componente
const App: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="cabecalho">
        <div>
          <h1 className="central-title">Por Nossa Amizade de Muitos Anos</h1>
        </div>
      </header>

      <main id="container">
        <section className="description" aria-label="Mensagem de amizade">
          <div className="card-title">
            <h2 className="secondary-title">
              Uma amizade igual a nossa não se encontra em qualquer lugar!
            </h2>
          </div>
          <div className='photo'>
            <img src={imagemfernando1} alt='fotosdenós' loading='lazy'></img>
          </div>

          {/* Renderiza todos os parágrafos dinamicamente */}
          {MESSAGES.map((texto, index) => (
            <article key={index} className="card-text">
              <p
                className="primary-text"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            </article>
          ))}

          <div className='photo'>
            <img src={imagemfernando2} alt='fotosdenós' loading='lazy'></img>
          </div>
          <div className="card-title">
            <h2 className="secondary-title">
            Sempre que precisar, estarei aqui! <br></br>Nossa amizade é eterna.
            </h2>
          </div>
          <div className="card-title">
            <h2 className="final-menssage">
            Um imenso abraço do seu amigo <br></br> Josian Chagas! 
            </h2>
          </div>

        </section>
      </main>
    </>
  );
};

// Dados extraídos para facilitar manutenção e leitura
const MESSAGES: string[] = [
  `Antes de qualquer coisa, quero te dizer que estas palavras estão guardadas há muito tempo,
   esperando o momento certo. E hoje surgiu a melhor oportunidade.
   Quando me perguntam "<span>Quem é Fernando?</span>", sinto orgulho em responder que essa pessoa
   é meu melhor amigo de todos os tempos. E, na verdade, sinto que isso vai além da amizade, é uma irmandade.`,

  `Te considero como irmão por todas as excelentes lembranças que construímos juntos. 
   Seja nas nossas conversas descontraídas e nas muitas risadas de agora, ou quando éramos 
   adolescentes e tínhamos conversas profundas em lugares aleatórios, como em cima das árvores, 
   ou dentro de uma casa abandonada. Mesmo depois de tantos anos, ainda consigo me lembrar dos 
   conselhos que dávamos um ao outro, das risadas que eram sempre espontâneas e de todas as vezes 
   em que tive certeza de que tenho um amigo fiel para contar sobre qualquer situação. Além disso, 
   recordo com frequência de todas as vezes que saíamos para andar de bicicleta, e como era raro 
   voltarmos para casa sem algum ralado nos joelhos. Mas, apesar de tudo isso, posso dizer que 
   nunca existiu uma época tão boa quanto aquela, e tudo isso graças à nossa amizade.`,

  `Mas, se for analisar bem antes, nossa amizade vem de muitos anos. Ainda me lembro daquele 
   carrinho de bombeiro que você me deu quando éramos bem pequenos. Também me recordo de quando 
   minha irmã dizia que eu não deveria ter medo de você, porque você estava apenas brincando comigo. 
   Tenho lembranças nítidas de quando eu ainda não ia para a escola, mas você já ia de bicicleta, 
   e sempre no mesmo horário eu descia até o final da rua para dar "tchau" quando você passava. 
   Me lembro também do meu primeiro dia de aula, em que eu estava com medo e você me disse bem 
   assim: "É só fazer cara de mau." Realmente eu fiz e deu certo. E tudo isso não me deixa 
   esquecer o quanto eu gosto de você e te considero como um irmão.`,

  `Tiveram momentos em que a vida nos separou. Isso é fato. Mas, mesmo assim, para mim, perder 
   sua amizade não é opção! Existiram momentos, pessoas e circunstâncias que tentaram de tudo 
   para que nossa amizade tivesse fim, mas, de qualquer jeito, ninguém consegue destruir o que 
   Deus fez. E além de tudo, não existe ninguém que consiga desfazer essa amizade de mais de 18 anos.`,

  `Ter você como amigo de infância para mim é privilégio, pois posso dizer com muita certeza 
   que não existe nenhuma pessoa nesse mundo que substitua seu lugar, pois sua amizade vale 
   muito pra mim, a verdade é essa !!!`,

  `Você pra mim, é sinônimo de: Alegria, felicidade, irmandade, paz, inteligência, vitalidade, 
  esforço, dedicação, orgulho, acolhimento, espiritualidade, amizade, companheirismo, fechamento, 
  reciprocidade, lealdade.`
];

export default App;