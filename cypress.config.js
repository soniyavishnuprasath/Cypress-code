const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,
   // defaultCommandTimeout :1000,
   // requestTimeout :15000,
   // responseTimeout:15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
         
  },
  
});
