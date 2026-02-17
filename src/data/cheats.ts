import type { CheatEntry } from "@/src/types/cheats";

export const cheats: CheatEntry[] = [
  {
    id: "docker-reset-total-info",
    type: "info",
    category: "Docker",
    title: "Reset total (derrubar tudo)",
    items: [
      "docker stop $(docker ps -aq) para todos os containers",
      "docker rm $(docker ps -aq) remove todos os containers",
      "docker network prune -f limpa redes nao utilizadas",
      "docker volume prune -f limpa volumes nao utilizados",
    ],
  },
  {
    id: "docker-stop-all",
    type: "code",
    category: "Docker",
    title: "Parar todos os containers",
    description: "Para todos os containers ativos.",
    code: "docker stop $(docker ps -aq)",
  },
  {
    id: "docker-remove-all",
    type: "code",
    category: "Docker",
    title: "Remover todos os containers",
    description: "Remove todos os containers existentes.",
    code: "docker rm $(docker ps -aq)",
  },
  {
    id: "docker-prune-network",
    type: "code",
    category: "Docker",
    title: "Limpar redes nao utilizadas",
    description: "Remove redes que nao estao em uso.",
    code: "docker network prune -f",
  },
  {
    id: "docker-prune-volume",
    type: "code",
    category: "Docker",
    title: "Limpar volumes nao utilizados",
    description: "Remove volumes orfaos do Docker.",
    code: "docker volume prune -f",
  },
  {
    id: "docker-reset-completo",
    type: "code",
    category: "Docker",
    title: "Reset total em uma linha",
    description: "Executa o reset completo com tolerancia a erro.",
    code:
      "docker stop $(docker ps -aq) 2>/dev/null || true && \\\n" +
      "docker rm $(docker ps -aq) 2>/dev/null || true && \\\n" +
      "docker network prune -f && \\\n" +
      "docker volume prune -f",
  },
  {
    id: "docker-compose-up-detached",
    type: "code",
    category: "Docker",
    title: "Subir servicos com Compose em background",
    description: "Sobe todos os servicos definidos no docker-compose em segundo plano.",
    code: "docker-compose up -d",
  },
  {
    id: "docker-compose-down",
    type: "code",
    category: "Docker",
    title: "Derrubar stack do Compose",
    description: "Para e remove os containers, redes e recursos do compose.",
    code: "docker-compose down",
  },
  {
    id: "docker-compose-logs-follow",
    type: "code",
    category: "Docker",
    title: "Acompanhar logs do Compose em tempo real",
    description: "Mostra logs continuamente para debugar os servicos em execucao.",
    code: "docker-compose logs -f --tail=100",
  },
  {
    id: "laravel-query-existencia-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - existencia",
    items: [
      "selectRaw(1) -> verifica se existe pelo menos uma linha",
      "whereExists() -> confere existencia de relacionamento",
      "exists() -> retorna true ou false",
      "exists() vs count() -> exists costuma ser mais performatico para checagem",
    ],
  },
  {
    id: "laravel-query-comparacao-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - comparacao e joins",
    items: [
      "whereColumn() -> compara coluna com coluna",
      "where() -> compara coluna com valor",
      "join() -> liga tabelas para consulta",
      "leftJoin() -> liga tabelas mantendo registros da esquerda",
      "distinct() -> remove duplicados",
    ],
  },
  {
    id: "laravel-query-agrupamento-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - agrupamento e agregacao",
    items: [
      "groupBy() -> agrupa resultados",
      "having() -> filtra apos groupBy",
      "count() -> conta registros",
      "sum() -> soma valores",
      "avg() -> media de valores",
      "min() / max() -> menor e maior valor",
    ],
  },
  {
    id: "laravel-query-ordenacao-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - ordenacao e pagina",
    items: [
      "orderBy() -> ordena resultados",
      "limit() / take() -> limita quantidade de registros",
      "offset() / skip() -> pula registros",
    ],
  },
  {
    id: "laravel-query-retornos-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - retornos",
    items: [
      "pluck() -> retorna uma coluna",
      "value() -> retorna um unico valor",
      "first() -> retorna um registro",
      "get() -> retorna colecao",
    ],
  },
  {
    id: "laravel-query-filtros-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - filtros de lista, nulos e intervalo",
    items: [
      "whereIn() -> filtra por lista de valores",
      "whereNotIn() -> exclui lista de valores",
      "whereNull() / whereNotNull() -> verifica NULL",
      "whereBetween() -> filtra intervalo",
    ],
  },
  {
    id: "laravel-query-avancado-info",
    type: "info",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "Query Builder - avancado",
    items: [
      "DB::raw() -> injeta SQL puro com cautela",
      "transaction() -> executa operacoes atomicas",
      "lockForUpdate() -> bloqueia linha para concorrencia",
      "sharedLock() -> bloqueio de leitura",
    ],
  },
  {
    id: "artisan-comandos-info",
    type: "info",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Artisan - comandos uteis",
    items: [
      "make:model cria model e pode incluir migration",
      "make:migration cria migracoes novas ou alteracoes",
      "make:controller cria controller padrao ou resource",
      "make:model -mcr cria model + migration + controller",
      "make:request, make:seeder e make:factory cobrem validacao e dados",
      "migrate:fresh e migrate:fresh --seed fazem reset total do banco",
    ],
  },
  {
    id: "laravel-select-raw-1",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "selectRaw(1)",
    description: "Seleciona valor bruto para verificacao rapida.",
    code: "DB::table('users')->selectRaw('1')->limit(1)->get();",
  },
  {
    id: "laravel-where-exists",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "whereExists()",
    description: "Filtra registros com subconsulta existente.",
    code:
      "DB::table('users')\n" +
      "  ->whereExists(function ($query) {\n" +
      "    $query->selectRaw('1')->from('orders')->whereColumn('orders.user_id', 'users.id');\n" +
      "  })\n" +
      "  ->get();",
  },
  {
    id: "laravel-exists",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "exists()",
    description: "Retorna booleano para existencia de registro.",
    code: "DB::table('users')->where('email', 'dev@site.com')->exists();",
  },
  {
    id: "laravel-where-column",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "whereColumn()",
    description: "Compara duas colunas da consulta.",
    code: "DB::table('users')->whereColumn('created_at', 'updated_at')->get();",
  },
  {
    id: "laravel-where",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "where()",
    description: "Compara coluna com valor literal.",
    code: "DB::table('users')->where('status', 'active')->get();",
  },
  {
    id: "laravel-join",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "join()",
    description: "Relaciona tabelas em consulta interna.",
    code:
      "DB::table('users')\n" +
      "  ->join('orders', 'orders.user_id', '=', 'users.id')\n" +
      "  ->select('users.name', 'orders.total')\n" +
      "  ->get();",
  },
  {
    id: "laravel-left-join",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "leftJoin()",
    description: "Mantem todos os registros da tabela da esquerda.",
    code:
      "DB::table('users')\n" +
      "  ->leftJoin('orders', 'orders.user_id', '=', 'users.id')\n" +
      "  ->select('users.name', 'orders.total')\n" +
      "  ->get();",
  },
  {
    id: "laravel-group-by",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "groupBy() + having()",
    description: "Agrupa e filtra agregacoes.",
    code:
      "DB::table('orders')\n" +
      "  ->selectRaw('status, COUNT(*) as total')\n" +
      "  ->groupBy('status')\n" +
      "  ->having('total', '>', 5)\n" +
      "  ->get();",
  },
  {
    id: "laravel-aggregates",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "count(), sum(), avg(), min(), max()",
    description: "Funcoes agregadas mais usadas.",
    code:
      "DB::table('orders')->count();\n" +
      "DB::table('orders')->sum('total');\n" +
      "DB::table('orders')->avg('total');\n" +
      "DB::table('orders')->min('total');\n" +
      "DB::table('orders')->max('total');",
  },
  {
    id: "laravel-order-limit-offset",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "orderBy(), limit(), offset()",
    description: "Ordena e pagina manualmente.",
    code:
      "DB::table('users')\n" +
      "  ->orderBy('created_at', 'desc')\n" +
      "  ->limit(10)\n" +
      "  ->offset(20)\n" +
      "  ->get();",
  },
  {
    id: "laravel-take-skip",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "take() + skip()",
    description: "Alias para limit e offset.",
    code: "DB::table('users')->take(10)->skip(20)->get();",
  },
  {
    id: "laravel-retornos",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "pluck(), value(), first(), get()",
    description: "Formas de retorno da consulta.",
    code:
      "DB::table('users')->pluck('name');\n" +
      "DB::table('users')->value('email');\n" +
      "DB::table('users')->first();\n" +
      "DB::table('users')->get();",
  },
  {
    id: "laravel-where-in-between",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "whereIn(), whereNotIn(), whereNull(), whereBetween()",
    description: "Filtros por listas, nulos e intervalo.",
    code:
      "DB::table('users')->whereIn('id', [1, 2, 3])->get();\n" +
      "DB::table('users')->whereNotIn('id', [1, 2, 3])->get();\n" +
      "DB::table('users')->whereNull('deleted_at')->get();\n" +
      "DB::table('users')->whereBetween('created_at', [$inicio, $fim])->get();",
  },
  {
    id: "laravel-db-raw",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "DB::raw()",
    description: "Usa SQL bruto em expressao.",
    code: "DB::table('orders')->select(DB::raw('SUM(total) as total_geral'))->get();",
  },
  {
    id: "laravel-transaction",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "transaction()",
    description: "Executa operacoes atomicas.",
    code:
      "DB::transaction(function () {\n" +
      "  DB::table('wallets')->where('id', 1)->decrement('balance', 100);\n" +
      "  DB::table('wallets')->where('id', 2)->increment('balance', 100);\n" +
      "});",
  },
  {
    id: "laravel-locks",
    type: "code",
    category: "Laravel",
    subCategory: "Query Builder",
    title: "lockForUpdate() e sharedLock()",
    description: "Controles de concorrencia na leitura de linhas.",
    code:
      "DB::table('users')->where('id', 1)->lockForUpdate()->first();\n" +
      "DB::table('users')->where('id', 1)->sharedLock()->first();",
  },
  {
    id: "artisan-model",
    type: "code",
    category: "Laravel",
    subCategory: "Eloquent",
    title: "Criar model",
    description: "Cria model simples ou model com migration.",
    code: "php artisan make:model User\nphp artisan make:model Post -m",
  },
  {
    id: "artisan-migration",
    type: "code",
    category: "Laravel",
    subCategory: "Migrations",
    title: "Criar migration",
    description: "Cria migracao nova ou alteracao de tabela.",
    code:
      "php artisan make:migration create_posts_table\n" +
      "php artisan make:migration add_status_to_users_table",
  },
  {
    id: "artisan-controller",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Criar controller",
    description: "Cria controller padrao e resource.",
    code:
      "php artisan make:controller UserController\n" +
      "php artisan make:controller UserController --resource",
  },
  {
    id: "artisan-model-mcr",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Criar model + migration + controller",
    description: "Scaffold completo em um comando.",
    code: "php artisan make:model Post -mcr",
  },
  {
    id: "artisan-make-request",
    type: "code",
    category: "Laravel",
    subCategory: "Validation",
    title: "Criar Form Request",
    description: "Gera classe de validacao dedicada para requests.",
    code: "php artisan make:request StoreUserRequest",
  },
  {
    id: "artisan-make-seeder",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Criar Seeder",
    description: "Gera seeder para popular dados no banco.",
    code: "php artisan make:seeder UserSeeder",
  },
  {
    id: "artisan-make-factory",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Criar Factory",
    description: "Gera factory vinculada ao model para dados fake.",
    code: "php artisan make:factory UserFactory --model=User",
  },
  {
    id: "artisan-migrate-fresh",
    type: "code",
    category: "Laravel",
    subCategory: "Migrations",
    title: "Reset total do banco",
    description: "Recria estrutura e opcionalmente popula dados.",
    code:
      "php artisan migrate:fresh\n" +
      "php artisan migrate:fresh --seed",
  },
  {
    id: "artisan-route-list",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Listar rotas",
    description: "Mostra todas as rotas registradas na aplicacao.",
    code: "php artisan route:list",
  },
  {
    id: "artisan-optimize-clear",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Limpeza geral de cache",
    description: "Limpa caches de configuracao, rotas, views e aplicacao.",
    code: "php artisan optimize:clear",
  },
  {
    id: "artisan-clear-caches-separado",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Limpar caches separadamente",
    description: "Executa limpeza individual para diagnostico rapido.",
    code:
      "php artisan cache:clear\n" +
      "php artisan config:clear\n" +
      "php artisan route:clear\n" +
      "php artisan view:clear",
  },
  {
    id: "artisan-migrate-status",
    type: "code",
    category: "Laravel",
    subCategory: "Migrations",
    title: "Ver status das migrations",
    description: "Mostra quais migrations ja rodaram e quais estao pendentes.",
    code: "php artisan migrate:status",
  },
  {
    id: "artisan-migrate-rollback-step",
    type: "code",
    category: "Laravel",
    subCategory: "Migrations",
    title: "Rollback da ultima migration",
    description: "Desfaz um ou mais passos de migration.",
    code:
      "php artisan migrate:rollback --step=1\n" +
      "php artisan migrate:rollback --step=3",
  },
  {
    id: "artisan-db-seed-class",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Rodar seeder especifica",
    description: "Executa apenas uma seeder alvo.",
    code: "php artisan db:seed --class=UserSeeder",
  },
  {
    id: "artisan-make-policy",
    type: "code",
    category: "Laravel",
    subCategory: "Artisan",
    title: "Criar policy vinculada ao model",
    description: "Gera policy para regras de autorizacao.",
    code: "php artisan make:policy PostPolicy --model=Post",
  },
  {
    id: "gitflow-info",
    type: "info",
    category: "Git",
    title: "Git Flow - tipos de branches",
    items: [
      "main/master -> branch principal estavel para producao",
      "develop -> integra funcionalidades da proxima versao",
      "feature/* -> nova funcionalidade a partir de develop",
      "release/* -> preparacao de entrega a partir de develop",
      "hotfix/* -> correcao critica criada a partir da main/master",
    ],
  },
  {
    id: "conventional-commits-info",
    type: "info",
    category: "Git",
    title: "Conventional Commits",
    items: [
      "feat -> nova funcionalidade",
      "fix -> correcao de bug",
      "docs -> mudanca em documentacao",
      "style -> formatacao sem alterar logica",
      "refactor -> reestruturacao sem feature nova",
      "test -> adicao ou ajuste de testes",
      "perf -> melhoria de performance",
    ],
  },
  {
    id: "git-fluxo-pratico-info",
    type: "info",
    category: "Git",
    title: "Fluxo pratico",
    items: [
      "criar feature branch a partir de develop",
      "concluir e fazer merge em develop",
      "quando develop estiver pronta, criar release branch",
      "se houver bug em producao, criar hotfix direto da main",
    ],
  },
  {
    id: "git-feature-branch",
    type: "code",
    category: "Git",
    title: "Criar feature branch",
    description: "Inicia nova funcionalidade a partir de develop.",
    code: "git checkout develop\ngit checkout -b feature/nova-tela",
  },
  {
    id: "git-release-branch",
    type: "code",
    category: "Git",
    title: "Criar release branch",
    description: "Prepara uma nova versao para entrega.",
    code: "git checkout develop\ngit checkout -b release/1.0.0",
  },
  {
    id: "git-hotfix-branch",
    type: "code",
    category: "Git",
    title: "Criar hotfix branch",
    description: "Corrige problema critico em producao.",
    code: "git checkout main\ngit checkout -b hotfix/correcao-critica",
  },
  {
    id: "git-commit-feat",
    type: "code",
    category: "Git",
    title: "Commit tipo feat",
    description: "Exemplo de nova funcionalidade.",
    code: "git commit -m \"feat(login-social): adicionar login via Google\"",
  },
  {
    id: "git-commit-fix",
    type: "code",
    category: "Git",
    title: "Commit tipo fix",
    description: "Exemplo de correcao de bug.",
    code: "git commit -m \"fix(validacao-email): corrigir regex de formato\"",
  },
  {
    id: "git-commit-docs",
    type: "code",
    category: "Git",
    title: "Commit tipo docs",
    description: "Exemplo de mudanca em documentacao.",
    code: "git commit -m \"docs(readme): atualizar instrucoes de setup\"",
  },
  {
    id: "git-commit-style",
    type: "code",
    category: "Git",
    title: "Commit tipo style",
    description: "Exemplo de mudanca de formatacao.",
    code: "git commit -m \"style(api): padronizar identacao e quebra de linha\"",
  },
  {
    id: "git-commit-refactor",
    type: "code",
    category: "Git",
    title: "Commit tipo refactor",
    description: "Exemplo de reestruturacao sem feature nova.",
    code: "git commit -m \"refactor(auth): simplificar fluxo de autenticacao\"",
  },
  {
    id: "git-commit-test",
    type: "code",
    category: "Git",
    title: "Commit tipo test",
    description: "Exemplo de adicao de testes.",
    code: "git commit -m \"test(user-service): cobrir cenarios de erro\"",
  },
  {
    id: "git-commit-perf",
    type: "code",
    category: "Git",
    title: "Commit tipo perf",
    description: "Exemplo de otimização de performance.",
    code: "git commit -m \"perf(cache): reduzir consultas repetidas ao banco\"",
  },
  {
    id: "sql-basico-info",
    type: "info",
    category: "SQL",
    title: "SQL - consultas essenciais",
    items: [
      "SELECT + ORDER BY + LIMIT para ultimos registros",
      "GROUP BY + COUNT para agregacoes por status",
      "UPSERT para inserir ou atualizar em conflito",
    ],
  },
  {
    id: "sql-select-limit",
    type: "code",
    category: "SQL",
    title: "SELECT com ORDER BY e LIMIT",
    description: "Busca os 10 registros mais recentes.",
    code:
      "SELECT id, nome, created_at\n" +
      "FROM usuarios\n" +
      "ORDER BY created_at DESC\n" +
      "LIMIT 10;",
  },
  {
    id: "sql-group-count",
    type: "code",
    category: "SQL",
    title: "GROUP BY com COUNT",
    description: "Conta pedidos por status.",
    code:
      "SELECT status, COUNT(*) AS total\n" +
      "FROM pedidos\n" +
      "GROUP BY status\n" +
      "ORDER BY total DESC;",
  },
  {
    id: "sql-upsert",
    type: "code",
    category: "SQL",
    title: "UPSERT no PostgreSQL",
    description: "Insere ou atualiza por conflito em chave unica.",
    code:
      "INSERT INTO usuarios (email, nome)\n" +
      "VALUES ('dev@cola.com', 'Dev')\n" +
      "ON CONFLICT (email)\n" +
      "DO UPDATE SET nome = EXCLUDED.nome;",
  },
  {
    id: "prompts-snippet",
    type: "code",
    category: "Prompts",
    title: "Snippet rapido",
    description: "Pede um exemplo curto de uso de biblioteca, estrutura ou funcao.",
    code:
      "Crie um pequeno <pedaço de código> que demonstre o uso de " +
      "<biblioteca/estrutura/função> em <linguagem de programação>.",
  },
  {
    id: "prompts-refatorar",
    type: "code",
    category: "Prompts",
    title: "Refatorar codigo",
    description: "Solicita refatoracao com foco em legibilidade e performance.",
    code:
      "Refatore o seguinte <pedaço de código> para melhorar a legibilidade, " +
      "performance e seguir as melhores práticas de <linguagem de programação>.",
  },
  {
    id: "prompts-docstring",
    type: "code",
    category: "Prompts",
    title: "Gerar docstring",
    description: "Gera docstring clara com parametros e retorno.",
    code:
      "Gere docstring concisa e clara para a função <nome da função> " +
      "que aceita <parâmetros> e retorna <tipo de retorno>.",
  },
  {
    id: "prompts-explicar-funcao",
    type: "code",
    category: "Prompts",
    title: "Explicar funcao",
    description: "Explica uma funcao em topicos com riscos de logica.",
    code:
      "Explique, em tópicos, o que a função <nome> faz e se há riscos " +
      "de erro de lógica.",
  },
  {
    id: "prompts-commit-staged",
    type: "code",
    category: "Prompts",
    title: "Commit staged",
    description: "Cria mensagem de commit tecnica a partir do staged.",
    code:
      "Escreva a mensagem de commit com base nas alterações staged.\n" +
      "Use o padrão Conventional Commits.\n" +
      "Seja claro, objetivo e técnico.",
  },
];
