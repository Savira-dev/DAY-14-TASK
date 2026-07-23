// src/api.js

const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: "Classic pizza with mozzarella cheese."
    },
    {
        id: 2,
        name: "Chicken Burger",
        category: "Burger",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        description: "Grilled chicken burger with fresh vegetables."
    },
    {
        id: 3,
        name: "Creamy Pasta",
        category: "Pasta",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
        description: "Creamy Alfredo pasta with herbs."
    },
    {
        id: 4,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80",
        description: "Pepperoni pizza topped with cheese."
    },
    {
        id: 5,
        name: "French Fries",
        category: "Burger",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
        description: "Crispy golden French fries."
    },
    {
        id: 6,
        name: "Cold Coffee",
        category: "Drink",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
        description: "Refreshing iced coffee."
    }
];

// Return all food items
export function getFoodItems() {
    return foodItems;
}

// Find a single food item by ID
export function getFoodById(id) {
    return foodItems.find(item => item.id === id);
}