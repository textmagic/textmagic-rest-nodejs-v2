# TextmagicClient.SendMessageInputObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | Message text. Required if the **template_id** is not set. | [optional] 
**templateId** | **Number** | Template used instead of message text. Required if the **text** is not set. | [optional] 
**sendingTime** | **Number** | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now. | [optional] 
**sendingDateTime** | **String** | Sending time in Y-m-d H:i:s format (e.g. 2022-05-27 13:05:10). This time is relative to **sendingTimezone**. Note: for correct operation, the value of seconds must not be less than 10. | [optional] 
**sendingTimezone** | **String** | ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone. | [optional] 
**contacts** | **String** | Comma separated array of contact resources id message will be sent to. | [optional] 
**lists** | **String** | Comma separated array of list resources id message will be sent to. | [optional] 
**phones** | **String** | Comma separated array of E.164 phone numbers message will be sent to. | [optional] 
**cutExtra** | **Boolean** | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to false]
**partsCount** | **Number** | Maximum message parts count (Textmagic allows sending 1 to 6 message parts). | [optional] 
**referenceId** | **Number** | Custom message reference id which can be used in your application infrastructure. | [optional] 
**from** | **String** | One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
**rrule** | **String** | iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
**createChat** | **Boolean** | Should sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to false]
**tts** | **Boolean** | Send a Text-to-Speech message. | [optional] [default to false]
**local** | **Boolean** | Treat phone numbers passed in the \\'phones\\' field as local. | [optional] [default to false]
**localCountry** | **String** | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country. | [optional] 
**destination** | **String** | Messsage destination type allowed [mms, tts]. | [optional] 
**resources** | **String** | File name from mms attachment response (named as resource) | [optional] 


