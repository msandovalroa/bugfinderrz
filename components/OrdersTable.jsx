import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ordersData } from '../lib/orders';

const formatDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(dateString);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `${month} ${day}, ${year} - ${hours}:${minutes}`;
}

export class OrdersTable extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>Customer Orders</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map(order => (
                                <tr key={order.id}>
                                    <td>{order.customerName}</td>
                                    <td>{formatDate(order.createdOn)}</td>
                                    <td>
                                        <button type="button" className="detailButton">Details</button>
                                        <button type="button" className="deleteButton">Delete</button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OrdersTable
