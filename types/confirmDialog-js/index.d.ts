// Type definitions for jquery-confirm v3.3.0 https://craftpip.github.io/jquery-confirm/
// Project: https://github.com/IonicaBizau/node-abs
// Definitions by: Alli Pierre Yotti <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace $ {

    interface confirmOptions {
            buttons? : buttonOptionss | any,
            title? : string,
            content?  : string,
            onContentReady?:Function
    }

    interface buttonOptionss {
            cancel? : Function,
            confirm? : Function
    }

    /**
     * confirm Dialog
     * @param {confirmOptions} pOtions
     */
    function confirm( pOtions: confirmOptions): boolean | void;

    /**
     * confirm alert
     * @param {any} pMessage
     */
    function alert( pMessage: any):  void;

    /**
     * confirm Dialog
     * @param {any} pMessage
     */
    function dialog( pOtions: confirmOptions):  void;



}
