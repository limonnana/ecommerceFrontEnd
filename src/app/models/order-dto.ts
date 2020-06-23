import { TSMap } from 'typescript-map';

export class OrderDTO {

    userId: number;
    productsQuantities = new TSMap<string,number>();
}
