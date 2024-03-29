import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ShowTopItems from './ShowTopItems';
import TopSold from './TopSold';

const TopProduct = () => {

    const [products] = useProducts();

    return (
        <div className='flex flex-col md:flex-col lg:flex-row m-2 gap-3 py-14'>
            <div className='w-full lg:w-3/5 rounded-xl shadow h-full'>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-xl font-semibold'>Popular Product</h1>
                    <select className="select select-bordered w-28 max-w-xs">
                        <option selected>Week</option>
                        <option>Month</option>
                        <option>Year</option>
                    </select>
                </div>
                <div className='m-2'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        {
                            products.slice(0, 3).map(product => <ShowTopItems
                                key={product?._id}
                                product={product}
                            ></ShowTopItems>)
                        }

                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/5 h-full'>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-xl font-semibold'>Top Sold Product</h1>
                    <Link to='/inventory' className='btn btn-sm btn-success'>All Product</Link>
                </div>
                <div className='grid grid-cols-1 gap-2 p-2'>
                    {
                        products.slice(3, 6).map(product => <TopSold
                            key={product?._id}
                            product={product}
                        ></TopSold>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopProduct;