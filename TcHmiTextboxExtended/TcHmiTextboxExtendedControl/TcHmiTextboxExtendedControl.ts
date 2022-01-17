/*
 * Generated 9/13/2021 2:45:58 PM
 * Copyright (C) 2021
 */


//References
///<reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiTextbox/TcHmiTextbox.d.ts" />
///<reference path="../.hmiframework/TcHmi.d.ts" />


module TcHmi {
    export module Controls {
        export module TcHmiTextboxExtended {
            export class TcHmiTextboxExtendedControl extends TcHmi.Controls.Beckhoff.TcHmiTextbox {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot: JQuery;
                protected __elementInputContainer: JQuery;
                protected __elementInputField: JQuery;
                protected __password?: boolean;
                protected __focusOut?: boolean;

                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Beckhoff_TcHmiTextbox-template');
                    this.__elementInputContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Beckhoff_TcHmiTextbox-template-input-container');
                    this.__elementInputField = this.__elementTemplateRoot.find(".tchmi-textbox-template-input");
                    // Call __previnit of base class
                    super.__previnit();

                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */

                    //reference to this for other scopes
                    var $this = this;

                    //add event listener for keydown
                    this.__elementInputContainer.on('keydown', function (e) {
                        $this.__keyDownHandler(e, $this);
                    });

                    $this.__processPassword();

                }

                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    //remove event listener for keydown
                    this.__elementInputContainer.off('keydown');
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                /**
                 * OVERRIDE: setText
                 * @function
                 */
                protected __setText(valueNew: string | null | undefined, process?: boolean): void {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    if (convertedValue === null)
                        convertedValue = this.getAttributeDefaultValueInternal("Text")

                    if (convertedValue !== this.__text)
                        this.__text = convertedValue;

                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", { propertyName: "Text" });
                    TcHmi.EventProvider.raise(this.__id + ".onTextChanged", this.__text);
                    this.__processText();
                }

                /**
                 * OVERRIDE: processText
                 * @function
                 */
                protected __processText(): void {
                    if (void 0 === this.__text) return;
                    if (!this.__elementInputField || 0 === this.__elementInputField.length) return;

                    // @ts-ignore
                    this.__elementInputField[0].value = this.__text;
                }

                /**
                 * Processes the Key down handler.
                 * @function
                 */
                protected __keyDownHandler(e: any, $this: this): void {
                    //check if the pressed key was the enter key
                    if (e.which === 13) {
                        //raise event
                        TcHmi.EventProvider.raise($this.getId() + '.onEnterPressed');
                        if (this.__focusOut)
                            $(this.__elementInputField).blur();
                    }
                }

                /**
                * Sets the value of Password
                * @param valueNew The new value for Password
                */
                public setPassword(valueNew: boolean) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("Password");
                    }

                    //save the new value
                    this.__password = convertedValue;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getPassword"]);

                    //Process the new Value
                    this.__processPassword();
                }

                /**
                 * Gets the value of Password
                 * @returns The current value of Password
                 */
                getPassword(): boolean | undefined {
                    return this.__password;
                }

                /**
                 * Processes the Password.
                 * @function
                 */
                protected __processPassword(): void {
                    if (!this.__elementInputField)
                        return;

                    //Set the property attribute on the control
                    if (this.__password)
                        this.__elementInputField.prop('type', 'password');
                    else
                        this.__elementInputField.prop('type', 'text');

                }

                /**
                 * Gets the value of FocusOut
                 * @returns The current value of FocusOut
                */
                getFocusOut(): boolean | undefined {
                    return this.__focusOut;
                }

                /**
                 * Sets the value of FocusOut
                 * @param valueNew The new value for FocusOut
                 */
                public setFocusOut(valueNew: boolean) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("FocusOutAfterEnter");
                    }

                    //save the new value
                    this.__focusOut = convertedValue;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getFocusOut"]);
                }

            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiTextboxExtended', 'TcHmi.Controls.TcHmiTextboxExtended', TcHmi.Controls.TcHmiTextboxExtended.TcHmiTextboxExtendedControl);
