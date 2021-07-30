/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class ThreeDSecureData {
    /**
    * In 3D Secure 1, the authentication response if the shopper was redirected.  In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.
    */
    'authenticationResponse'?: ThreeDSecureData.AuthenticationResponseEnum;
    /**
    * The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
    */
    'cavv'?: string;
    /**
    * The CAVV algorithm used. Include this only for 3D Secure 1.
    */
    'cavvAlgorithm'?: string;
    'challengeCancel'?: string;
    /**
    * In 3D Secure 1, this is the enrollment response from the 3D directory server.  In 3D Secure 2, this is the `transStatus` from the `ARes`.
    */
    'directoryResponse'?: ThreeDSecureData.DirectoryResponseEnum;
    /**
    * Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.
    */
    'dsTransID'?: string;
    /**
    * The electronic commerce indicator.
    */
    'eci'?: string;
    'riskScore'?: string;
    /**
    * The version of the 3D Secure protocol.
    */
    'threeDSVersion'?: string;
    'transStatusReason'?: string;
    /**
    * Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form).
    */
    'xid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationResponse",
            "baseName": "authenticationResponse",
            "type": "ThreeDSecureData.AuthenticationResponseEnum"
        },
        {
            "name": "cavv",
            "baseName": "cavv",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavvAlgorithm",
            "type": "string"
        },
        {
            "name": "challengeCancel",
            "baseName": "challengeCancel",
            "type": "string"
        },
        {
            "name": "directoryResponse",
            "baseName": "directoryResponse",
            "type": "ThreeDSecureData.DirectoryResponseEnum"
        },
        {
            "name": "dsTransID",
            "baseName": "dsTransID",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "riskScore",
            "baseName": "riskScore",
            "type": "string"
        },
        {
            "name": "threeDSVersion",
            "baseName": "threeDSVersion",
            "type": "string"
        },
        {
            "name": "transStatusReason",
            "baseName": "transStatusReason",
            "type": "string"
        },
        {
            "name": "xid",
            "baseName": "xid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSecureData.attributeTypeMap;
    }
}

export namespace ThreeDSecureData {
    export enum AuthenticationResponseEnum {
        Y = <any> 'Y',
        N = <any> 'N',
        U = <any> 'U',
        A = <any> 'A'
    }
    export enum DirectoryResponseEnum {
        A = <any> 'A',
        C = <any> 'C',
        D = <any> 'D',
        I = <any> 'I',
        N = <any> 'N',
        R = <any> 'R',
        U = <any> 'U',
        Y = <any> 'Y'
    }
}
