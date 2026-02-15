const { contextBridge } = require('electron');

/**
 * Expose a minimal, secure API to the renderer process via contextBridge.
 * This allows the renderer to safely call main process functions without
 * enabling full nodeIntegration.
 */
contextBridge.exposeInMainWorld('api', {
    // Example: Expose a simple function
    ping: () => 'pong',

    // Add your custom API methods here
});
