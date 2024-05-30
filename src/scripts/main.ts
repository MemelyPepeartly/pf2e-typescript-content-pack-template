import { registerSettings } from "./module/settings";


// When initializing the module
Hooks.once('init', () => {
    registerSettings();
});

// When getting the scene control buttons
Hooks.on("getSceneControlButtons", (controls: SceneControl[]) => {
});

// When rendering the compendium directory
Hooks.on("renderCompendiumDirectory", (app, html, data) => {
});

// When rendering compendium window
Hooks.on("renderCompendium", async (app, html, data) => {
});

// When rendering an actor sheet
Hooks.on('renderActorSheet', (app, html, data) => {
});
  
Hooks.on("renderItemSheet", (app, html, data) => {
});