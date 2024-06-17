INSERT INTO cliente (nome, contato, email) VALUES ('Lucas', '123456789', 'lucas@gmail.com');
INSERT INTO cliente (nome, contato, email) VALUES ('Clara', '987654321', 'clara@gmail.com');

INSERT INTO encomenda (descricao, data_pedido, data_entrega, cliente_id) VALUES ('Encomenda 1', '2024-06-01', '2024-06-10', 1);
INSERT INTO encomenda (descricao, data_pedido, data_entrega, cliente_id) VALUES ('Encomenda 2', '2024-06-01', '2024-06-15', 2);

INSERT INTO tarefa (descricao, prazo, concluida) VALUES ('Comprar linha preta', '2024-06-05', false);
