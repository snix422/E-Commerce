import { createContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();


export function CartProvider({ children }) {

    const localCart = JSON.parse(localStorage.getItem('totalItems'));
    const sumPrice = localCart ? Number(localStorage.getItem('totalPrice')) : 0;
    const localFav = JSON.parse(localStorage.getItem('favItems'));
    const [items, setItems] = useState(localCart ? localCart : []);
    const [totalPrice, setTotalPrice] = useState(sumPrice);
    const [favItems, setFavItems] = useState(localFav ? localFav : [])

    const addToCart = (id, name, price, image) => {
        const existingItem = items.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity++;

        } else {
            setItems([...items, { id: id, name: name, price: price, image: image, quantity: 1 }]);

        }

        setTotalPrice(Number(totalPrice) + Number(price));
        toast.success('Dodałeś produkt do koszyka');
        localStorage.removeItem('totalItems')
        localStorage.setItem('totalItems');
    }

    const removeFromCart = (id) => {
        const existingItem = items.find((item) => item.id === id);

        if (existingItem.quantity == 1) {
            const reducedCart = items.filter((item) => item.id !== id);
            console.log(reducedCart);
            setItems(reducedCart);
        } else {
            existingItem.quantity--;
        }

        setTotalPrice(Number(totalPrice) - Number(existingItem.price));
        toast.error('Usunąłeś produkt z koszyka')
    }

    const removeAllItemsCart = () => {
        setItems([]);
        setTotalPrice(0);
    }

    const addToFav = (id, name, price, image) => {
        const existingItem = favItems.find((item) => item.id === id);
        if (!existingItem) {
            setFavItems([...favItems, { id: id, name: name, price: price, image: image }])
        }
        toast.success('Produkt dodany do ulubionych');
        
    }

    const removeFav = (id) => {
        const reducedCart = favItems.filter((item) => item.id !== id);
        console.log(reducedCart);
        setFavItems(reducedCart);
        toast.error('Usunąłeś produkt z ulubionych');
    }


    return ( 
        <CartContext.Provider value = {{ items, totalPrice, addToCart, removeFromCart, removeAllItemsCart, favItems, addToFav, removeFav }}> 
        {children} 
        </CartContext.Provider>
    )
}

export default CartContext