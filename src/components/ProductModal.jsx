function ProductModal ({
    showForm,
    editingProduct,
    formData,
    handelInputChange,
    handleSubmit,
    CloseForm



}){
return (
    <>
    

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handelInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Catagory</label>
                                <input type="text" name="catagory" value={formData.catagory} onChange={handelInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" name="price" value={formData.price} onChange={handelInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Stock</label>
                                <input type="number" name="stock" value={formData.stock} onChange={handelInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    name="active" value={formData.active} onChange={handelInputChange} required
                                >
                                    <option value="">Select Status</option>
                                    <option value={true}>Active</option>
                                    <option value={false}>Out Of Stock</option>
                                </select>
                                 <div className="form">
                        <button type="submit" className="btn-add">{editingProduct ? "Update" : "Add" } </button>
                        <button type="close" className="btn-cancel" onClick={CloseForm}>Cancel</button>
                    </div>
                            </div>

                        </form>

                    </div>
                </div>
            )}
    </>
)
}

export default ProductModal;