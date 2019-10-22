# TextmagicClient.DoEmailLookupResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The email address passed to the call. | 
**status** | **String** | The email is &#x60;valid&#x60; or &#x60;invalid&#x60;. | 
**deliverability** | **String** | The delivery status of the email address is&#x60;deliverable&#x60;, &#x60;undeliverable&#x60;  or &#x60;unknown&#x60;. | 
**reason** | **String** | The reason why the checked email is invalid/undeliverable. | 
**risk** | **String** | The risk score of the email is&#x60;high&#x60;, &#x60;medium&#x60;, &#x60;low&#x60; or &#x60;null&#x60;. | 
**addressType** | **String** | The email address type (domain) is &#x60;free&#x60; or &#x60;corporate&#x60;. | 
**isDisposableAddress** | **Boolean** | This is be &#x60;true&#x60; if the domain is in the list of disposable email addresses, otherwise returns as &#x60;false&#x60;. | 
**suggestion** | **String** | Null if nothing is suggested, however, if there is a potential typo in the email address, the closest suggestion is provided. | 
**emailRole** | **String** | Checks the mailbox part of the email whether it matches a specific role type (‘admin’, ‘sales’, ‘webmaster’) | 
**localPart** | **String** | The local part of the email address. | 
**domainPart** | **String** | The domain part of the email address. | 
**exchange** | **String** | Email exchange server domain name (MX record value). | 
**preference** | **Number** | MX record preference. | 
**isInWhiteList** | **Boolean** | &#x60;true&#x60; if the email address exists in TextMagic whitelist.  | 
**isInBlackList** | **Boolean** | &#x60;true&#x60; if the email address exists in TextMagic blacklist.  | 
**hasMx** | **Boolean** | &#x60;true&#x60; if the email address domain has an MX record.  | 
**hasAa** | **Boolean** | &#x60;true&#x60; if the email address domain has an A record (IPv4).  | 
**hasAaaa** | **Boolean** | &#x60;true&#x60; if the email address domain has an AAAA record (IPv6).  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `invalid` (value: `"invalid"`)




<a name="RiskEnum"></a>
## Enum: RiskEnum


* `high` (value: `"high"`)

* `medium` (value: `"medium"`)

* `low` (value: `"low"`)

* `unknown` (value: `"unknown"`)




<a name="AddressTypeEnum"></a>
## Enum: AddressTypeEnum


* `corporate` (value: `"corporate"`)

* `free` (value: `"free"`)




