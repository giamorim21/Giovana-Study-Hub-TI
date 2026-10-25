# Plano e registro de testes

Testes do **PortfolioHUB (Study Hub)** antes da publicação no GitHub Pages. Cada teste é executado e o resultado é registrado nesta tabela.

- **Responsável:** Giovana Amorim Campos
- **Data da execução:** __/__/2026
- **Versão testada:** v1.0 (branch `main`)
- **Site:** https://giamorim21.github.io/Giovana-Study-Hub-TI/

> Como preencher: marque o resultado como **Aprovado**, **Ajustado** (falhou e foi corrigido) ou **Reprovado**, e anexe o print em `evidencias/testes/` com o número do teste (por exemplo, `T01.png`).

## Resumo

| Tipo | Testes |
| --- | --- |
| Funcionais | T01, T02, T03, T04, T05 |
| Usabilidade e responsividade | T06 |
| Acessibilidade e desempenho | T07 |
| Segurança | T08 |

## Casos de teste

| Nº | Teste | Como verificar | Resultado esperado | Resultado obtido | Status | Evidência |
| --- | --- | --- | --- | --- | --- | --- |
| T01 | Navegação | Clicar em cada link do menu, em desktop e celular | Rolagem suave até a seção e item do menu destacado | | Pendente | |
| T02 | Tema claro e escuro | Alternar o tema e recarregar a página | Tema escolhido é mantido (`localStorage`) | | Pendente | |
| T03 | Filtro de projetos | Selecionar cada categoria | Apenas os projetos da categoria aparecem | | Pendente | |
| T04 | Modais | Abrir projetos e disciplinas; fechar com X e com Esc | Detalhes corretos e foco devolvido ao botão | | Pendente | |
| T05 | Links externos | Abrir GitHub, LinkedIn e e-mail | Nenhum link quebrado (sem erro 404) | | Pendente | |
| T06 | Responsividade | Testar em 360, 768 e 1366 pixels de largura | Sem rolagem horizontal e menu retrátil funcionando | | Pendente | |
| T07 | Acessibilidade e desempenho | Rodar o Lighthouse no Chrome e navegar só pelo teclado | Notas altas e todos os controles alcançáveis por Tab | | Pendente | |
| T08 | Segurança | Procurar segredos no repositório; conferir 2FA e proteção da `main` | Nenhum segredo exposto; controles ativos | | Pendente | |

## Erros encontrados e correções

| Nº | Teste | Problema | Correção | Pull request |
| --- | --- | --- | --- | --- |
| | | | | |

> Se nenhum erro for encontrado, escreva "Nenhum erro encontrado" na primeira linha.

## Checklist de lançamento

- [ ] Todos os testes da tabela executados e registrados
- [ ] Links do repositório, LinkedIn e e-mail conferidos
- [ ] README e documentação revisados
- [ ] Site publicado no GitHub Pages e aberto em janela anônima
- [ ] Título, descrição e imagem de pré-visualização revisados para compartilhamento
- [ ] Tag ou release `v1.0` criada no GitHub

Voltar ao [README principal](README.md).
