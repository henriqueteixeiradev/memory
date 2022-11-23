---
title: Gatsby Netlify CMS
description: Configuração do gatsby para acesso ao dashboar em produção
date: 2022-11-23 11:20:57
thumbnail: https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png
category: GatsbyJS
background: "#643194"
---
<!--StartFragment-->

Encontrando dificuldades para acessar a rota `/admin` depois de enviar para produção o seu site via Netlify e Github? Siga o passo a passo:

## Ajustando o arquivo config.yml

Como o objetivo é único e exclusivo resolver o erro "*No Auth Provider Found Make sure you've configured the API credentials*", alguns detalhes serão omitidos tomando como base que você já tem suas collections definidas e demais detalhes.

```javascript
backend:
  name: github
  repo: marciofrancalima/mysite
  branch: master
  site_domain: marciofrancalima.com.br

publish_mode: editorial_workflow
media_folder: 'static/assets/img'
public_folder: 'assets/img'

collections:
 // your collection
```

Atente-se para os campos `repo` e `site_domain`. Perceba que não há **http** ou **https**. Não inclua-os!

## Configurando uma nova aplicação no Github

Quando você tentar logar via Github na sua rota `/admin` só será possível se as credenciais netlify estiverem cadastradas. Vamos aos detalhes:

Acesse esse link: <https://github.com/settings/applications/new> para cadastrar sua aplicação. Siga o exemplo da imagem abaixo.

![Cadastrando sua aplicação](https://marciofrancalima.com.br/static/e00619f62392facdb546d5fc35034cc0/7176f/new-oauth-application.png "Cadastrando sua aplicação")

Após registrar sua aplicação, suas credenciais estão prontas para serem inseridas nas configurações do Netlify.

![Credenciais do github geradas](https://marciofrancalima.com.br/static/d98bf2524bc0a53e0451cb6b5879c679/f1dec/github-credentials.png "Credenciais do github geradas")

Copie essas credenciais (Client ID e Client Secret), pois elas serão usadas logo na sequência.

Acesse as configurações (settings) do seu site lá no Netlify, em Access control, instale o provider do Github.

![Controle de acesso netlify](https://marciofrancalima.com.br/static/3b0788682e2ad6743a45034e5c501ea5/f570d/settings-netlify.png "Controle de acesso netlify")

Escolha **Github** e informe `Client ID` e `Client Secret`.

Lembrando dos ajustes realizados no arquivo `config.yml`, NÃO esquecer de enviar as alterações para a sua branch remota.

Agora basta acessar o seu site/admin e se autenticar com o github.

Abraço e até as próximas dicas ;)

<!--EndFragment-->