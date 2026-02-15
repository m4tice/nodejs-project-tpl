/**
 * Renderer Process - Frontend Logic
 * 
 * This file runs in the renderer process and handles UI interactions.
 * It has access to the DOM and the secure API exposed via preload.js.
 * 
 * Note: Do NOT use require() or require('electron') directly here.
 * Use only DOM APIs and the api object exposed from preload.js.
 */

// Access the preload API (if defined in preload.js)
// Example: window.api.ping()

/**
 * Add your frontend logic here
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Renderer process loaded');
    // Initialize your app here
});
