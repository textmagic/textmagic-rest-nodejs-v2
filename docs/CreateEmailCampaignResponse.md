# TextMagicClient.CreateEmailCampaignResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique campaign ID. | 
**status** | **String** | Current campaign status. | 
**emailSenderId** | **Number** | Email sender ID used for this campaign. | [optional] 
**startAt** | **Date** | Campaign start timestamp. | 
**createdBy** | [**UserPersonalInfo**](UserPersonalInfo.md) |  | 
**fromName** | **String** | Sender name displayed in recipient&#39;s inbox. | [optional] 
**fromEmail** | **String** | Sender email address. | 
**replyToEmail** | **String** | Reply-to email address. | 
**subject** | **String** | Email subject line. | 
**html** | **String** | HTML email content. | 
**cost** | **Number** | Total campaign cost. | 
**totals** | [**EmailCampaignStatisticTotals**](EmailCampaignStatisticTotals.md) |  | 
**outboundEmail** | [**OutboundEmailResponse**](OutboundEmailResponse.md) |  | [optional] 
**failedReason** | **String** | Reason for campaign failure if applicable. | [optional] 



## Enum: StatusEnum


* `idle` (value: `"idle"`)

* `sent` (value: `"sent"`)

* `in_progress` (value: `"in_progress"`)

* `failed` (value: `"failed"`)

* `delivered` (value: `"delivered"`)

* `rejected` (value: `"rejected"`)

* `error` (value: `"error"`)

* `scheduledError` (value: `"scheduledError"`)





## Enum: FailedReasonEnum


* `lowBalance` (value: `"lowBalance"`)

* `noRecipients` (value: `"noRecipients"`)

* `noEmailSender` (value: `"noEmailSender"`)

* `unhandled` (value: `"unhandled"`)




