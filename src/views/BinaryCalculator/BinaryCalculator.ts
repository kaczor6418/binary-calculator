import { CONSTANTS } from '../../common/CONSTANTS';
import { KKWebComponent } from '../../components/KKWebComponent/KKWebComponent';
import { binaryCalculatorStyles } from './BinaryCalcuatorStyles';
import { IconId } from '../../common/IconDefinitions/IconId';
import { IconSize } from '../../components/Icon/interfaces/IconSize';
import { TextFieldSize } from '../../components/TextField/interface/TextFieldSize';
import { TTextField } from '../../components/TextField/interface/TTextField';
import { InputTextFieldListenerProps } from '../../components/TextField/interface/TextFieldListenerProps';

const template: string = `
<style>${binaryCalculatorStyles}</style>
<main>
  <kk-app-header>
    <kk-icon slot="prepend" icon-id="${IconId.LOGO}" icon-size="${IconSize.L}"></kk-icon>
    <kk-heading slot="center"><strong>Binary calculator</strong></kk-heading>
    <kk-icon slot="append" icon-id="${IconId.GITHUB}" icon-size="${IconSize.L}" href="https://github.com/kaczor6418/binary-calculator" ></kk-icon>
  </kk-app-header>
  <kk-app-body>
    <kk-text-field placeholder="Type expression..." size=${TextFieldSize.L}></kk-text-field>
  </kk-app-body>
  <kk-app-footer></kk-app-footer>
</main>
`;

export class BinaryCalculator extends KKWebComponent {
    public static TAG: string = `${CONSTANTS.TAG_PREFIX}-binary-calculator`;

    public readonly shadowRoot!: ShadowRoot;

    private textField!: TTextField;

    constructor() {
        super(template);
        this.getElementsReferences();
        this.setUpElements();
    }

    protected getElementsReferences(): void {
        this.textField = <TTextField>(<unknown>this.shadowRoot.querySelector('kk-text-field'));
    }

    protected setUpElements(): void {
        const callbackProps: InputTextFieldListenerProps = {
            eventName: 'input',
            callback: () => console.log(this.textField.value),
        };
        this.textField.setTextFieldInputListener(callbackProps);
    }
}

customElements.define(BinaryCalculator.TAG, BinaryCalculator);
