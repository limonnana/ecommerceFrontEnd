import { User } from './user';
import { OrderProductQuantityTotal } from './order-product-quantity-total';

export class OrderDtoResponse {

    orderId: string;
    user: User;
    orderProductQuantityTotal: OrderProductQuantityTotal[];
    totalTotal: string;
}
