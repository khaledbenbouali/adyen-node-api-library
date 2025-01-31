/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Attachment {
    /**
    * The document in Base64-encoded string format.
    */
    'content': string;
    /**
    * The file format.   Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. 
    */
    'contentType'?: string;
    /**
    * The name of the file including the file extension.
    */
    'filename'?: string;
    /**
    * The name of the file including the file extension.
    */
    'pageName'?: string;
    /**
    * Specifies which side of the ID card is uploaded.  * When `type` is **driversLicense**, set this to **front** or **back**.  * When omitted, we infer the page number based on the order of attachments.
    */
    'pageType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string"
        },
        {
            "name": "pageType",
            "baseName": "pageType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}

