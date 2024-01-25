export interface CardData {
  credit?: {
    id: number;
    card_number: string;
    cardholder_name: string;
    expiration_date: string;
    cvv: string;
    user_id: number;
    created_at: string;
    balance: number;
  };
  debit?: {
    id: number;
    card_number: string;
    cardholder_name: string;
    expiration_date: string;
    cvv: string;
    user_id: number;
    created_at: string;
  };
}
