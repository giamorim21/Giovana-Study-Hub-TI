# Guia de contribuição

Obrigada pelo interesse em contribuir com o Study Hub! Este guia explica como propor mudanças de forma organizada e segura.

## Princípios

- A branch `main` é a versão publicada no GitHub Pages e **só recebe mudanças por pull request**.
- Cada mudança nasce em uma branch própria, com escopo pequeno e claro.
- Nenhuma senha, token, chave ou dado pessoal de terceiros entra no repositório.

## Como contribuir

1. **Abra uma issue** descrevendo o problema ou a melhoria (use os modelos disponíveis).
2. **Crie uma branch** a partir da `main`. Quem não tem permissão de escrita deve fazer um *fork*.
   ```bash
   git switch main
   git pull
   git switch -c feature/nome-curto-da-mudanca
   ```
3. **Faça as alterações** e teste localmente abrindo o `index.html` no navegador.
4. **Faça commits pequenos e descritivos** (veja a convenção abaixo).
5. **Envie a branch** e abra um **pull request** preenchendo o modelo.
   ```bash
   git push -u origin feature/nome-curto-da-mudanca
   ```
6. **Aguarde a revisão.** Ajustes pedidos entram na mesma branch. O merge é feito após a aprovação.

## Nome de branches

| Prefixo | Uso |
| --- | --- |
| `feature/` | Novo conteúdo ou funcionalidade do site |
| `fix/` | Correção de erro |
| `docs/` | Documentação e evidências de disciplinas |

## Convenção de commits

Formato: `tipo: descrição curta no imperativo`

| Tipo | Quando usar |
| --- | --- |
| `feat` | Nova funcionalidade ou conteúdo |
| `fix` | Correção de erro |
| `docs` | Documentação |
| `style` | Ajustes visuais sem mudar comportamento |
| `refactor` | Reorganização de código sem mudar comportamento |

Exemplos:

```text
feat: adiciona o projeto ReadFlow ao portfólio
fix: corrige o link do LinkedIn no rodapé
docs: atualiza evidências de Testes e Qualidade de Software
```

## Padrões de código

- HTML semântico e acessível (`header`, `nav`, `main`, `section`, `footer`, atributos `aria-*` quando necessário).
- CSS com variáveis no `:root` para as cores dos temas claro e escuro.
- JavaScript ES6 sem bibliotecas além do Bootstrap; comentar as seções principais.
- Textos em português do Brasil, revisados.

## Checklist antes de abrir o pull request

- [ ] O site abre sem erros no console do navegador
- [ ] Menu, tema claro/escuro, filtros e modais continuam funcionando
- [ ] Links testados
- [ ] Nenhum segredo ou dado sensível no código
- [ ] README atualizado, se a estrutura mudou

## Conduta

Seja respeitoso e construtivo nas issues e nas revisões. Comentários devem focar no código e no conteúdo.
