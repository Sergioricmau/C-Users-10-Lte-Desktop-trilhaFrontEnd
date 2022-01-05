a) Explique de forma sucinta a diferença entre SPA e MPA;

Uma aplicação web geralmente segue duas principais estratégias para sua criação, sendo elas: Multiple Page Application (MPA) e Single Page Application (SPA). 
Elas buscam solucionar diferentes tipos de problemas e cabe ao desenvolvedor analisar o escopo do projeto e aplicar a melhor estratégia em seu caso de uso.
As MPAs, como o nome sugere, são aplicações que possuem diferentes páginas para os recursos do site. As páginas são geradas dentro do servidor e à medida que o 
usuário interage com a aplicação, é enviado uma nova página para o cliente, sendo necessário o recarregamento da mesma.
Já nas SPAs toda a aplicação possui apenas uma única página web e à medida que o usuário interage com a aplicação são atualizados os dados da tela com a manipulação
dos elementos da página pelo próprio navegador, evitando o recarregamento da página. Dessa forma, a primeira requisição retorna um único HTML e o servidor age como
um serviço fornecendo dados e também scripts para a aplicação.


b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?

As páginas dos sites eram estáticas, ou seja, não existia tecnologia que permitisse a interação por parte do usuário final. Era possível somente navegar pelos 
hiperlinks disponíveis.


c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0? 

 a Web 1.0 pode ser associada à era dos sites estáticos. A Web 2.0 pode ser associada à era dos sites interativos. A Web 3.0 se concentra em serviços da Web e 
 marcação semântica.

 d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:

 I. De forma resumida o que é o Angular?

 O Angular é um framework  que simplifica  a construção da interface de usuário, e o desenvolvimento de aplicações,  para a web, mobile ou desktop.

 II. Qual a relação do Angular com SPA?

 Sendo o  Angular é um framework utilizado para a criação de Single-Page Applications (SPA), que é uma aplicação web consumida em uma única página, estao 
 diretamente relacionadas uma vez que, quando uma página comum é carregada e o  usuário faz qualquer solicitação de atualização de dados, como uma busca por 
 produto, o navegador faz uma requisição ao servidor para processar essa busca e retornar os dados solicitados. Nesse momento, então, é feito o recarregamento
 de toda a página, ja em uma página SPA toda essa comunicação é feita de uma forma mais dinâmica, nao sendo necessario o recarregamento de toda a pagina mas 
 somente a requisicão solicitada, reduzindo a quantidade de trafego de dados, tempo de processamento, otimizando todo o precesso. 

 III. Em uma aplicação básica, o que é essencial ter?

 Um documento Html, seu estilo em CSS e seu componente TypeScript.

 IV. O que é o Angular CLI e qual a sua importância? Dê exemplos;

 Trata-se de uma ferramenta de linha de comando utilizada para criar, desenvolver e manter projetos Angular, facilitando  e acelerando o desenvolvimento de
 projetos Angular, pois passa a automatizar tarefas (em sua maioria, repetitivas) que até então eram feitas manualmente pelo desenvolvedor, tais como: geração 
 de novos projetos, componentes, rotas, serviços, entre outros.

 Ex: ng g c ... cria component;
     ng server ... sobe o executa a aplicacao no html

 V. Para que serve o arquivo angular.json?

 Um arquivo chamado angular.json  fornece padrões de configuração específicos do espaço de trabalho e de projeto para ferramentas de construção e desenvolvimento
 fornecidas pelo CLI Angular. Os valores de caminho dados na configuração são relativos à pasta root workspace.

 VI. Quais pacotes (libs) são considerados primários (default)?

 Angular Router: Navegação avançada em client e roteamento baseado em componentes do angular. Suporta navegação lenta, rotas aninhadas e personalizadas;
 Angular Forms: Sistema para padronização e validação de formulários;
 Angular HttpClient: Http robusto que possibilita uma melhor e avançada comunicação cliente-servidor;
 Angular Animations: Sistema rico de direcionamento de animações baseadas no status da aplicação;
 Angular PWA: Ferramentas para a construção de aplicações PWA (Progressive Web App); e
 Angular Schematics: Automatização de organização de arquivos em scafolding. Refatoração e atualização de ferramentas que simplificam o desenvolvimento em larga 
 escala.

VII. Para que serve o arquivo package.json?

O package.json é criado ao  execurtamos o comando npm init, é uma especie de repositório central de configurações das ferramentas. Ele também guarda as informações
sobre as versões dos pacotes instalados de angular.

VIII. Para que serve o arquivo environment.ts?

Define-se as variáveis de ambientes que estão sendo usadas durante o desenvolvimento.


e) Sobre Text Interpolation, responda:

I. O que é?

É a inclusão  de trechos para renderização de dados.

Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.

Arquivo "comitado", no GitHub.


![Print Interpolação] (https://github.com/Sergioricmau/C-Users-10-Lte-Desktop-trilhaFrontEnd/blob/main/Desafio%205.1/Print%20Interpola%C3%A7%C3%A3o.png)


f) A respeito de Bindings, responda:

I. O que é Property Binding e quais as suas aplicações?

É uma ligação entre arquivos, permitindo a  comunicação entre os códigos de html e os códigos de typescript.

II. Qual é o passo a passo do fluxo das informações com Property Binding?

Tem como funcionalidade, direcionar o componente e suas propriedades destinando-as ao template.


III. Dê um exemplo de Property Binding e explique o seu funcionamento.

Property binding encontra o link a partir de uma variável definida no arquivo ts ou uma chamada de um método. Colocamos o src entre colchetes, pois é assim que o 
angular consegue identificar que isso é um property binding.

                       Exemplo:

Em app.component.html define-se:
<img [src] ="imagem">

Por sua vez em app.component.ts
export class
imagem = https://.....


IV. O que é Event Binding?

O event binding espera um evento ocorrer para processar ou executar. Por exemplo, depois que um click ocorrer é acionado o binding.

V. Dê um exemplo de Event Binding e explique o seu funcionamento.

Define-se o evento entre parenteses como por exemplo: (click), sendo acionado chama uma  função definida no arquivo ts com o nome botaoClicado. Nessa situação, 
quando o botão for clicado, irá gerar um alerta na página.

<button (click)="botaoClicado"().......> HTML

export class ...... {           ........TS
    botaoClicado() {
        alert("clicado!)
    }
}


Clicado!                 ..............alerta do Navegador


VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?

O two-way-data-binding trabalha de forma bidirecional, com o fluxo em duas direções. Quando alterado no html, também é alterado no ts.em dados unidireções, 
propiciando eventos sumultâniamente. 


VII. Dê um exemplo de Two-Way-Data-Binding e explique.

A junção do binding de evento e um binding de propriedade, criamos um two-way-data-binding. Quando digitado alguma informação no input, ela também irá alterar os
locais que possuem a mesma variável.

<p>Informe seu Nome</p>
<imput type="text" [( ngModel )]="seuNome">
<p>Seu nome: {{ seuNome }}</p>

export class ..... {
    seuNome = "";      ........ retornandom ao usuario o nome que ele informou.
}


g) Diretivas:

I. O que é uma diretiva Angular e qual o seu propósito?

São comandos, ou seja, instruções do angular que fazem alterações diretas no template. Podendo essas alterações serem apenas de estilo ou estruturais.

II. Quais tipos de diretivas existem?

Diretivas estruturais, que alteram a estrutura do DOM e/ou o código HTML.
Diretivas de atributos, que alteram os elementos visuais ou comportamentais.

III. O Angular possui algumas diretivas default, explique as 6 principais e dê um 
exemplo de cada;

NgClass: Adiciona e remove configurações de CSS;

NgStyle: Adiciona e remove configuração do HTML de estilo; e

NgModel: Adiciona two-way-data-binding em um elemento de formulário no HTML.

Diretivas estruturais:

NgIf: Cria condicionais;

NgFor: Cria laços de repetições; 

NgSwitch: Alterna um conjunto de visualizações.


h) Reactive forms:


I. Qual a diferença entre template-driven e reactive forms?

Reactive forms é criado e validado no seu próprio componente. Não é obrigatório a utilização do ngSubmit;

Template-driven é criado e validado no HTML. Necessidade de inclusão de diretiva para controle das configurações dos campos utilizando a própria API.


II. Quais benefícios temos ao usar um formulário reativo?

Código do template HTML mais limpo;

Criação e manutenção facilitada; 

Possibilidade de uso dos observables para reações de eventos no formulário.


III. Quais módulos são necessários para criar os formulários reativos?

FormsModule e ReactiveFormsModule;


IV. Quais classes base temos para formulários reativos no Angular?

FormControl;
FormGroup;
FormArray;
FormBuilder; e
AbstractControl.


V. Como é feita a configuração de um formulário reativo usando separadamente as classes base?

Definindo o modelo do formulário diretamente na classe do componente, com a diretiva formControl.


VI. Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?

Elemento visual do formulário é diretamente vinculado ao objeto formulário (instânciado). É um fluxo bidirecional, a atualização de um com outro é 
sincronizada e não depende de como é rendezirada para o usuário. Quando o valor muda é acionado o evento.


VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?

.setValue que atualiza os valores em FormControl;
O FormControl instancia um novo valor por meio de observables;
Todos os elementos que aguardavam o evento recebem o novo valor;
O valor renderizado na tela é atualizado.


VIII. Explique para o que serve a validação de um formulário e como isto pode ser apresentado para o usuário?


Serve para garantir que serão inseridos os dados solicitados conforme o esperado, podendo ser pela quantidade de caracteres, especificidades, 
obrigatoriedade, dentre outras, possibilitando a interação do usuário com o site, sendo apresentada em forma de login em uma página, confirmações de
 caracteres, campos obrigatórios, ou legendas que informem os problemas de validação.









