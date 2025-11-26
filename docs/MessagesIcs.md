# TextMagicClient.MessagesIcs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Schedule ID. | 
**nextSend** | **Date** | The next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format.  | 
**rrule** | **String** | [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.  | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**lastSent** | **Date** | The date and time when the last message was sent. | 
**contactName** | **String** | Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned. | 
**parameters** | [**MessagesIcsParameters**](MessagesIcsParameters.md) |  | 
**type** | **String** |  | 
**summary** | **String** | A human-readable summary of the sending schedule. | 
**textParameters** | [**MessagesIcsTextParameters**](MessagesIcsTextParameters.md) |  | 
**firstOccurrence** | **Date** | First occurence date. | 
**lastOccurrence** | **Date** | Last occurence date (could be &#x60;null&#x60; if the schedule is endless). | 
**recipientsCount** | **Number** | Amount of actual recipients. | 
**timezone** | **String** | User-friendly timezone name (with spaces replaced by underscores). | 
**completed** | **Boolean** | Indicates that scheduling has been completed. | 
**avatar** | **String** | A relative link to the contact avatar. | 
**createdAt** | **Date** | Scheduling creation time. | 



## Enum: TypeEnum


* `Once` (value: `"Once"`)

* `Hourly` (value: `"Hourly"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)

* `Yearly` (value: `"Yearly"`)




