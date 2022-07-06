# Sobre

O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

A aplicação foi desenvolvida utilizando o framework NextJS aplicando os seguintes conceitos:
<ul>
  <li>consumo de API externas</li>
  <li>API Root</li>
  <li>Server Side Rendering (SSR)</li> 
  <li>Static Site Generation (SSG)</li>
  <li>pagamentos com o STRIPE</li>  
  <li>NextAuth para o login</li>
  <li>FaunaDB manter informações do usuários</li> 
  <li>Prismic CMS para controle dos posts</li> 
</ul>

O projeto foi desenvolvido durante o Ignite da Rocketseat.

## Telas

<b>Home:</b>

![nologin](https://user-images.githubusercontent.com/76182202/161833713-83d3190b-d432-4023-a54e-fdc6f07d5a10.png)

<b>Lista de post:</b>
![login](https://user-images.githubusercontent.com/76182202/161833708-d1344c82-3020-4c54-bddf-b04c16cac796.png)

<b>Post Usuário logado:</b>
![post_loged](https://user-images.githubusercontent.com/76182202/161833729-b2aa0f85-e5ee-4026-b2d0-e36ae487d0a7.png)

<b>Post usário não logado:</b>
![post_no_login](https://user-images.githubusercontent.com/76182202/161833749-07eb5c7c-e58e-442d-a4c6-6c68f7a7e6ff.png)

## Tecnologias utilizadas
Esse projeto foi desenvolvido utilizando as seguintes tecnologias abaixo:
<ul>
  <li>ReactJS</li>
  <li>NextJS</li>
  <li>TypeScript</li>
  <li>SASS</li>
  <li>Next-Auth</li>
  <li>Stripe</li>
  <li>FaunaDB</li>
  <li>Prismic CMS</li>
</ul>

## Rode o projeto
Necessário realizar a instalação do Stripe CLI: https://stripe.com/br.

(Opcional) instalar o yarn: https://yarnpkg.com/, pode se usar o npm.

Criar conta e configurar os serviços externos:
<ul>
  <li>Stripe</li>
  <li>FaunaDB</li>
  <li>Prismic CMS</li>
</ul>

Copie o repositório para a pasta desejada com o seguinte comando:

### `git clone https://github.com/Thiago-kon/ignews`
Instale as depedencias com:

### `yarn install`

Em seguida, executá-lo em localhost:

```
# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev
```

