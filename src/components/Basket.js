import { useState } from 'react'
import BasketItem from './Basketitem'

function Basket({ basket, resetBasket, total, products }){
    return(
        <>
        
        <div className='basket-container container'>
            <h3>Alışveriş Detayları</h3>
        <ul>
        {basket.map(item => (
            <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
        ))}
        </ul>

        <div className='total'>
            Toplam: ${total}
        </div>
        <button className='basket-reset-btn' onClick={resetBasket}>Sepeti sıfırla</button>
        </div>
        <style jsx>{`

        .basket-container{
        padding: 20px;
        background: #fff;
        border: 1px solid #ddd;
        }

        .basket-container h3{
            font-size: 20px;
            margin-bottom: 15px;
            }

            .basket-container .total{
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 10px;
                font-size: 18px;
                font-weight: bold;
                text-align: right;
                color: #F38181;
                }
         

                .basket-reset-btn{
                    background: #F38181;
                    height: 40px;
                    padding: 0 20px;
                    font-size 16px;
                    font-weight: 500;
                    cursor: pointer;
                }


        `}</style>
    </>
  )
}


export default Basket