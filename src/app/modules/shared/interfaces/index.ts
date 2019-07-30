export interface ActionButton {
    type: 'ref' | 'action';
    text: string;
    routerLink ? : string;
    onclick ? : (param ? : any) => any;
}
