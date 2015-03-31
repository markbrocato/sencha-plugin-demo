/**
 * Created by mbrocato on 3/11/15.
 */
Ext.define('Demo.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    /**
     * @param {Ext.button.Button} component
     * @param {Event} e
     */
    closeDialog: function (component, e) {
        this.getView().close()
    }
});