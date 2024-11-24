## API REST com Bun.js  

### Sobre o Bun.js  
Bun.js é um runtime moderno de JavaScript projetado para ser rápido, leve e amigável para desenvolvedores. Construído com base em motores de JavaScript, como o JavaScriptCore do WebKit, e escrito em Zig, o Bun.js otimiza fluxos de trabalho para desenvolvimento e servidores.  

Diferente do Node.js, que usa o motor V8 e possui um ecossistema mais amplo, o Bun.js foca na velocidade e simplicidade. Algumas diferenças principais entre Bun.js e Node.js:  
- #Velocidade: O Bun.js é consideravelmente mais rápido para tarefas como instalar dependências, executar scripts e servir aplicações.  
- #Ferramenta Tudo-em-Um: Inclui bundler, transpiler e gerenciador de tarefas integrados, reduzindo a necessidade de ferramentas externas.  
- #Suporte Nativo a TypeScript: O Bun.js executa arquivos TypeScript diretamente, sem precisar de um transpiler como `tsc`.  

> **Nota**: O Bun.js ainda está em desenvolvimento e não está completamente pronto para produção. É ótimo para projetos experimentais, mas sua estabilidade pode variar.  

---

### **Sobre o Projeto**  
Este projeto é uma API REST simples construída para gerenciar posts de blog. A API oferece endpoints para:  
- Listar todos os posts.  
- Buscar um post pelo ID.  
- Criar um novo post.  
- Atualizar um post existente.  
- Deletar um post.  

Todos os posts são armazenados em memória, tornando a API ideal para aprendizado e testes, mas não persistente.  

---

### **Tecnologias Utilizadas**  
- ![Bun.js](https://img.shields.io/badge/Bun.js-000000?logo=bun&logoColor=white) **Bun.js** - O runtime JavaScript.  
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) **TypeScript** - Para tipagem estática e código organizado.  
- ![Zig](https://img.shields.io/badge/Zig-FFF87E?logo=zig&logoColor=black) **Zig** - Linguagem usada na construção do Bun.js.  

---

### **Como Funciona a API REST**  

A API segue os princípios de REST e retorna respostas em JSON para todos os endpoints. Abaixo estão os detalhes das rotas disponíveis:  

| Método HTTP | Endpoint            | Descrição                          | Corpo da Requisição Exemplo  |
|-------------|---------------------|------------------------------------|------------------------------|
| GET         | `/api/posts`        | Retorna todos os posts.            | N/A                          |
| GET         | `/api/posts/:id`    | Retorna um post pelo ID.           | N/A                          |
| POST        | `/api/posts`        | Cria um novo post.                 | `{ "title": "Título", "content": "Conteúdo" }` |
| PATCH       | `/api/posts/:id`    | Atualiza um post existente pelo ID.| `{ "title": "Novo Título", "content": "Novo Conteúdo" }` |
| DELETE      | `/api/posts/:id`    | Deleta um post pelo ID.            | N/A                          |

#### Exemplos de Uso:  

- **Listar Todos os Posts:**  
  ```bash
  curl -X GET http://localhost:1414/api/posts
  ```
  
- **Criar um Post:**  
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"title": "Meu Primeiro Post", "content": "Olá Mundo!"}' http://localhost:1414/api/posts
  ```

- **Atualizar um Post:**  
  ```bash
  curl -X PATCH -H "Content-Type: application/json" -d '{"title": "Título Atualizado", "content": "Conteúdo Atualizado"}' http://localhost:1414/api/posts/1
  ```

- **Deletar um Post:**  
  ```bash
  curl -X DELETE http://localhost:1414/api/posts/1
  ```

---

### ⚠️ **Limitações**  
1. **Armazenamento em Memória**: Os dados não são salvos em um banco de dados, ou seja, os posts serão apagados ao reiniciar o servidor.  
2. **Fase Experimental**: O Bun.js ainda está em desenvolvimento e pode apresentar problemas para produção. Use com cautela.  
3. **Tratamento de Erros**: A API possui um tratamento básico de erros, mas melhorias são necessárias para cenários mais complexos.  

---

### 📦 **Como Configurar e Executar**  

1. Instale o Bun.js seguindo as instruções oficiais:  
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone este repositório:  
   ```bash
   git clone <https://github.com/WesleyBSa/bun-blogApi>
   ```

3. Execute a API:  
   ```bash
   bun index.ts
   ```

4. A API estará disponível em:  
   ```bash
   http://localhost:1414/api/posts
   ```

---

### 🌟 **Contribuições**  
Sinta-se à vontade para fazer fork deste projeto, enviar pull requests ou relatar problemas. Toda contribuição é bem-vinda!  

---

### 📘 **Referências**  
- [Documentação Oficial do Bun.js](https://bun.sh)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Zig Programming Language](https://ziglang.org/)  

> **Nota do Autor**: Este projeto é para fins educacionais. Explore, aprenda e divirta-se com as possibilidades inovadoras do Bun.js! 