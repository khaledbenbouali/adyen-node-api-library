/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';

export class SoleProprietorship {
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
    */
    'countryOfGoverningLaw': string;
    /**
    * The registered name, if different from the `name`.
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name.
    */
    'name': string;
    'principalPlaceOfBusiness'?: Address;
    'registeredAddress': Address;
    /**
    * The registration number.
    */
    'registrationNumber'?: string;
    /**
    * The reason for not providing a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: SoleProprietorship.VatAbsenceReasonEnum;
    /**
    * The VAT number.
    */
    'vatNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countryOfGoverningLaw",
            "baseName": "countryOfGoverningLaw",
            "type": "string"
        },
        {
            "name": "doingBusinessAs",
            "baseName": "doingBusinessAs",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "principalPlaceOfBusiness",
            "baseName": "principalPlaceOfBusiness",
            "type": "Address"
        },
        {
            "name": "registeredAddress",
            "baseName": "registeredAddress",
            "type": "Address"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "vatAbsenceReason",
            "baseName": "vatAbsenceReason",
            "type": "SoleProprietorship.VatAbsenceReasonEnum"
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SoleProprietorship.attributeTypeMap;
    }
}

export namespace SoleProprietorship {
    export enum VatAbsenceReasonEnum {
        IndustryExemption = <any> 'industryExemption',
        BelowTaxThreshold = <any> 'belowTaxThreshold'
    }
}
