import StatCard from "./StatCard"
import ProductPage from "./ProductPage"
import OrdersPage from "./OrdersPage"
import BooksAPI from "./BooksAPI"
import { OrdersData } from "../data/data"
//import { productsData } from "../data/data"
import OrderStatus from "./OrderStatus"

function MainContent({ activePage , products, setProducts}) {
    const totalProduct = products.length; //productsData.length;
    const totalOrder = OrdersData.length;


    const revenue = OrdersData.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    return total + orderTotal;
    }, 0);
    if (activePage === "products") {
        return (
            <main className="main">
                <ProductPage  products={products} setProducts={setProducts}/>
            </main>
        )
    }
    if (activePage === "orders") {
        return (
            <main className="main">
                <OrdersPage />
            </main>
        )
    }
    if (activePage === "books") {
        return (
            <main className="main">
                <BooksAPI />
            </main>
        )
    }
    return (
        <main className="main-content">
            <h2>Admin Dashboard</h2>
            <div className="card-grid">

                <StatCard title="total Products" value={totalProduct} />
                <StatCard title="total Order" value={totalOrder} />
                <StatCard title="total Revenue" value={`$${revenue.toFixed(2)}`} />
            </div>
            <OrderStatus orders={OrdersData}/>
        </main>

    )

}

export default MainContent 