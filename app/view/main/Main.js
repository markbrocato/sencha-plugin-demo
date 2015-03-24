/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.view.main.Main', {
    requires: [
        'Ext.layout.container.Fit',
        'Demo.view.main.MainController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Demo.view.main.MainModel'
    ],
    extend: 'Ext.panel.Panel',

    layout: {
        type: 'fit'
    },
    
    controller: 'main',
    viewModel: 'main',

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'New User'
        }, {
            xtype: 'button',
            text: 'Test',
            handler: 'onTestClick'
        }]
    }],

    items: [{
        xtype: 'grid',
        bind: {
            store: '{users}'
        },
        columns: [{
            text: 'Email',
            width: 200,
            dataIndex: 'email'
        }, {
            text: 'Name',
            width: 200,
            dataIndex: 'name'
        }, {
            text: 'Gender',
            dataIndex: 'gender',
            flex: 1
        }],

        listeners: {
            itemclick: 'onItemClick'
        }
    }]
});
