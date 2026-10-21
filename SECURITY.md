# Política de segurança

Este repositório hospeda um site estático de portfólio (HTML, CSS e JavaScript), sem back-end, banco de dados ou login de usuários. Mesmo assim, algumas práticas de segurança são mantidas.

## Práticas adotadas

| Controle | Descrição |
| --- | --- |
| Autenticação em dois fatores | Obrigatória na conta GitHub da proprietária |
| Branch `main` protegida | Alterações somente por pull request; force push bloqueado |
| Secret scanning e push protection | Ativados para impedir o envio de segredos |
| Dependabot alerts | Ativados para avisar sobre vulnerabilidades |
| Nenhum segredo no código | Senhas, tokens e chaves nunca são versionados; `.gitignore` atualizado |
| Subresource Integrity (SRI) | Links de CDN devem usar o atributo `integrity` quando possível |
| Dados pessoais (LGPD) | Apenas informações que a proprietária escolheu divulgar; projetos de saúde e ponto usam dados fictícios |
| Revisão de acessos | Colaboradores e chaves são conferidos periodicamente |

## Como relatar um problema de segurança

Se você encontrar uma vulnerabilidade ou exposição de dados:

1. **Não abra uma issue pública** com detalhes sensíveis.
2. Envie um e-mail para **giamorim2101@gmail.com** com o assunto "Segurança - Study Hub", descrevendo o problema e como reproduzi-lo.
3. Você receberá uma resposta assim que possível, e a correção será publicada por pull request.

## Versões suportadas

Apenas a versão publicada na branch `main` recebe correções.
