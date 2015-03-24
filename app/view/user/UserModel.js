/**
 * Created by mbrocato on 3/11/15.
 */
Ext.define('Demo.view.user.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    links: {
        /*
        Links provide a way to assign a simple name to a more complex bind. The primary use for this is to assign names
        to records in the data model. For example:

        theUser: {
            type: 'User',
            id: 17
        }
        */
    },

    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'User',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});