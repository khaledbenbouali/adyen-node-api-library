/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountInfo } from './bankAccountInfo';
import { DocumentReference } from './documentReference';
import { RecurringDetail } from './recurringDetail';

export class TransferInstrument {
    'bankAccount'?: BankAccountInfo;
    /**
    * List of documents uploaded for the transfer instrument.
    */
    'documentDetails'?: Array<DocumentReference>;
    /**
    * The unique identifier of the transfer instrument.
    */
    'id': string;
    /**
    * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the transfer instrument.
    */
    'legalEntityId': string;
    'recurringDetail'?: RecurringDetail;
    /**
    * The type of transfer instrument.  Possible values: **bankAccount**, **recurringDetail**.
    */
    'type': TransferInstrument.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "BankAccountInfo"
        },
        {
            "name": "documentDetails",
            "baseName": "documentDetails",
            "type": "Array<DocumentReference>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "recurringDetail",
            "baseName": "recurringDetail",
            "type": "RecurringDetail"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferInstrument.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransferInstrument.attributeTypeMap;
    }
}

export namespace TransferInstrument {
    export enum TypeEnum {
        BankAccount = <any> 'bankAccount',
        RecurringDetail = <any> 'recurringDetail'
    }
}
