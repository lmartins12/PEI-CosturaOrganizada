# Costura Organizada

Costura Organizada é um sistema ERP desenvolvido para gerenciar um ateliê de costura. Este projeto escolar utiliza tecnologias modernas para fornecer uma interface intuitiva para o gerenciamento de clientes, encomendas e tarefas.

## Tecnologias Utilizadas

- **Backend:** Java 17 com Spring Boot
- **Frontend:** Angular v17
- **Banco de Dados:** H2 Database para testes locais
- **Outros:** Moment.js para manipulação de datas

## Funcionalidades Principais

### Calendário de Agendamentos e Compromissos

- Visualizar tarefas e encomendas com base em suas datas de entrega.
- Destaque para o dia atual.
- Navegação entre meses.

### Gestão de Clientes

- Registrar, editar e excluir informações de clientes.
- Consultar histórico de encomendas para cada cliente.

### Organização de Tarefas e Prazos

- Criar, editar e excluir tarefas.
- Definir prazos para tarefas e encomendas.
- Receber notificações de prazos próximos e tarefas pendentes.

## Endpoints do Backend

### Clientes

- **GET /api/clientes:** Obter todos os clientes
- **GET /api/clientes/{id}:** Obter cliente por ID
- **POST /api/clientes:** Criar novo cliente
- **PUT /api/clientes/{id}:** Atualizar cliente existente
- **DELETE /api/clientes/{id}:** Excluir cliente

### Encomendas

- **GET /api/encomendas:** Obter todas as encomendas
- **GET /api/encomendas/{id}:** Obter encomenda por ID
- **POST /api/encomendas:** Criar nova encomenda
- **PUT /api/encomendas/{id}:** Atualizar encomenda existente
- **DELETE /api/encomendas/{id}:** Excluir encomenda

### Tarefas

- **GET /api/tarefas:** Obter todas as tarefas
- **GET /api/tarefas/{id}:** Obter tarefa por ID
- **POST /api/tarefas:** Criar nova tarefa
- **PUT /api/tarefas/{id}:** Atualizar tarefa existente
- **DELETE /api/tarefas/{id}:** Excluir tarefa

## Estrutura do Projeto

### Backend_CosturaOrganizada

- `src/main/java/com/example/costuraorganizada/`: Código fonte do backend
- `src/main/resources/`: Arquivos de configuração e templates

### Frontend_CosturaOrganizada

- `src/app/`: Código fonte do frontend
- `src/assets/`: Arquivos estáticos como imagens e estilos
- `src/environments/`: Arquivos de configuração de ambiente

## Como Executar

### Pré-requisitos

- Java 17
- Node.js e npm
- Angular CLI

### Backend

1. Navegue até o diretório do backend: `cd Backend_CosturaOrganizada`
2. Compile e execute a aplicação: `./mvnw spring-boot:run`

### Frontend

1. Navegue até o diretório do frontend: `cd frontend`
2. Instale as dependências: `npm install`
3. Execute a aplicação: `ng serve`

### Acesso ao Sistema

- O backend estará disponível em `http://localhost:8080`
- O frontend estará disponível em `http://localhost:4200`

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
