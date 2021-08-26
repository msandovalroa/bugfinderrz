import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ordersData } from '../lib/orders';
import OrdersTable from './OrdersTable';
import OrderDetailsTable from './OrderDetailsTable';

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

export class Orders extends Component {
    static propTypes = {

    }

    state = {
        orders: [],
        selectedOrder: {}
    }

    selectOrder = order => this.setState({ selectedOrder: order });
    clearSelected = () => this.setState({ selectedOrder: {} });

    componentDidMount () {
        this.setState({ orders: ordersData })
    }

    render() {
        const { orders, selectedOrder } = this.state;
        const orderSelected = Object.keys(selectedOrder).length > 0
        const ordersActions = {
            selectOrder: this.selectOrder
        };
        const detailsActions = {
            clearSelected: this.clearSelected
        };

        return (
            <div className="layout">
                {orderSelected ?
                    <OrderDetailsTable data={selectedOrder} actions={detailsActions} />
                    :
                    <OrdersTable data={orders} actions={ordersActions} />
                }
                
            </div>
        )
    }
}

export default Orders
