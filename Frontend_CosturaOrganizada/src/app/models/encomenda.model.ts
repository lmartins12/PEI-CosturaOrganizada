import { Cliente } from './cliente.model';

export interface Encomenda {
  id?: number;
  descricao: string;
  dataPedido: string;
  dataEntrega: string;
  cliente: Cliente;
}
