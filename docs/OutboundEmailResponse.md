# TextmagicClient.OutboundEmailResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Outbound email ID. | 
**sendTime** | **Date** | Email send timestamp. | 
**fromName** | **String** | Sender name. | [optional] 
**fromEmail** | **String** | Sender email address. | 
**replyToEmail** | **String** | Reply-to email address. | 
**recipientFullName** | **String** | Recipient's full name. | [optional] 
**recipientEmail** | **String** | Recipient's email address. | [optional] 
**emailSubject** | **String** | Email subject line. | 
**emailContent** | **String** | HTML email content. | 
**source** | **String** | Source of the outbound email. | 
**status** | **String** | Current email status. | 
**cost** | **Number** | Cost of sending this email. | 
**statusReason** | **String** | Detailed status reason. | [optional] 
**contactId** | **Number** | Associated contact ID. | [optional] 
**initiatorId** | **Number** | ID of user who initiated the email. | 


<a name="SourceEnum"></a>
## Enum: SourceEnum


* `emailCampaign` (value: `"emailCampaign"`)

* `ticket` (value: `"ticket"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `sent` (value: `"sent"`)

* `delivered` (value: `"delivered"`)

* `rejected` (value: `"rejected"`)

* `failed` (value: `"failed"`)

* `opened` (value: `"opened"`)

* `clicked` (value: `"clicked"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `spam` (value: `"spam"`)




