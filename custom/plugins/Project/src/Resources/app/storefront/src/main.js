import ProjectCartWidgetPlugin from './project-header/project-cart-widget.plugin';

const PluginManager = window.PluginManager;
// // Register your plugin via the existing PluginManager
// PluginManager.override('AddToCart', ProjectAddToCartPlugin, '[data-add-to-cart]');
PluginManager.override('CartWidget', ProjectCartWidgetPlugin, '[data-cart-widget]');
