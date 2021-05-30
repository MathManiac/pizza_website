import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import {useState} from 'react';

export default function Home() {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'jumjum',
            toppings: ['mozzarela cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 9.99,
        },
        {
            id: '2',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'jumjum',
            toppings: ['mozzarela cheese','ham'],
            image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 8.99,
        },
        {
            id: '3',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'jumjum',
            toppings: ['pinaple', 'chicken', 'garlic'],
            image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 7.99,
        },
        {
            id: '4',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'jumjum',
            toppings: ['ham','bacon','onion'],
            image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 6.99,
        },
        {
            id: '5',
            name: 'Meat Feast',
            slug: 'meat-feast',
            description: 'jumjum',
            toppings: ['ham','bacon'],
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 5.99,
        },
        {
            id: '6',
            name: 'Monster Pizza',
            slug: 'monster-pizza',
            description: 'jumjum',
            toppings: ['mozzarela cheese', 'bacon'],
            image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 4.99,
        },
    ]

    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    ) 
    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());

    }
    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange}/>
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ?
                (
                    <div className={styles.nopeContainer}>There is nothing with that</div>
                )
                :
                (
                    filteredPizzas.map(pizza => {
                    return(
                        <div className={styles.pizzaItem} key={pizza.id}>
                            <Link href={`/${pizza.slug}`}>
                                <a className={styles.pizzaImageBox}>
                                    <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                                </a>
                            </Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                <p className={styles.pizzaPrice}>{pizza.price}</p>
                            </div>
                        </div>
                    )
                })
                )}
            </div>
        </div>
    )
}
