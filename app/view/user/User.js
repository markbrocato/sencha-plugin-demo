Ext.define('Demo.view.user.User', {
    extend: 'Ext.window.Window',

    config: {
        viewModel: 'user',
        controller: 'user',
        title: 'Edit User',
        modal: true,

        layout: {
            type: 'anchor'
        },

        buttons: [{
            xtype: 'button',
            text: 'Save',
            handler: 'closeDialog'
        }, {
            xtype: 'button',
            text: 'Cancel',
            handler: 'closeDialog'
        }],

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Email',
            labelAlign: 'right',
            bind: '{user.email}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            labelAlign: 'right',
            bind: '{user.name}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Gender',
            labelAlign: 'right',
            bind: '{user.gender}'
        }]
    }
});