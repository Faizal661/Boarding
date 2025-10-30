// A global/internal map to track objects already cloned during this operation
const TRANSFER_MAP = new Map(); 

function structuredClone(original) {
    // 1. Base Case: Check for primitive types and return them directly
    if (typeof original !== 'object' || original === null) {
        return original;
    }

    // 2. Circularity Check (The Core of Deep Cloning)
    if (TRANSFER_MAP.has(original)) {
        // If the original object is found, return the clone we've already started creating
        return TRANSFER_MAP.get(original);
    }
    
    // 3. Create the New Clone Container
    let clone;
    if (Array.isArray(original)) {
        clone = [];
    } else if (original.constructor === Map) {
        clone = new Map();
    } else if (original.constructor === Set) {
        clone = new Set();
    } else if (original.constructor === Date) {
        // Special Handling for built-in classes
        clone = new Date(original.getTime());
    } else if (original.constructor === RegExp) {
        // Special Handling for built-in classes
        clone = new RegExp(original.source, original.flags);
    } else if (original.constructor === Object) {
        clone = {};
    } else {
        // If the type cannot be cloned (e.g., a function or DOM Node)
        throw new DataCloneError("Type cannot be cloned.");
    }
    
    // 4. Register the new clone BEFORE copying properties
    TRANSFER_MAP.set(original, clone);
    
    // 5. Recursive Property Copy
    if (clone instanceof Map) {
        // Handle Map entries recursively
        for (const [key, value] of original.entries()) {
            clone.set(structuredClone(key), structuredClone(value));
        }
    } else if (clone instanceof Set) {
        // Handle Set entries recursively
        for (const value of original.values()) {
            clone.add(structuredClone(value));
        }
    } else {
        // Handle regular object properties recursively
        for (const key in original) {
            // Recursive call for each property value
            clone[key] = structuredClone(original[key]);
        }
    }

    return clone;
}

// NOTE: In a real implementation, the TRANSFER_MAP is cleared or scoped 
//       after the top-level call finishes.