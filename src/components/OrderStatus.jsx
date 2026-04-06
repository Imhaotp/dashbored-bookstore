import React from "react";

function OrderStatus({ orders }) {
 const total =  orders.length;
 const completed = orders.filter(order => order.status === "completed").length;
 const pending = orders.filter(order => order.status === "pending").length;
 const cancelled = orders.filter(order => order.status === "cancelled").length;

    return (
        <div className="order-status">
            <h2>Order Status</h2>
             <div className="status-wrapper">
            <div className="status-item">
                <span>Completed</span>
                <span>{Math.round((completed / total) * 100)}%</span>
                <div className="progress-bar">
                    <div className="progress-green" style={{'--progress': `${(completed / total) * 100}%`}}></div>
                </div>
            </div>
            </div>
             <div className="status-wrapper">
            <div className="status-item">
                <span>Pending</span>
                <span>{Math.round((pending / total) * 100)}%</span>
                 <div className="progress-bar">
                     <div className="progress-yellow" style={{'--progress': `${(pending / total) * 100}%` }}//width: `${(pending / total) * 100}%`}}
                     ></div>
                </div>
                 </div>
                 </div>
                  <div className="status-wrapper">
                 <div className="status-item">
                <span>Cancelled</span>
                <span>{Math.round((cancelled / total) * 100)}%</span>
                 <div className="progress-bar">
                     <div className="progress-white" style={{'--progress': `${(cancelled / total) * 100}%`}}></div>
                </div>
                 </div>
                 </div>

            </div>
    );
}

export default OrderStatus;
