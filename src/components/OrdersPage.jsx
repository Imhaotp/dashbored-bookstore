import { OrdersData } from "../data/data";
import { useState } from "react";

function OrdersPage() {
    const [orders, setOrders] = useState(OrdersData);
    const deleteOrder = (id) => {
        setOrders(orders.filter((o) => o.id !== id));
    }
    return (
        <div>
            <div className="page-header">
                <h2>Orders</h2>
                <button className="btn-add">Add Order + </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.product_id}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <span className={item.active ? "badge active" : "badge inactive"}>{item.active ? "Active" : "Inactive"} </span>
                            </td>
                            <td>
                                <button className="edit-btn"> Edit</button>
                                <button className="delete-btn" onClick={() => deleteOrder(item.id)}>Delete</button>
                            </td>
                        </tr>


                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default OrdersPage;
