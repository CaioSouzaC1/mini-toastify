# Mini Biblioteca de Toastify

Uma mini biblioteca de notificações estilo toast com JavaScript vanilla, inspirada no React-toastify.

## Instalação

Para utilizar esta biblioteca, inclua o seguinte em seu projeto:

- `*.html/php`: Adicione o seguinte código HTML antes do fechamento do </body> :

  ```html
  <div id="toastify"></div>
  ```

- `toastify.css`: Copie e cole o conteúdo do arquivo `toastify.css` em seu arquivo CSS ou adicione o arquivo CSS à seção `<head>` do seu arquivo HTML:

  ```html
  <link rel="stylesheet" href="caminho/para/toastify.css">
  ```

- `toastify.js`: Copie e cole o conteúdo do arquivo `toastify.js` em seu arquivo JavaScript ou adicione o arquivo JavaScript antes do fechamento da tag `<body>` do seu arquivo HTML:

  ```html
  <script src="caminho/para/toastify.js"></script>
  ```

Certifique-se de substituir `"caminho/para/"` pelo caminho correto dos arquivos em seu projeto.

## Utilização

A biblioteca oferece a função `CreateToast()` para criar e exibir as notificações estilo toast. Veja como utilizá-la:

```javascript
CreateToast(message, type, time, position);
```

- `message` (obrigatório): A mensagem da notificação.
- `type` (opcional): O tipo da notificação. Pode ser "info" (padrão), "success", "error" ou "warning".
- `time` (opcional): O tempo em milissegundos que a notificação ficará visível. O padrão é 4000ms (4 segundos).
- `position` (opcional): A posição da notificação. Pode ser "top-right" (padrão), "top-left", "bottom-right" ou "bottom-left".

Exemplo de uso:

```javascript
CreateToast("Mensagem de exemplo");
CreateToast("Mensagem de sucesso", "success");
CreateToast("Mensagem de erro", "error", 3000);
CreateToast("Mensagem de aviso", "warning", 2000, "bottom-right");
```

## Estilos Personalizados

Você pode personalizar os estilos das notificações adicionando ou modificando as classes CSS em seu arquivo `styles.css`. As classes estão organizadas de acordo com o tipo de notificação e a posição na tela. Sinta-se à vontade para alterar as cores, tamanhos, margens e outros estilos conforme suas preferências.

## Licença

Esta biblioteca é distribuída sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---
