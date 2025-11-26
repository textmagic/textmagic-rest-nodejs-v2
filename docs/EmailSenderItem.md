# TextMagicClient.EmailSenderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique email sender identifier. | 
**domainId** | **Number** | ID of the associated domain. | 
**email** | **String** | Email address of the sender. | 
**createdAt** | **Date** | When the email sender was created. | 
**domainStatus** | **String** | Current verification status of the associated domain. | 
**fromName** | **String** | Display name for the sender. | [optional] 
**replyTo** | **String** | Reply-to email address. | [optional] 



## Enum: DomainStatusEnum


* `not_verified` (value: `"not_verified"`)

* `pending` (value: `"pending"`)

* `manual_review` (value: `"manual_review"`)

* `rejected` (value: `"rejected"`)

* `verified` (value: `"verified"`)




