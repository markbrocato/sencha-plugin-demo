/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Demo.model.User'
    ],

    stores: {
        users: {
            model: 'User',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/resources/users.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});