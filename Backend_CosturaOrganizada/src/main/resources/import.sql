INSERT INTO cliente (nome, contato, email) VALUES ('Lucas', '123456789', 'lucas@gmail.com');
INSERT INTO cliente (nome, contato, email) VALUES ('Clara', '987654321', 'clara@gmail.com');

INSERT INTO encomenda (descricao, data_pedido, data_entrega, cliente_id) VALUES ('Vestido azul', '2024-06-01', '2024-06-29', 1);
INSERT INTO encomenda (descricao, data_pedido, data_entrega, cliente_id) VALUES ('Calça jeans preta', '2024-06-01', '2024-06-29', 2);

INSERT INTO tarefa (descricao, prazo, concluida) VALUES ('Comprar linha preta', '2024-06-05', false);
INSERT INTO tarefa (descricao, prazo, concluida) VALUES ('Comprar linha azul', '2024-06-20', true);
