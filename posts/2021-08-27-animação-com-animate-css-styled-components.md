---
title: Animação com animate-css-styled-components
description: Animações empilhadas com animate-css-styled-components
date: 2021-08-27 09:57:27
thumbnail: https://styled-components.com/atom.png
category: CSS
background: "#529DC4"
---
Primeiro vamos instalar.

`npm install --save animate-css-styled-components`

Importe uma animação que você quer usar:

```jsx
import { Wobble } from 'animate-css-styled-components';
<Wobble duration="0.8s" delay="1s">
  ..seu componente ou conteúdo aqui
</Wobble>
```

Veja esse exemplo funcionando [aqui](https://dielduarte.github.io/animate-css-styled-components/?selectedKind=Attention&selectedStory=Wobble&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) e como importar todas as animações [aqui](https://github.com/dielduarte/animate-css-styled-components/tree/master/docs/specific-animations).

## Animações empilhadas com animate-css-styled-components

Desde a versão 0.0.19, Eu criei uma nova feature chamada Animações empilhadas (stacked animations)*,* nada mais é que um simples high order component para trabalhar com varias animações uma após a outra, com diferentes tempos de duração, delay ou qualquer outra propriedade. Vamos ver como isso funciona:

```jsx
import Animate, {
    Flash,
    Bounce
  } from 'animate-css-styled-components';
  <Animate 
    Animation={[Flash, Bounce]} 
    duration="0.8s" 
    delay="0.2s">
    <Card>
      card content...
    </Card>
  </Animate>
```

No exemplo acima que você pode ver funcionando [aqui](https://dielduarte.github.io/animate-css-styled-components/?selectedKind=Animate%20%28HOC%29&selectedStory=Multiple%20Animations&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel\), a animação *Bounce* só vai ser executada depois que a animação *Flash* terminar, respeitando os tempos de duração + delay. Nesse exemplo duração e delay são iguais para todas as animações, mas você pode passar diferentes valores para cada animação, vamos ver isso agora:

```jsx
import Animate, {
    Flash,
    Bounce,
    FadeOut,
    FadeIn
  } from 'animate-css-styled-components';
<Animate 
    Animation={[Flash, Bounce, FadeOut, FadeIn]}
    duration={["0.8s", "3s", "2s", "0.4s"]}
    delay={["0.2s", "0.1s", "0.5s", "1s"]}>
    <Card>
      card content...
    </Card>
  </Animate>
```

Veja esse exemplo [aqui](https://dielduarte.github.io/animate-css-styled-components/?selectedKind=Animate%20%28HOC%29&selectedStory=Multiple%20Animations%20with%20diferent%20times%20and%20delays&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel).

**Não se esqueça, você pode passar qualquer atributo de animação css como uma string se o valor for o mesmo para todas as animações ou como um array caso os valores precisem ser diferentes.**

Muito obrigado por ler até aqui, siga o *code.uai* e seja notificado quando lançarmos novos posts, vejo você em breve!