import ProjectPlugin from './project/project.plugin';
import ProjectCartWidgetPlugin from './project-header/project-cart-widget.plugin';

const PluginManager = window.PluginManager;
// // Register your plugin via the existing PluginManager
PluginManager.register('ProjectPlugin', ProjectPlugin);

// Override/Extend Plugin
PluginManager.override('CartWidget', ProjectCartWidgetPlugin, '[data-cart-widget]');
