FlexBox

a)FlexBox.

 As únicas ferramentas disponíveis para criar leiautes em CSS e posicionar elementos com boa compatibilidade entre browsers eram float e position. Porém, essas ferramentas possuem algumas limitações muito frustrantes, especialmente no que diz respeito à responsividade. Algumas tarefas que consideramos básicas em um leiaute, como centralização vertical de um elemento-filho com relação a um elemento-pai ou fazer com que elementos-filhos ocupem a mesma quantidade de espaço, ou colunas terem o mesmo tamanho independente da quantidade de conteúdo interno, eram impossíveis ou muito difíceis de serem manejadas com floats ou position, ao menos de forma prática e flexível. A ferramenta Flexbox (de Flexible Box) foi criada para tornar essas tarefas mais simples e funcionais: os filhos de um elemento com Flexbox podem se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar. O Flexbox é (com exceção de um wrapping opcional) um conceito de leiaute de uma só direção. Pense nos flex items inicialmente posicionaidas ou em linhas horizontais ou em colunas verticais.

b) Cite e explique cada propriedade do eixo principal.

flex-direction com os valores:

row:seu eixo principal se movera ao logo da linha (direcao inline),  esquerda para a direita em ltr (left to right), direita para a esquerda em rtl (right to left)


row-reverse: seu eixo principal se movera ao longo da linha (direcao inline), direita para a esquerda em ltr, esquerda para a direita em rtl.

column: mesmo que row, mas de cima para baixo.

column-reverse: mesmo que row-reverse mas de baixo para cima.



c) Cite e explique cada propriedade do eixo transversal.

O eixo transversal é perpendicular ao eixo principal, logo, se a propriedade flex-direction estiver definida nas linhas, como row ou row-reverse, o eixo transversal estará na direção das colunas, como column ou column-reverse.

d) Explique o que é um Flex Container.

A área de um documento que faz uso do flexbox é chamada de contêiner flex. Para criar essa estrutura, define-se o valor da propriedade display do elemento representado pelo contêiner como flex ou inline-flex.

e) Explique o que é um Flex Item?

Sao os elementos que compoem o flex container.

f) Como funciona o flex-wrap?

Embora o flexbox seja um modelo unidimensional, é possível fazer com que elementos flex sejam agrupados em múltiplas linhas. Ao fazer isso, considera-se cada linha como um novo contêiner flex. Qualquer distribuição espacial ocorrerá ao longo essa linha, sem referência às linhas de ambos os lados. Para gerar a quebra automática das linhas adicione a propriedade flex-wrap com o valor wrap. Assim, se elementos forem muito grandes para serem exibidos em uma única linha, eles serão agrupados em outras linhas.

g) Como é feita a Expansão, Encolhimento e Tamanho dos elementos flex?

Para ter mais controle sobre os elementos flex é possível alterá-los diretamente utilizando as três propriedades abaixo:

*flex-grow (en-US)

Com a propriedade flex-grow definida como um inteiro positivo, os elementos flex podem crescer ao longo do eixo principal, a partir do valor mínimo estabelecido no flex-basis. Isto fará com que o elemento se estique e ocupe qualquer espaço disponível nesse eixo ou uma proporção dele, caso outros elementos-irmãos também possam crescer.

Atribuir o valor 1 à propriedade flex-grow fará com que o espaço disponível no contêiner flex seja igualmente distribuído entre todos os elementos do exemplo acima. Logo, os elementos-filhos irão se expandir para preencher o contêiner no sentido do eixo principal.

Como visto no parágrafo anterior, a propriedade flex-grow pode ser empregada para distribuir o espaço proporcionalmente entre os elementos de um contêiner, contudo, se atribuirmos ao primeiro elemento o valor 2 parae 1 aos elementos restantes, duas partes serão dadas ao primeiro elemento (100px de 200px totais) e uma parte para cada um dos outros dois elementos (50px de 200px totais).

*flex-shrink (en-US)

Enquanto a propriedade flex-grow permite aumentar a largura dos elementos dentro do contêiner para completar o espaço disponível no eixo principal, a propriedade flex-shrink faz o oposto, controlando a redução dos mesmos. Caso não haja espaço suficiente para acomodar todos os elementos e o valor da propriedade flex-shrink seja um inteiro positivo, a largura pode ser reduzida a um valor menor do que a definida na propriedade flex-basis. Assim como na propriedade flex-grow, diferentes valores podem ser atribuídos a um elemento de modo que ele encolha mais do que os outros - um elemento cuja propriedade flex-shrink receba um valor inteiro maior irá diminuir mais do que os seus irmão que tenham valores menores.

O tamanho mínimo do elemento será levado em consideração ao se calcular a quantidade real de encolhimento que ocorrerá, o que significa que a propriedade flex-shrink se comporta de modo potencialmente menos consistente do que a propriedade flex-grow. Examinar-se-á mais detalhadamente o funcionamento desse algoritmo no artigo Taxas de Controle de Elementos Flex ao Longo do Eixo Principal.

*flex-basis (en-US)

A propriedade flex-basis define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído. O valor inicial desta propriedade é auto — neste caso o navegador observa se os itens possuem o mesmo tamanho. No exemplo acima, todos os itens têm uma largura de 100 pixels, que é utilizada como padrão na propriedade flex-basis.

Se os elementos não possuírem um tamanho padrão, então as dimensões dos seus conteúdos (imagem, texto, etc) serão passadas como parâmetro para propriedade flex-basis. É por isso que quando escreve-se display: flex no elemento-pai para criar o contêiner, todos os elementos-filhos se organizam em linha e ocupam apenas o espaço necessário para exibir seu conteúdo.

h) Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?

A propriedade align-items irá alinhar os elementos no eixo transversal.

O valor inicial desta propriedade é stretch e é por essa razão que, por padrão, os elementos flex se estendem até a maior altura. De fato, eles se esticam para preencher o contêiner flex - o item mais alto define a altura deste.

Pode-se definir a propriedade align-items como flex-start, de modo que os elementos fiquem alinhados com topo do contêiner, flex-end para alinhá-los a partir da base ou center, para que o alinhamento seja centralizado.

Teste essa propriedade e seus possíveis valores no exemplo prático abaixo — colocou-se uma determinada  altura no contêiner flex, de modo que se perceba como os elementos podem ser movidos no interior do mesmo. Veja o que acontece ao definir cada um dos possíveis valores da propriedade align-items:

stretch
flex-start
flex-end
center
                 Sintaxe

                 /* Palavras-chave básicas */
align-items: normal;
align-items: stretch;

/* Posicionamento do alinhamento */
/* align-items não recebe valores left e right */
align-items: center; /* Itens posicionados ao redor do centro */
align-items: start; /* Posiciona itens a partir do início */
align-items: end; /* Posiciona itens a partir do fim */
align-items: flex-start; /* Posiciona itens-flex a partir do início */
align-items: flex-end; /* Posiciona itens-flex a partir do fim */
align-items: self-start;
align-items: self-end;

/* Alinhamento da baseline */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alinhamento (apenas para alinhamento de posição) */
align-items: safe center;
align-items: unsafe center;

/* Valores globais */
align-items: inherit;
align-items: initial;
align-items: unset;

A propriedade justify-content (en-US) é empregada para alinhar os elementos ao longo do eixo principal, cuja direção (row ou column) é definida a partir da propriedade flex-direction. O valor inicial é flex-start, que alinha os elementos rente à borda esquerda do contêiner, mas também pode ser definido como flex-end, que resulta em um alinhamento oposto, rente à borda direita do contêiner, ou center, para alinhá-los ao centro.

O valor space-between pode ser usado pode ser usado para ocupar todo o espaço livre após a disposição dos itens e dividí-lo igualmente entre os itens, para que haja a mesma quantidade de espaço entre cada elemento. Para gerar uma quantidade igual de espaço à direita e à esquerda, usa-se o valor space-around.

Tente os seguintes valores da propriedada justify-content no exemplo prático abaixo:

stretch
flex-start
flex-end
center
space-around
space-between
