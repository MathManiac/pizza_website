import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}>
            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>{pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                </div>
                <div className={styles.otherPizzasWrapper}>
                    {otherPizzas.map(otherpizza => {
                        return(
                          <div className={styles.otherPizzas}  key={otherPizzas.id}>
                              <Link href={"/" + otherPizzas.slug}>
                                  <a>
                                    <img src={otherpizza.image} alt={otherpizza.name}  />
                                    <p>{otherpizza.name}</p>
                                  </a>
                              </Link>
                          </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
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
            slug: 'cheese-pizza-too',
            description: 'jumjum',
            toppings: ['mozzarela cheese','ham'],
            image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 8.99,
        },
        {
            id: '3',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza-three',
            description: 'jumjum',
            toppings: ['pinaple', 'chicken', 'garlic'],
            image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 7.99,
        },
        {
            id: '4',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza-four',
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
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) =>{
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
            slug: 'cheese-pizza-too',
            description: 'jumjum',
            toppings: ['mozzarela cheese','ham'],
            image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 8.99,
        },
        {
            id: '3',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza-three',
            description: 'jumjum',
            toppings: ['pinaple', 'chicken', 'garlic'],
            image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            price: 7.99,
        },
        {
            id: '4',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza-four',
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
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    }
}