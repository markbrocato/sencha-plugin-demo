/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.MainController', {
    uses: [
        'Ext.container.Container'
    ],
    requires: [
        'Demo.view.user.User',
    ],
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onTestClick: function() {
        Ext.container.Container.create()
    },

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onItemClick: function (component, record, item, index, e) {
        Ext.create('Demo.view.user.User', {record: record}).show()
    }
});
