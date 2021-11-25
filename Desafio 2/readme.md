
Sobre HTML.

Questoes:

Principais Tags HTML:

1 -Tag HTML é aquela que informa aos navegadores que o documento tem um código HTML:


2. Título
Title é o título da página da web, que identifica o seu site na internet:


3. Cabeçalho
Tag head é o cabeçalho do documento HTML, onde estão as informações sobre a identificação e funcionamento do site.

Também é ele que carrega os metadados, incluindo título interno de páginas e codificação do documento.

Entenda como título interno os cabeçalhos e títulos usados através dos seis níveis de título: h1, h2, h3, h4, h5 e h6 – sendo o h1 o mais relevante e o h6 o menos importante.

A tag de cabeçalho é representada por:


4. Corpo
Representado pela abertura body e fechamento body é no corpo dos códigos HTML que se concentram imagens, textos, vídeos e outras funcionalidades do conteúdo.

II Importância HTML Semântico.

HTML semantico é a forma mais facil de interpretar paginas, deixando o site com suas informações bem explicadas para o computador, e facilitando o entendimento de leitores de acessibilidade.


Questoes CSS.

I-Quando o CSS é usado como modo de construção, é certo que o site tenha compatibilidade com todos os navegadores web existentes no mercado. Páginas imprimíveis Ter páginas que podem ser impressas é característica essencial para um site de sucesso, pois os usuários esperam exatamente isso de um bom site. Quando os desenvolvedores usam o CSS, a impressão se torna bastante fácil para os usuários, que desejam imprimir essas páginas para vários usos. A utilização da estruturação por CSS facilmente atende os requisitos de impressão, retirando de maneira simples fotos, gráficos extensos e fundos, que comprometem a viabilidade de imprimir uma página. O HTML sozinho não é capaz de permitir a criação de páginas web imprimíveis e o CSS tem de ser utilizado para permitir que os usuários façam isso de maneira satisfatória . Flexibilidade na apresentação do conteúdo e a principal vantagem do CSS é permitir a flexibilidade de apresentação do conteúdo de acordo com vários meios.

II-O id e class são dois seletores em CSS que permitem aplicar estilos aos elementos HTML. A principal diferença entre o id e a classe no CSS é que o id é usado para aplicar o estilo a um único elemento, enquanto a classe é usada para aplicar o estilo a vários elementos.

III-Para que as regras tenham efeito na página, há três maneiras de inseri-las:
Arquivo externo “.css” ligado à página HTML através da tag <link> (melhor método);Dentro da tag <head> de uma página, utilizando a tag “<style>”;Dentro de um elemento, utilizando o atributo style.

IV-Seletores Agrupados
Quando você deseja fazer com que vários elementos tenham as mesmas características, você irá agrupá-los em um mesmo seletor. A separação dos elementos é feita por vírgulas. Veja um exemplo:
strong, em, span {
 color: red;
}
Os elementos STRONG, EM e SPAN terão a mesma cor.
Seletores Encadeados
O CSS trabalha com especificidade. Suponhamos que você queira que o EM tenha cor de letra vermelha, você irá fazer assim:
em {
 color: red;
}

V-O box model (modelo de caixa)  é a representação de um elemento retangular em uma página web.
Quando falamos em retângulo sabemos que ele tem duas propriedades: altura e largura,  no caso do box model existem outras caracteristicas.
A área mais externa (em verde) é a margem do box model, ou seja, define o espaçamento da borda para fora.
A linha branca é a borda do elemento.
A área interna (em vermelho) é o espaçamento interno, ou seja, entre a borda e o conteúdo
A área interna (em cinza) é o conteúdo do box model.
Desta forma podemos resumir que para obter o tamanho do box model devemos considerar o tamanho do box(altura e largura) + espaçamento interno + borda + margem.

VI-Diferença entre padding e margin: Padding: preenchimento/espaçamento interno; Margin: Espaçamento externo.

VII-O Position é uma propriedade perigosa para iniciantes. Normalmente o desenvolvedor que acaba de conhecer essa propriedade, acha que ela é a resposta para todos os problemas de posicionamento e diagramação de layout. Pelo contrário. O Position não serve para diagramar a estrutura de layouts. Para isso, você utiliza a propriedade float do css. O Position vai servir para fazer coisas mais simples.
Coordenadas
Para posicionar seus elementos, você precisa inserir uma coordenada. Essas coordenadas são comandadas pelas propriedades: top, left, right ou bottom. Todos os valores de positions só trabalham com essas coordenadas. Obviamente, se você definir um left para o seu elemento, não faz sentido definir um right. A mesma coisa para o bottom e o top. Em código ficaria assim:
div {
  position: absolute;
  top: 150px;
  left: 150px;
}
Position Fixed
O position: fixed; irá fixar a posição do elemento na coordenada que você definir. A medida que a página é rolada, o elemento continua fixo na posição que você definiu e o conteúdo da página rola normalmente.
Geralmente é usado para fixar elementos como cabeçalhos ou sidebars.
Position Relative
Todos os positions precisam de um ponto para iniciar o cálculo da coordenada para assim posicionar o elemento na tela. Ao contrário do que muitos acham, esse ponto não é o ponto central do elemento, o ponto base é o canto superior esquerdo do elemento. A partir deste canto, o browser irá calcular a coordenada que você definiu e irá posicionar o elemento no viewport.

O position relative posiciona o elemento em relação a si mesmo. Ou seja, o ponto zero será o canto superior esquerdo, e ele começará a contar a partir dali.
