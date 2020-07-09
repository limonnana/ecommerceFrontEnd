import { OrderProductQuantityTotal } from './order-product-quantity-total';

export class Order {

    orderId: number;
    userId: number;
    totalTotal: string;
    created: string;
    productList: OrderProductQuantityTotal[];
}
