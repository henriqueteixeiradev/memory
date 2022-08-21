---
title: prevenir evento formulário react js
description: Evitar que a página atualize ao mandar informações no formulário
date: 2021-06-22 09:51:58
thumbnail: https://miro.medium.com/max/3200/1*EVqCcmCPgpNKxU1wzcTHgw.png
category: ReactJS
background: "#50bbd7"
---
```jsx
import { FormEvent } from "react";

async function handleCreateRoom(event: FormEvent) {
event.preventDefault();
}

<form onSubmit={handleCreateRoom}></form>
```