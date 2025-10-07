export interface Hospede {
  id: number;
  nome: string;
  cpf: string;
  email?: string | null;
  telefone?: string | null;
  dataCadastro: string; 

  //reservas: Reserva[];


}

export interface HospedeCreatDto {

nome: string; 
cpf: string ; 
email?: string; 
telefone?: string; 

}
