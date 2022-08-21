---
title: Pesquisa de produtos com filter
description: Exemplo de pesquisa de produtos com pelo nome e código
date: 2022-02-17 12:05:52
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
Exemplo 01



```jsx
import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './styled'

type produtosType = {
  codigo: string
  id: string
  imagem01: { url: string }
  nome: string
  preco: 52.8
  slug: string
}

interface SearchProps {
  produtos: produtosType[]
}

export default function Search({ produtos }: SearchProps) {
  const [search, setSearch] = useState('')

  return (
    <S.Section>
      <S.SearchWrapper>
        <input
          type="search"
          name="search"
          placeholder="Pesquisar Produto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchWrapper>
      <S.ListWrapper>
        <span>Listagem</span>
        {produtos
          .filter(
            (item) =>
              item.nome
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              item.codigo
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
          )
          .map((item, i) => (
            <Link href={`/${item.slug}`} key={item.id}>
              <a>
                <S.ProductWrapper key={i}>
                  <img src={item.imagem01.url} alt="Imagem" />
                  <div>
                    <b>Código: {item.codigo}</b>
                    <p>{item.nome}</p>
                  </div>
                </S.ProductWrapper>
              </a>
            </Link>
          ))}
      </S.ListWrapper>
    </S.Section>
  )
}

```