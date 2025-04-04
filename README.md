# BytefulCode Landing Page

Uma landing page moderna e multilíngue para a BytefulCode, empresa especializada em desenvolvimento web e mobile.

![BytefulCode](https://bytefulcode.tech/og-image.png)

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js 14](https://nextjs.org/) - Framework React com renderização híbrida
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes acessíveis e reutilizáveis
- [i18next](https://www.i18next.com/) - Sistema de internacionalização
- [Zod](https://zod.dev/) - Validação de formulários

## 🌍 Multilíngue

A aplicação suporta três idiomas:

- 🇧🇷 Português (padrão)
- 🇺🇸 Inglês
- 🇪🇸 Espanhol

## 📋 Funcionalidades

- Design responsivo para todos dispositivos
- Tema claro/escuro
- Formulário de contato com validações
- Internacionalização completa
- SEO otimizado
- Performance otimizada
- Acessibilidade

## 🧩 Qualidade de Código

O projeto utiliza ferramentas que garantem a qualidade e consistência do código:

### ESLint

Utilizamos ESLint para garantir a qualidade do código e seguir as melhores práticas:

```bash
# Verificar problemas
pnpm lint

# Verificar e corrigir automaticamente
pnpm lint:fix
```

### Prettier

Utilizamos Prettier para manter uma formatação consistente em todo o código:

```bash
# Formatar todos os arquivos
pnpm format

# Verificar se todos os arquivos estão formatados corretamente
pnpm format:check
```

### Script de Qualidade

Um script auxiliar está disponível para verificar e corrigir problemas de qualidade do código:

```bash
# Executar verificação e correção completa
./scripts/lint-format.sh
```

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/elvisea/landing_page_byteful_code_tech.git

# Entre na pasta do projeto
cd landing_page_byteful_code_tech

# Instale as dependências
pnpm install

# Execute o projeto em desenvolvimento
pnpm dev
```

O projeto estará disponível em [http://localhost:3002](http://localhost:3002).

## 🚢 Implantação

Este projeto pode ser facilmente implantado usando Docker:

```bash
# Construir a imagem
docker-compose build

# Executar o contêiner
docker-compose up -d
```

## 📁 Estrutura de Pastas

```
landing_page_byteful_code_tech/
├── public/              # Arquivos estáticos e traduções
│   └── locales/         # Arquivos de tradução
│       ├── pt/          # Português
│       ├── en/          # Inglês
│       └── es/          # Espanhol
├── src/
│   ├── app/             # Componentes e lógica da aplicação
│   │   ├── api/         # Rotas de API
│   │   ├── components/  # Componentes da aplicação
│   │   ├── styles/      # Estilos globais
│   ├── components/      # Componentes compartilhados
│   ├── hooks/           # React hooks personalizados
│   ├── lib/             # Funções utilitárias
│   ├── i18n/            # Configuração de internacionalização
│   └── types/           # Definições de tipos
├── .env.example         # Exemplo de variáveis de ambiente
└── docker-compose.yml   # Configuração do Docker
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

- [BytefulCode](https://bytefulcode.tech) - Transformamos ideias em soluções digitais
