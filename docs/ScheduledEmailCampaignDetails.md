# TextMagicClient.ScheduledEmailCampaignDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique scheduled campaign ID. | 
**status** | **String** | Current scheduled campaign status. | 
**emailSenderId** | **Number** | Email sender ID used for this campaign. | [optional] 
**startAt** | **Date** | Scheduled start timestamp (UTC). | 
**endAt** | **Date** | End timestamp for recurring campaigns (UTC). | [optional] 
**nextSendAt** | **Date** | Next scheduled send timestamp (UTC). | [optional] 
**createdBy** | [**UserPersonalInfo**](UserPersonalInfo.md) |  | 
**createdAt** | **Date** | Campaign creation timestamp. | 
**updatedAt** | **Date** | Last update timestamp. | 
**type** | **String** | Campaign recurrence type. | 
**fromName** | **String** | Sender name displayed in recipient&#39;s inbox. | [optional] 
**fromEmail** | **String** | Sender email address. | 
**replyToEmail** | **String** | Reply-to email address. | 
**subject** | **String** | Email subject line. | 
**html** | **String** | HTML email content. | 
**recipientsCount** | **Number** | Number of recipients for this campaign. | 
**sendingTimezone** | **String** | Timezone for sending the campaign. | 
**rrule** | **String** | RFC 5545 recurrence rule for recurring campaigns. | [optional] 
**occurrenceSummary** | **String** | Human-readable schedule description. | [optional] 



## Enum: StatusEnum


* `scheduled` (value: `"scheduled"`)

* `active` (value: `"active"`)

* `paused` (value: `"paused"`)

* `completed` (value: `"completed"`)

* `cancelled` (value: `"cancelled"`)

* `failed` (value: `"failed"`)





## Enum: TypeEnum


* `once` (value: `"once"`)

* `hourly` (value: `"hourly"`)

* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `yearly` (value: `"yearly"`)

* `follow-up` (value: `"follow-up"`)




