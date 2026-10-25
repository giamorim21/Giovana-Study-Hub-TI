# Giovana | Study Hub

Portfólio acadêmico e profissional de **Giovana Amorim Campos**, estudante de Ciência da Computação (8º semestre) com foco em **Engenharia de Software** e **Gerenciamento de Projetos**.

O Study Hub é o **PortfolioHUB** desta trilha: um site estático que apresenta meu perfil, projetos e evidências de aprendizado, e este repositório é a fonte de todo o conteúdo.

- **Site publicado:** https://giamorim21.github.io/Giovana-Study-Hub-TI/
- **LinkedIn:** https://www.linkedin.com/in/giovana-amorime/
- **E-mail:** giamorim2101@gmail.com

## Estrutura do repositório

```text
Giovana-Study-Hub-TI/
├── 01_Apresentacao_e_Perfil/     # Perfil, currículo e apresentação
├── 02_Disciplinas_Cursadas/      # Evidências de disciplinas concluídas
├── 03_Disciplinas_em_Curso/      # Evidências de disciplinas em andamento
├── 04_Projetos_e_Certificados/   # Projetos completos e certificações
├── .github/                      # Modelos de pull request e de issues
├── LICENSE                       # Licença MIT
├── index.html                    # Página única do portfólio
├── style.css                     # Estilos (tema claro e escuro)
├── script.js                     # Filtros, modais, tema e rolagem suave
├── CONTRIBUTING.md               # Como propor mudanças
├── SECURITY.md                   # Política de segurança
└── README.md
```

## Tecnologias

HTML5 semântico, CSS3, JavaScript (ES6), Bootstrap 5.3 e Bootstrap Icons (via CDN), publicados no GitHub Pages.

## Como ver o site localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/giamorim21/Giovana-Study-Hub-TI.git
   ```
2. Entre na pasta e abra o `index.html` no navegador. Não há etapa de build nem dependências para instalar.

## Fluxo de versionamento

Working Directory, Staging Area, Git Local e GitHub Remoto:

A `main` é protegida: toda mudança nasce em uma branch e entra por pull request, conforme [CONTRIBUTING.md](CONTRIBUTING.md).

```bash
git switch -c docs/atualiza-evidencias
git add .
git commit -m "docs: atualiza evidências da disciplina"
git push -u origin docs/atualiza-evidencias
# no GitHub: abrir o pull request, revisar e fazer o merge na main
```

## Projetos em destaque

| Projeto | Descrição |
| --- | --- |
| Sistema Ponto Eletrônico | Gestão de jornada de trabalho, registros e regras de negócio |
| Sistema Clínico Unificado | Centralização de prontuários com foco em segurança de dados |
| ReadFlow | Plataforma de fluxo e organização de leitura e estudos |
| Paradigmas | Padrões de projeto e múltiplos paradigmas de desenvolvimento |

## Segurança

Veja a [política de segurança](SECURITY.md) para saber como relatar problemas.

## Licença

Código do site sob licença [MIT](LICENSE). Conteúdo acadêmico e pessoal de autoria de Giovana Amorim Campos.
