// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Price_List = () => {
    const [prices, setPrices] = useState([]);
     
    // eslint-disable-next-line no-undef
    useEffect( () =>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    }, [])

    return (
        <div>
            <h2 className='text-6xl bg-purple-300 font-bold text-center text-purple-950'>Awesome Affortable Price</h2>
           <div className='grid grid-cols-3 gap-3'>
           {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
           </div>
        </div>
    );
};

export default Price_List;