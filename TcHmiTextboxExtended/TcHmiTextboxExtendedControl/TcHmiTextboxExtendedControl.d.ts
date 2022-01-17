/// <reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiTextbox/TcHmiTextbox.d.ts" />
/// <reference path="../.hmiframework/TcHmi.d.ts" />
declare module TcHmi {
    module Controls {
        module TcHmiTextboxExtended {
            class TcHmiTextboxExtendedControl extends TcHmi.Controls.Beckhoff.TcHmiTextbox {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementInputContainer: JQuery;
                protected __elementInputField: JQuery;
                protected __password?: boolean;
                protected __focusOut?: boolean;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                 * OVERRIDE: setText
                 * @function
                 */
                protected __setText(valueNew: string | null | undefined, process?: boolean): void;
                /**
                 * OVERRIDE: processText
                 * @function
                 */
                protected __processText(): void;
                /**
                 * Processes the Key down handler.
                 * @function
                 */
                protected __keyDownHandler(e: any, $this: this): void;
                /**
                * Sets the value of Password
                * @param valueNew The new value for Password
                */
                setPassword(valueNew: boolean): void;
                /**
                 * Gets the value of Password
                 * @returns The current value of Password
                 */
                getPassword(): boolean | undefined;
                /**
                 * Processes the Password.
                 * @function
                 */
                protected __processPassword(): void;
                /**
                 * Gets the value of FocusOut
                 * @returns The current value of FocusOut
                */
                getFocusOut(): boolean | undefined;
                /**
                 * Sets the value of FocusOut
                 * @param valueNew The new value for FocusOut
                 */
                setFocusOut(valueNew: boolean): void;
            }
        }
    }
}
