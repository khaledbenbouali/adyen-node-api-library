/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TerminalActionScheduleDetail {
    'id'?: string;
    'terminalId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "terminalId",
            "baseName": "terminalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalActionScheduleDetail.attributeTypeMap;
    }
}

