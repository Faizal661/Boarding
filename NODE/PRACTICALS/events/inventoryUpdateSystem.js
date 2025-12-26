
// 💡 Question 1: The Inventory Update System (Basic on and emit)

// A small e-commerce service needs to automatically notify 
// the warehouse and marketing teams whenever a new product is added to the system.

// Scenario:

// Create an EventEmitter instance named inventorySystem.
// Register two listeners for the event 'productAdded':
// warehouseListener: Prints a message indicating the product needs to be shelved.
// marketingListener: Prints a message indicating an ad campaign should be prepared.
// Emit the event 'productAdded' and pass the product name "Bluetooth Headphones" as data.

// Goal: Write the code and predict the output.

import EventEmitter from "events";

const inventorySystem= new EventEmitter()

const warehouseListener=(productName)=>{
    console.log(`new product "${productName}" is needs to be shelved!.`)
}
const marketingListener=(productName)=>{
    console.log(`an ad campaign should be prepared for the new product "${productName}" !.`)
}

inventorySystem.on('productAdded',warehouseListener)
inventorySystem.on('productAdded',marketingListener)

inventorySystem.emit('productAdded',"Bluetooth Headphones")