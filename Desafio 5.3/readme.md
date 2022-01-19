
Item 1: Services

a) A respeito de services, responda:

I. Qual o propósito de services no angular?

Conforme a Arquitetura do Angular a utilização de Serviços tem o propósito de organizar o projeto de software Angular,
 isolando lógica de negócio e separando-a dos Controllers.


II. Porque no Angular há uma distinção entre components e services? 

Para aumentar a modularização e reutilização.


III. Como as services são disponibilizadas em um componente?
]
Importando o a classe do service e chamando como parâmetro no construtor. Possibilitando o uso dos métodos criados.


VI. Que tipo de tarefas uma service pode ter?

Um service pode ter lógicas e funcionalidades especifícas;
Busca de dados do servidor;
Validações de dados aplicados pelo usuário;
Validações de dados para login direto pelo console.

V. Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha.

Sim. É necessário registrar o service no módulo do componente para que funcione.

VI. Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton? Justifique sua escolha.

Sim, pois possui instância única dentro do escopo de um injector.

VII. Escreva uma service que deverá ter os seguintes métodos e em cada um deverá escrever uma implementação básica (pode ser usado Arrays):

getUsers( ): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
 }
getUserById(userId: number):Observable<Client> {
    const url = '${this.baseUrl}/${id}';
    return this.http.get<Client>(url);  


}
setUsers(users: Client): Observable<Client> {
    const url = '${this.baseUrl}/${item.id}';
    return this.http.put<Client>(irl, users); 

}
deleteUser(userId: number): Observable<client> {
    const url = '${this.baseUrl}/${id}´;
    return = this.http.delete<Client>(url);
 }

b) A respeito de services, responda:
I. O que é Injeção de Dependências?

Quando uma classe recebe dependências de uma fonte externa.

II. Verdadeiro ou Falso. Injeção de Dependências pode ser apenas de services? Justifique sua escolha.

Não. Podem ser de outras coisas como funções ou valores.

III. Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas? Justifique sua escolha.

Sim. Ele verifica as dependências e faz uma nova instância com a dependência injetada.

c) HTTP Client:

I. O que é o protocolo HTTP?

Protocolo de Transferência de Hipertexto, é para ser implementado nos softwares responsáveis pela comunicação com o backend de uma aplicação, como em servidores e navegadores web. Faz a requisição no servidor e recebe uma resposta em html que é interpretada pelo navegador.
II. Cite outros tipos de comunicação com o backend e faça um breve resumo de cada.
HTTPS: Versão do HTTP segura com a utilização de criptografia;

FTP: File Transfer Protocol ou Protocolo de Transferência de Arquivos, utilizado para transferência de arquivos com o TCP. Permite configurar usuário e senha.

TFTP: Trivial File Transfer Protocol ou Protocolo de Transferência de Arquivos Simples. Parecido com FTP, porém, simples. Utiliza UDP para realizar as transferências, não utiliza autentificação de login e senha;

SMTP: Simple Mail Transfer Protocol ou Protocolo Simpoles de Tranferância de Correio. Administra a transmissão do e-mail de envio.

POP3/IMAP: Post Office Protocol ou Protocolo dos Correios e Internet Message Access Protocol ou Protocolo de Acesso a Mensagem da Internet. Utilizados para leitura do e-mail. Com a diferença de que o IMAP utiliza uma cópia que é sincronizada com o servidor.

III. Que recursos o HTTP nos fornece?

Possibilidade de fazer request dos tipos de objetos de resposta;
Solução de problemas simplificado;
Recursos de testabilidade; 
Interceptação de request e response.

VI. Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?
Deve importar HttpClientModule no AppModule ou o módulo raiz.

Para injeção, importe no arquivo utilizado o httpClient e definir dentro do construtor (private http: HttpClient);

V. Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.

Verdadeiro, é uma biblioteca que pode ser consumida em conjunto com o HttpClient. Pode ser criado um service que retorna um observable.

VI. Cite os principais métodos HTTP e faça um breve resumo de cada.

CONNECT: Requisição para iniciar a comunicação bidirecional com o recurso solicitado no corpo;

GET: Uma requisição que recupera determinado dado em um servidor;

HEAD: Requisição para recuperar dados como o GET, porém, não retorna o corpo inteiro, apenas o que contém no cabeçalho;

POST: Uma requisição para enviar determinado recurso ao servidor;

PUT: Uma requisição para alterar determinado recurso no servidor, criando ou substituindo;

DELETE: Uma requisição para remover determinado recurso no servidor;

PATCH: Requisição para modificações parciais em um recurso; 

OPTIONS: Requisição utilizada para que um cliente possa saber quais opções de requisições são permitidas para um determinado recurso/dado no servidor.

VII. Verdadeiro ou Falso. Com o protocolo HTTP é possível dizer/setar o tipo de resposta do servidor backend? Justifique sua escolha.

Verdadeiro, melhorando sua semântica e tempo de compilação.

VIII. Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada.

ArrayBuffer: Usado para representar um generic, buffer de dados binários de tamanho fixo;

Blob: Usado parar representar um tipo file, com dados imutáveis;

Document: Usado para representar um tipo document, responsável pelo ponto de entrada para todo o conteúdo da página(DOM);

json: Objeto JavaScript, analisado a partir de uma sequência de caracteres JSON retornado pelo servidor;

text: Usado para representar uma string;

IX. Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.

100-199 - Respostas de informação: Indica se o server obteve sucesso no recebimento e compreensão da requisição de que browser deve esperar até que a informação seja completamente processada;

200-299 - Respostas de sucesso: Status de sucesso de requisições, informam que a requisição obteve sucesso em acessar determinado arquivo.

300-399 - Redirecionamentos: Indica um redirecionamento. Quando mecanismos de busca se deparam com um código de status de redirecionamento, ele é enviado para uma URL diferente da inicial.

400-499 - Erros do cliente: Indica um erro de acesso da página, pois não foi encontrada. O erro está sendo causado do lado do cliente, seja recebimento ou envio; e

500-599 - Erros do servidor: Indica um erro de acesso da página, pois não foi encontrada. O erro está sendo causado do lado do servidor, seja recebimento ou envio.

X. Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.

getUsers( ): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
 }
getUserById(userId: number):Observable<Client> {
    const url = '${this.baseUrl}/${id}';
    return this.http.get<Client>(url);  


}
setUsers(users: Client): Observable<Client> {
    const url = '${this.baseUrl}/${item.id}';
    return this.http.put<Client>(irl, users); 

}
deleteUser(userId: number): Observable<client> {
    const url = '${this.baseUrl}/${id}´;
    return = this.http.delete<Client>(url);
 }


 XI. Para que serve o cabeçalho em uma requisição HTTP?

Serve para tanto o cliente como o servidor passarem configurações e informações adicionais com requisições e respostas HTTP.

XII. O que é um Interceptor e quais as suas aplicações?

Interceptor é um inteceptador das requisições e respostas enviadas, que após a captação, vai inspecionar e transformar essas requisições para um servidor e/ou do servidor para o cliente.
XIII. Quais cenários mais comuns podemos usar Interceptors?

Podemos utilizar em tarefas de autenticação e registro de maneira rotineira como tokens de acesso. Tratar e gerenciar cada requisição e/ou resposta

d) RxJS:

I. O que é o RxJS?
Reactive Extensions for JavaScript, é uma biblioteca para compor programas assíncronos, que não são sincronizados em tempo real, mas sim em eventos específicos observáveis com a programação reativa.

II. Qual a diferença de Promises e Observables?

Promisses são eager loading, carregam o conteúdo mesmo antes de serem acessados. São executados apenas uma vez. Podem ser usados com as palavras reservadas async e await do ES2017;

Observables são lazy loading, carregam apenas quando necessários. Possibilita lidar com um fluxo de dados.

III. O que significa ser baseado em eventos?

É aguardar o acontecimento de algo para ser acionado, como uma movimentação, tecla, clique e outros carrgamentos.

VI. O que é o padrão de projetos Observer?

É um padrão de projeto que define a dependência um-para-muitos entre objetos. Quando um objeto muda seu estado, todos seus dependentes são avisados dessa mudança automaticamente pelo observable.

V. O que é o padrão de projetos Iterator?

É um padão de projeto que possibilita o acesso sequencial em elementos de um objeto. Delegando a iteração para outros objetos.

VI. O que é programação funcional com coleções?

São funções como principal bloco de construção de código, que não recebe dados externos, com coleções/listas como saída de operações e que alimentam as próximas.

VII. Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo.

Observable: Representa a ideia de uma coleção de valores e eventos futuros que pode ser chamada;

Observer: Uma coleção de callbacks que sabe escutar os valores entregues pelo Observable;

Subscription: Representa a execução de um Observable, é principalmente útil para cancelar a execução;

Operators: São funções puras que permitem utilizar a programação funcional para lidar com coleções com operações, entre elas map, filter, concat e reduce;

Subject: O equivalente a um EventEmitter, única forma de realizar uma multichamada de um valor ou evento para mais de um Observable;

Schedulers: São despachantes centralizados que controlam asimultaneidade de execução, permitindo-nos coordenado quando a execução acontece.

VIII. Quais são os operadores de criação?

Operadores de criação são funções que podem ser usadas para a criação de um Observable com algum comportamento predefinido ou  com outros Observables.

IX. Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:

ajax: Cria um Observable para requisições Ajax, com objeto de requisição de url, cabeçalhos ou string para URL;


import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api. ...`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);




from: Cria um Observable a partir de um array, array-like, objeto iterável ou promisse;

import { from } from 'rxjs';
import { take } from 'rxjs/operators';

function* generateDoubles(seed) {
   let i = seed;
   while (true) {
     yield i;
     i = 2 * i; // double it
   }
}

const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe(x => console.log(x));

// Logs:
// 3
// 6
// 12
// 24
// 48
// 96
// 192
// 384
// 768
// 1536



fromEvent: Cria um Observable que emite eventos de um tipo específico vindo de um event target determinado;

import { fromEvent } from 'rxjs';

const clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
                                                             // which will be passed to addEventListener
const clicksInDiv = fromEvent(someDivInDocument, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInDiv.subscribe(() => console.log('div'));

/Por eventos padrão bolha UP em árvore DOM, então normalmente
quando clicamos em div no documento
"div" seria registrado primeiro e depois "documento".
Uma vez que especificamos opção opcional de 'captura', documento
vai pegar evento quando ele vai para baixo árvore DOM, de modo console
registrará "documento" e depois "div"./


generate: Cria um Observable iterável executando um loop controlado por estado, que produz os elementos da sequência a o estado riando elementos por estado;


import { generate } from 'rxjs';

const result = generate(0, x => x < 3, x => x + 1, x => x);

result.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2

of: Converte os argumentos em um Observable numa sequência iterável;

import { of } from 'rxjs';

of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);

// Outputs
// next: 10
// next: 20
// next: 30
// the end

interval: Cria um Observable que emite números sequênciais em um intervalo de tempo especificado;


import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3

throwError: Cria um Observable que irá emitir uma instância de erro e enviará para o consumidor como um erro imediatamente após o subscription.


import { throwError } from 'rxjs';

let errorCount = 0;

const errorWithTimestamp$ = throwError(() => {
   const error: any = new Error(`This is error number ${++errorCount}`);
   error.timestamp = Date.now();
   return error;
});

errorWithTimesptamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

errorWithTimesptamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

// Logs the timestamp and a new error message each subscription;

timer: Cria um Observable que irá esperar uma hora e/ou data específica.


import { timer, of } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

// This could be any observable
const source = of(1, 2, 3);

const result = timer(3000).pipe(
  concatMapTo(source)
)
.subscribe(console.log);

X. Quais são os operadores de criação de associação?
combineLatest
concat
forkJoin
merge
partition
race
zip


XI. Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:

concat: Concatena vários Observables sequêncialmente emitindo seus valores, um após o outro;


import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10

forkJoin: Recebe um array de objetos e espera eles serem completados para então emitir os últimos valores e combina-los. É completado automaticamente se um array vazio for passado;

import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000),
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// "This is how it ends!" immediately after

merge: Gera uma saída com um Observable que emite todos os valores dados por outros Observables.

import { merge, fromEvent, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.



import { combineLatest, timer } from 'rxjs';

const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
const combinedTimers = combineLatest([firstTimer, secondTimer]);
combinedTimers.subscribe(value => console.log(value));
// Logs
// [0, 0] after 0.5s
// [1, 0] after 1s
// [1, 1] after 1.5s
// [2, 1] after 2s


import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3



import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers


import { fromEvent, interval } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));
result.subscribe(x => console.log(x));


import { fromEvent, interval } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));


import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// ... and so on
