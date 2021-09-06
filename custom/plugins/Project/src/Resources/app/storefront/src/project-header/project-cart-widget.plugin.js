import CartWidgetPlugin from 'src/plugin/header/cart-widget.plugin';
import Storage from 'src/helper/storage/storage.helper';

export default class ProjectCartWidgetPlugin extends CartWidgetPlugin {
    fetch() {
        this._client.get(window.router['frontend.checkout.info'] + '?_=' + new Date().getTime(), (response) => {
            Storage.setItem(this.options.cartWidgetStorageKey, response);
            this.el.innerHTML = response;

            this.$emitter.publish('fetch', {response});
        });
    }
}

