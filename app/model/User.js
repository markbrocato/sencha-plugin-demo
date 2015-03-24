/**
 * A user model
 */
Ext.define('Demo.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'gender', type: 'string' }
    ],
    schema: {
        namespace: 'Demo.model'
    }
});