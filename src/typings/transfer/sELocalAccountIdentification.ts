/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SELocalAccountIdentification {
    /**
    * The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)) (without the clearing number, separators, or whitespace).
    */
    'accountNumber': string;
    /**
    * The 4– to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)) (without separators or whitespace).
    */
    'clearingNumber': string;
    /**
    * **seLocal**
    */
    'type'?: SELocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "clearingNumber",
            "baseName": "clearingNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SELocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SELocalAccountIdentification.attributeTypeMap;
    }
}

export namespace SELocalAccountIdentification {
    export enum TypeEnum {
        SeLocal = <any> 'seLocal'
    }
}
