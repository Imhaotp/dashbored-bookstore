import { OrdersData } from "../data/data";
import { useState } from "react";
function OrdersPage() {
    const [orders, setOrders] = useState(OrdersData);
    const deleteOrder = (id) => {
        setOrders(orders.filter((o) => o.id !== id));
    };
    const calculateTotal = (items) => {
        return items.reduce((sum ,item) => sum + (item.price * item.qty) ,0);
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
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                <div>
                                    <strong>{order.customerName}</strong>
                                    <br />
                                    <small style={{ color: "#666" }}>{order.email}</small>
                                </div>
                            </td>
                            <td>{order.items.length} items</td>
                            <td>{calculateTotal(order.items).toLocaleString('en-SA', { style: 'currency', currency: 'SAR' })}</td> 
                            {/*.toFixed(2)}ر.س</td>*/}
                            <td>{order.date}</td>
                            <td>
                                <span className={order.status === "completed" ? "badge active" :
                                    order.status === "pending" ? "badge pending" : "badge inactive"
                                }>
                                    {order.status} </span>
                            </td>
                            <td>
                                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                                    <i className="fas fa-eye" style={{cursor: "pointer", color: "#666"}}></i>
                                    <span>View</span>
                                    </div>

                                
                                       </td>
                        </tr>


                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default OrdersPage;
