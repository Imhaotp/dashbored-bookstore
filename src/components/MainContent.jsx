import StatCard from "./StatCard"
import ProductPage from "./ProductPage"
import OrdersPage from "./OrdersPage"
import BooksAPI from "./BooksAPI"
function MainContent({ activePage }) {
    if (activePage === "products") {
        return (
            <main className="main">
                <ProductPage />
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
        <div className="main-content">
            <h2>Admin Dashboard</h2>
            <div className="card-grid">

                <StatCard title="total Products" value={100} />
                <StatCard title="total Products" value={200} />
                <StatCard title="total Products" value={300} />
            </div>
        </div>

    )

}

export default MainContent 