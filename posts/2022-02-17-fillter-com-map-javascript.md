---
title: Fillter com Map JavaScript
description: Exemplo de filter com map
date: 2022-02-17 12:03:41
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png
category: Javascript
background: "#FEC748"
---
Exemplo 01

```jsx
 {produtos
              .filter((value) => {
                return value.categoria === category
              })
              .map((item) => (
                <Link href={`/${item.slug}`} key={item.id}>
                  <a>
                    <S.Card>
                      <b>{item.codigo}</b>
                      <img src={item.imagem01.url} alt="Imagem Card" />
                      <span>
                        {item.preco.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </span>
                    </S.Card>
                  </a>
                </Link>
              ))}
```