---
title: Fallback de bloqueio para getStaticPaths - novo recurso Next.js 10
description: Portanto, a equipe Next.js introduziu uma terceira opção para
  o `fallback`campo: `'blocking'`.
date: 2021-11-30 11:27:54
thumbnail: https://miro.medium.com/max/1000/0*hXm4rb8UAf5DEhZ2.png
category: NextJS
background: "#000000"
---
# Por que foi `fallback: 'blocking'`introduzido? 🤔🤔

Quando a Vercel lançou a `9.3`versão de seu popular framework Next.js, dois novos métodos de busca de dados foram introduzidos: `getStaticProps`e `getServerSideProps`.

Se você deseja usar `getStaticProps`com, por exemplo, uma página de detalhes de um produto ( `pages/products/[id].js`), você usa `getStaticPaths`junto com `getStaticProps`para definir quais IDs de produto você deseja gerar a página.

Se, no entanto, você tiver um grande site de comércio eletrônico com 10.000 produtos, não gostaria de retornar os IDs de *todos os* produtos da, `getStaticPaths`pois construir 10.000 páginas levaria muito tempo.

Em vez disso, você pode apenas retornar os IDs dos produtos mais populares e usar `fallback: true`em `getStaticPaths`.

Se você visualizar uma página de produto de algum produto obscuro que não é visitado com frequência (por exemplo `/products/43284`) pela primeira vez, será exibida uma tela de carregamento 💻 antes que a página seja gerada (e os dados do produto sejam buscados `getStaticProps`).

(Se você não quiser buscar outros produtos além dos especificados, use `fallback: false`e Next.js retornará um 404 🛑 para essas páginas.)

Cada visita subsequente servirá a página estaticamente 🚀 conforme a página é construída (e armazenada em cache) na primeira visita.

No entanto, ter que usar o indicador de carregamento durante a primeira visita apresenta alguns problemas:

* Alguns `og:*`rastreadores (Facebook, Twitter, LinkedIn, ...) não oferecem suporte a JS e, portanto, não conseguem buscar as `og:*`tags corretas para as `fallback: true`páginas
* As páginas AMP 📲 não funcionam corretamente `fallback: true`porque travam no carregamento. ( <https://github.com/vercel/next.js/issues/14256> )

Portanto, a equipe Next.js introduziu uma terceira opção para o `fallback`campo: `'blocking'`.