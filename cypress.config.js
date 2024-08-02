const { defineConfig } = require("cypress");

// Import the accessibility tasks from wick-a11y plugin
const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  projectId: '6se99s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addAccessibilityTasks(on);
    },
  },
});
