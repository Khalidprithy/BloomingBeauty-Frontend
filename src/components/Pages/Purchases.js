import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ShowPurchase from './ShowPurchase';

const Purchases = () => {


    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/addItems')
    }

    const [products, setProducts] = useProducts();

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://blooming-beauty-server.onrender.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }


    return (
        <div className='p-2'>
            <div className='flex items-center justify-between my-4'>
                <p className='text-xl font-semibold'>All Product List</p>
                <button
                    onClick={handleAddProduct}
                    className='btn btn-sm btn-success'>Add New Item</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delivery</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <ShowPurchase
                            key={product?._id}
                            product={product}
                            handleDeleteBtn={handleDeleteBtn}
                        ></ShowPurchase>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Purchases;