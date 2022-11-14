## Iniciar o projeto

Para iniciar o projeto, é necessário rodar 3 comandos: 

### `npm install` - Instalação dos pacotes e libs
### `npm start` - Aplicação React
### `npm run json` - Fake API

## O que é o projeto

Um e-commerce desenvolvido com React. A ideia é que seja uma loja de roupas, os produtos vendidos são de 3 categorias: Camisas, Calças e Tênis

## Funcionalidades

Essas são as funcionalidades que precisavam serem feitas no projeto:

O sistema precisa ser responsivo e desenvolvido em React ✅ 

Dados como senhas, chaves de API, URLS de acesso e afins devem ser inseridos dentro de um arquivo `.env`. ✅ 
- O sistema deve permitir que o usuário acumule os itens dentro de um carrinho de compras antes de fechar o seu pedido. ⌛
    - Cada item deve ter uma página com detalhes sobre ele. ✅ 
    - Nesta página de detalhes, deve ser possível escolher a quantidade que o usuário deseja inserir no carrinho (ilimitado). ✅
    
- O sistema deve conter pelo menos 20 itens divididos em pelo menos 3 categorias diferentes. Os produtos dentro das categorias devem ser possíveis de filtrar de alguma forma (dropdown, busca, etc). ✅ 
    - Use o [json-server](https://www.npmjs.com/package/json-server) para simular o back-end com os produtos. ✅ 
    
- O sistema deve exigir o nome completo, e-mail, data de nascimento e endereço do usuário. ✅ 
    - O endereço deve usar a API do [ViaCep](https://viacep.com.br/) para ser preenchido por meio do CEP fornecido pelo usuário. ✅ 
    
- O sistema deve possuir uma tela final de revisão do pedido onde devem conter: ✅ 
    - Os itens selecionados. ✅ 
    - O preço total. ✅ 
    - Os dados de endereço. ✅ 
    - **Não é necessário fazer a parte de pagamento. Ao fechar o pedido basta dizer na tela que o pedido foi confirmado.** ✅ 

### `O sistema deve permitir que o usuário acumule os itens dentro de um carrinho de compras antes de fechar o seu pedido`

Essa funcionalidade só funciona na página detalhada do produto. Dentro do carrinho, mesmo possuindo os botões de adicionar/remover itens, não está funcionando. 

Da mesma forma, existe o botão de remover o produto do carrinho, mas não está funcionando. Apenas o botão de remover todos os itens está funcionavel
