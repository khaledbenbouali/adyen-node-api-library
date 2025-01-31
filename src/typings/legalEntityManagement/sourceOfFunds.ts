/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SourceOfFunds {
    /**
    * The unique identifier of the business line that will be the source of funds.This must be a business line for a **receivePayments** or **receiveFromPlatformPayments** capability. Required when `adyenProcessedFunds` is **true**.
    */
    'acquiringBusinessLineId'?: string;
    /**
    * Indicates whether the funds are coming from transactions processed by Adyen.   - If **true**, the `acquiringBusinessLineId` is required.   - If **false**, a `description` is required.
    */
    'adyenProcessedFunds'?: boolean;
    /**
    * Text describing the source of funds. For example, for `type` **business**, provide a description of the business. Required when `adyenProcessedFunds` is **false**.
    */
    'description'?: string;
    /**
    * The type of the source of funds. Possible value: **business**.
    */
    'type'?: SourceOfFunds.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquiringBusinessLineId",
            "baseName": "acquiringBusinessLineId",
            "type": "string"
        },
        {
            "name": "adyenProcessedFunds",
            "baseName": "adyenProcessedFunds",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SourceOfFunds.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SourceOfFunds.attributeTypeMap;
    }
}

export namespace SourceOfFunds {
    export enum TypeEnum {
        Business = <any> 'business'
    }
}
