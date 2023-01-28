# About

A Study project made for traning the developement of a aplication With NextJs for a subscription based Posts site.

The application was developed with Next applying the following concepts:
<ul>
  <li>Use External APIs</li>
  <li>API Root</li>
  <li>Server Side Rendering (SSR)</li> 
  <li>Static Site Generation (SSG)</li>
  <li>Payments with STRIPE</li>  
  <li>NextAuth For authentication</li>
  <li>FaunaDB to manage the </li> 
  <li>Prismic CMS to manage Posts</li> 
</ul>

The project was developed Ignite from Rocketseat.

## Screens

<b>Home:</b>

![nologin](https://user-images.githubusercontent.com/76182202/161833713-83d3190b-d432-4023-a54e-fdc6f07d5a10.png)

<b>Post list:</b>
![login](https://user-images.githubusercontent.com/76182202/161833708-d1344c82-3020-4c54-bddf-b04c16cac796.png)

<b>Authenticated user Post:</b>
![post_loged](https://user-images.githubusercontent.com/76182202/161833729-b2aa0f85-e5ee-4026-b2d0-e36ae487d0a7.png)

<b>Unauthenticated user Post</b>
![post_no_login](https://user-images.githubusercontent.com/76182202/161833749-07eb5c7c-e58e-442d-a4c6-6c68f7a7e6ff.png)

## Used Technologies
The project utilises the following technologies:
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

## Run project
Install  Stripe CLI: https://stripe.com/br.

(Opcional) Install yarn: https://yarnpkg.com/, can use npm.

Create a account and configure the client in:
<ul>
  <li>Stripe</li>
  <li>FaunaDB</li>
  <li>Prismic CMS</li>
</ul>

Copy the project to the desired folder with the following command:

### `git clone https://github.com/Thiago-kon/ignews`
Install dependences with:

### `yarn install`

after, run the project on localhost:

```
# run stripe listen to listen the events of the webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Iniciate App with:
$ yarn dev
```

