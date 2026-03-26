import { productsData } from "../data/data";
import { useState } from "react";
import ProductModal  from "./ProductModal";

function ProductPage() {
    const [products, setProducts] = useState(productsData);
    const [formData, setFormData] = useState({
        name: "",
        catagory: "",
        price: "",
        stock: "",
        active: "",
    });
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingProduct) {
            setProducts(
                products.map((item) => item.id === editingProduct.id ? {
                    ...item,
                    name: formData.name,
                    catagory: formData.catagory,
                    price: formData.price,
                    stock: formData.stock,
                    active: formData.stock > 0,

                } : item
                )
            )
        } else {
            const newProduct = {
                id: products.length + 1,
                name: formData.name,
                catagory: formData.catagory,
                price: formData.price,
                stock: formData.stock,
                active: formData.stock > 0,
            };
            setProducts([...products, newProduct])
        }
        CloseForm();
    };
    const deleteProduct = (id) => {
        setProducts(products.filter((item) => item.id !== id));
    };
    const handelInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const openAddForm = () => {
        setEditingProduct(null);
        setFormData({
            name: "",
            catagory: "",
            price: "",
            stock: "",
            active: "",
        });
        setShowForm(true);
    };
    const openEditForm = (product) => {
        setEditingProduct(product.id);
        setFormData({
            name: product.name,
            catagory: product.catagory,
            price: product.price,
            stock: product.stock,
            active: product.active,
        });
        setShowForm(true);
    };
    const CloseForm = () => {
        setEditingProduct(false);
        setFormData({
            name: "",
            catagory: "",
            price: "",
            stock: "",
            active: "",
        });
        setShowForm(false);
    };

    return (
        <>
            <ProductModal
                showForm={showForm}
                editingProduct={editingProduct}
                formData={formData}
                handelInputChange={handelInputChange}
                handleSubmit={handleSubmit}
                CloseForm={CloseForm}
            />

            <div>
                <div className="page-header">
                    <h2>Products</h2>
                    <button onClick={openAddForm} className="btn-add">Add Product + </button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Active</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.catagory}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <span className={item.active ? "badge active" : "badge inactive"}>{item.active ? "Active" : "Out Of Stock"} </span>
                                </td>
                                <td>
                                    <button className="edit-btn" onClick={() => openEditForm(item)}> Edit</button>
                                    <button className="delete-btn" onClick={() => deleteProduct(item.id)}>Delete</button>
                                </td>
                            </tr>


                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}




export default ProductPage;
