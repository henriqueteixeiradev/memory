---
title: Comandos Github
description: Alguns Comando para github
date: 2022-02-16 10:30:35
thumbnail: https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg
category: Git
background: "#e94e31"
---
1. [Artigos](https://www.treinaweb.com.br/blog)
2. Comandos do Git que você precisa conhecer - Parte 2 - Repositórios Remotos

Olá Web Developers! Hoje trago aqui os comandos que você precisa conhecer ao se trabalhar com Git. A primeira parte deste post abordou os [comandos do Git para repositórios locais](https://www.treinaweb.com.br/blog/comandos-do-git-que-voce-precisa-conhecer-parte-1/ "comandos do Git para repositórios locais"). Agora veremos os comandos para repositórios remotos e também como criar um repositório na nossa rede local.

## 1 - Clonando um Repositório Remoto

Para fazer download de um projeto basta executar o comando `$ git clone`, passando o endereço do repositório. Pode ser Github, Gitlab, Bitbucket, etc.

Esse comando é bem conhecido, mas ele está aqui por um detalhe que muitas pessoas não sabem: por padrão será criada uma pasta com o nome do projeto, mas você também pode no final do comando indicar qual o nome da pasta que você quer que seja criada.

```bash
$ git clone https://meu-endereco.com/meu-projeto.git minha-pasta
```

## 2 - Repositórios Remotos

Repositórios Remotos são repositórios presentes em outra máquina para a qual nós podemos pegar ou enviar código. Todos esses comandos começam com `$ git remote`. Veja os principais comandos para gerenciá-los:

### 2.1 - Adicionar Repositórios Remotos

Para ligar o seu repositório local com um repositório remoto, utilize o comando `remote add`. Precisamos passar dois parâmetros para esse comando:

1. **nome**: nome que daremos ao nosso repositório remoto, como se fosse um atalho para não precisarmos ficar escrevendo a URL toda hora. O padrão é usar o nome `origin`
2. **url**: endereço do repositório remoto ao qual o nome passado anteriormente vai se referir

```bash
$ git remote add origin https://meu-endereco.com/meu-projeto.git
```

Caso você queira colocar outro nome ao invés de `origin` não tem problema. Isso pode ser muito útil caso você precise se conectar a mais de um repositório remoto. Mas se tiver apenas um, o recomendado é seguir o padrão e usar o nome `origin`.

Ao adicionar mais de um repositório remoto, as alterações serão enviadas para todos. Isso pode ser útil caso você queira armazenar seu código em mais de um lugar ao mesmo tempo.

### 2.2 - Visualizar Repositórios Remotos

Esse comando nos mostra o endereço do repositório remoto para o qual estamos enviando nossos códigos.

```bash
$ git remote -v
```

Teremos um retorno como:

```bash
> origin https://meu-endereco/meu-projeto.git (fetch)
> origin https://meu-endereco/meu-projeto.git (push)

```

### 2.3 - Remover Repositórios Remotos

Pode ser que você não queira mais o seu local repositório conectado a um repositório remoto. Esse comando não apaga o repositório, apenas desfaz a conexão criada com o comando `$ git remote add`

```bash
$ git remote rm origin

```

Nesse exemplo usamos o nome `origin`, mas lembre-se que ali pode ser o nome que você deu ao seu repositório remoto. Se você deu um nome diferente de `origin`, lembre-se de usar o comando anterior para listar os repositórios remotos.

### 2.4 - Renomear Repositórios Remotos

Pode ser que você não queira mais o nome que você deu ao seu repositório remoto com o comando `$ git remote add`. Há um comando bem simples para renomear.

```bash
$ git remote rename nome-atual novo-nome

```

### 2.5 - Alterar Endereço de Repositórios Remotos

Já escreveu o endereço de um repositório remoto errado ou migrou ele para outro serviço? Com o comando `set-url` você será capaz de apenas alterar o endereço sem precisar mexer em mais nada. Precisamos passar dois parâmetros para esse comando:

1. **nome**: nome que demos ao nosso repositório remoto, como se fosse um atalho para não precisarmos ficar escrevendo a URL toda hora. O padrão é usar o nome `origin`
2. **url**: novo endereço do repositório remoto

```bash
$ git remote set-url origin http://meu-novo-endereco/meu-projeto.git

```

## 3 - Branches Remotas

### 3.1 - Listando Branches

Esse comando lista todas as branches presentes no repositório do seu computador.

```bash
$ git branch

```

Caso você queira que ele liste também as branches que estão no repositório remoto, adicione `-a`:

```bash
$ git branch -a

```

### 3.2 - Criando Branches Remotas

Ao enviar o seu código para uma branch remota que ainda não existe, basta executar o `push` com a opção `-u` junto com o nome do repositório remoto e o nome da nova branch.

```bash
$ git push -u origin minha-branch

```

Após a branch remota estar criada, você poderá executar simplesmente `$ git push`.

### 3.3 - Apagando Branches Remotas

Para apagar uma branch remota nós fazemos um `push` e adicionamos o `--delete`. Entre o `--delete` indicamos o repositório remoto e o nome da branch a ser apagada.

```bash
$ git push origin -d minha-branch

```

Também podemos escrever assim:

```bash
$ git push origin :minha-branch

```

### 3.4 - Renomeando Branches Remotas

Vimos no post anterior que para renomear uma branch local executamos:

```bash
$ git branch -m nome-atual novo-nome

```

Após renomear a sua branch local, basta apagar a branch remota com o nome antigo e fazer um push com a branch com o novo nome:

```bash
$ git push origin :nome-atual novo-nome

```

Para terminar de ligar a branch local com a remota, entre na branch com o novo nome e execute:

```bash
$ git push origin -u novo-nome

```

## 4 - Achando o culpado

Deu problema e estão dizendo que foi você? Não mais! Com o comando `blame` você pode ver quem alterou cada linha de um arquivo. (a menos que realmente tenha sido você 😂)

```bash
git blame nome-do-arquivo

```

Para não ficar muito grande, podemos usar `-w` para ignorar espaços em branco e usar `-L` para indicar um intervalo de linhas a serem exibidas.

```bash
git blame -w -L 1,12 nome-do-arquivo

```

E ainda podemos usar `-e` para que seja exibido o email ao invés do nome do usuário.

## 5 - Compartilhamento Offline / Local

Podemos ter repositórios remotos que não estão na nuvem, como Github, Gitlab, ou Bitbucket. Podemos fazer com que um computador em nossa rede seja o responsável por armazenar o código e receber o *push* de todos os usuários. Isso é útil principalmente em empresas que possuem uma política mais rígida com a segurança de suas informações e não permitem que seus códigos sejam armazenados fora de seus próprios servidores.

Outro uso para isso é quando adicionamos mais de um repositório remoto. Você pode continuar fazendo commits para o Github e ao mesmo tempo ir armazenando uma cópia em um pendrive.

Primeiro, no local onde teremos o nosso repositório “servidor” (que receberá os pushes), iniciamos um repositório junto com `--bare`. Neste repositório você não poderá editar arquivos ou fazer commits, ele só permite receber pushes.

```bash
$ git init --bare

```

Se você iniciou, por exemplo, um repositório em uma pasta dentro de um pendrive com o caminho `E:\meu-projeto`, basta clonar com o comando:

```bash
$ git clone E:\meu-projeto

```

Ou então, como já vimos, podemos adicionar esse repositório na nossa lista de repositórios remotos, permitindo que nossos commits sejam enviados para algum lugar como o Github e para o pendrive ao mesmo tempo:

```bash
$ git remote add usb E:\meu-projeto

```

Nesse exemplo demos o nome `usb` ao invés de `origin`. Lembre-se que você pode dar qualquer nome.

Do mesmo jeito que fizemos um repositório em um pendrive, você pode fazer o mesmo em um outro computador na sua rede. Assim todos os usuários em sua rede poderão usar este computador como repositório remoto.