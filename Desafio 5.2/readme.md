Item 1: Reutilização de componentes

a) A respeito de componente, responda:


I. O que é um componente em aplicações Angular?

Um componente, nada mais é que uma classe demarcada com o decorator @component (), que define metadados para que o angular possa identificar que a classe é um componente e configurar as características para este componente.


II. Do que um componente é composto?

Um componente está, geralmente, relacionado a algo visual, ou seja, uma tela ou parte dela. Nesse sentido, um componente possui código (Controller) que determina ou controla o comportamento da interação com o usuário (View ou Template).

III. Qual é o comando utilizado para criar um componente utilizando Angular CLI?

ng generate component... ou ng g c ....


IV. Qual a importância da reutilização de componentes?

Ao trabalhar projeto, é comum que novos requisitos imprevisíveis surjam com o tempo, sendo de suma importância  reutilizar componentes existentes com funcionalidades semelhantes para melhor manutenção, desenvolvimento e otimização de resultados.


V. Qual a funcionalidade do selector no exemplo abaixo?


Exemplo: @Component({
 selector: 'app-component-overview', .......................... define o nome do component.
 })

VI. Explique a funcionalidade de templateUrl e template nos exemplos abaixo e
quando devemos utilizar cada uma delas.

 Exemplo 1: @Component({
 selector: 'app-component',
 templateUrl: './component.component.html'
 })
 
R:  Referencia arquivos HTML separados em um componente, sendo recomendado para quando a estrutura da aplicação é complexa;


Exemplo 2: @Component({
 selector: 'app-component-overview',
 template: <h1></h1>
 })

R: É a forma de definir estruturas HTML inline.


VII. Explique a funcionalidade de styleUrls e styles nos exemplos abaixo e
quando devemos utilizar cada um deles.


 Exemplo 1: @Component({
 selector: 'app-component',
 templateUrl: './component.component.html',
 styleUrls: ['./component.component.css']
 })

R: styleUrls - Define arquivos CSSs separados em um componente, po sua vez, organizando e mantendo o  código de estilo, em um arquivo separado;


Exemplo 2: @Component({
selector: 'app-component-overview',
template: '<h1></h1>',
styles: ['h1 { font-weight: normal; }']
})

R: Define o estilo inline, aplicando o estilo diretamento no valor da propriedade.




Hands-on 1 e 2.

Arquivos enviados GitHub, Desafio 7.





Sobre o funcionamento das rotas do Angular, responda:


I. Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?

ng new projeto --routing

II. Qual é o comando no Angular CLI para criar um novo módulo com rotas?

ng generate module customers --routing

III. Para que serve o método navigate( ) da classe Router?

O método navigate utiliza um array de comandos, onde ele navega de acordo com os caminhos parametrizados como argumentos.

IV. Para que serve o método isactive( ) da classe Router?

Informa se uma determinada url está ativa.

V. Para que serve o arquivo src/app/app-routing.module.ts?

É onde são definidas as classes e configurações para a criação de rotas;

VI. Para que serve a tag <'router-outlet></'router-outlet>?

Para definir a saída de uma rota, utiliza o path dentro da rota criada e coloca dentro da tag router-outlet.


VII. Dê um exemplo de um botão chamando uma rota através de um método em angular.

 “[…]
 
 
 escrito em linguagem 

//**<button [routerlink]="['  ']>" [state]="{ valorRota: numeroComponemt }">
 é {{ Component }} resultado? </button>**/  
 
 […]”

 VIII. Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.
 
 “[…] 
 
 escrito em linguagem

<h href="../cubo">
 <button>
  teste
</button>
</h>
 
 […]”

IX. O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.


Lazy load é o carregamento dos módulos, especifico, otimizando o processo.

{path: "lazyloading", .......}

X. O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.

Carregamento de todos os módulos ao mesmo tempo, ao iniciar a aplicação.

const routes: Routes = [
  { path: 'lista', component: ListaNumerosComponent},
  { path: 'quadrado', component: QuadradoComponent },
  { path: 'cubo', component: CuboComponent },
  { path: 'pipe', component: TestesPipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



Pipes:



Por fim, respondas as seguintes perguntas sobre pipes.

I. Qual é a utilidade dos pipes em aplicações Angular? 

Recebe um valor de entrada e retorna um valor transform, de acordo com sua espeficidade.

II. Cite os 6 pipes que fazem parte do pacote inicial do Angular. 

DatePipe;

UpperCasePipe;

<p>{{'uppercasepipe convert string to uppercase in angular'
| uppercase}}</p>
<!-- Output -->
<!--UPPERCASEPIPE CONVERT STRING TO UPPERCASE IN ANGULAR-->


LowerCasePipe;

import { Component } from '@angular/core';  

@Component({

  selector: 'my-app',

  template: `<div>

    <p>{{ myString | titlecase }}</p>  

    <p>{{ myString2 | titlecase }}</p> 

    <p>{{ myString3 | titlecase }}</p>  

    <p>{{ myString4 | titlecase }}</p>      

  </div>`,

  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {

  name = 'Angular';  

  myString = "This IS ANGULAR titleCase pipe eXANPLE";  

  myString2 = "tutorial,example"; 

  myString3 = "tutorial|example";  

  myString4 = "tutorial-example"; 

}


CurrencyPipe;

<!--output '$100.23'-->
<p>{{Value | currency}}</p>

<!--output '₹100.23'-->
<p>{{Value | currency:'INR'}}</p>





DecimalPipe;

{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}


PercentPipe;

{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}

IV. O que são custom pipes?

custom pipes possibilitam a criação personalização, atraves de parametros, classes, transform e retornos, dando uma ampla utilização destes.
