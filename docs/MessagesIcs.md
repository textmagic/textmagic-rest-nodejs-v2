# TextmagicClient.MessagesIcs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Schedule ID. | 
**nextSend** | **Date** | Next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format.  | 
**rrule** | **String** | [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.  | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**lastSent** | **Date** | Date and time when last message has been sent. | 
**contactName** | **String** | Aggregated contact information. If the message scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount contacts will be returned. | 
**parameters** | [**MessagesIcsParameters**](MessagesIcsParameters.md) |  | 
**type** | **String** |  | 
**summary** | **String** | A human-readable summary of the sending schedule. | 
**textParameters** | [**MessagesIcsTextParameters**](MessagesIcsTextParameters.md) |  | 
**firstOccurrence** | **Date** | First occurence date. | 
**lastOccurrence** | **Date** | Last occurence date (could be &#x60;null&#x60; if the schedule is endless). | 
**recipientsCount** | **Number** | Amount of actual recipients. | 
**timezone** | **String** | User-friendly timezone name (with spaces replaced by underscores). | 
**completed** | **Boolean** | Indicates that schedling has been completed. | 
**avatar** | **String** | A relative link to the contact avatar. | 
**createdAt** | **Date** | Scheduling creation time. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Once` (value: `"Once"`)

* `Hourly` (value: `"Hourly"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)

* `Yearly` (value: `"Yearly"`)




