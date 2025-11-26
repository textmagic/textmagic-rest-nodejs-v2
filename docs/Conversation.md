# TextMagicClient.Conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**direction** | **String** | Message type: inbound or outbound.  | 
**sender** | **String** | Sender phone number. | 
**messageTime** | **Date** | Time when  the message arrived at Textmagic. | 
**text** | **String** | Message text. | 
**receiver** | **String** | Receiver&#39;s phone number. | 
**status** | **String** | Message status (for chats outbound only). See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. | 
**firstName** | **String** | Contact first name. | 
**lastName** | **String** | Contact last name. | 
**sessionId** | **Number** | Session ID of a message. See [message sessions](https://docs.textmagic.com/#tag/Outbound-Message-Sessions) for details. | 
**initiatorId** | **Number** | Initiator ID of a message. See [message sessions](https://docs.textmagic.com/#tag/Outbound-Message-Sessions) for details. | [optional] 
**messageFileId** | **Number** | Message file id. | [optional] 
**type** | **String** | Message type. | [optional] 
**chatType** | **String** | Chat type. | [optional] 
**chatId** | **Number** | Chat id. | [optional] 
**isEdited** | **Boolean** |  | [optional] 
**errorCode** | **String** | Error code. | [optional] 
**files** | **[File]** |  | [optional] 
**payload** | [**MessagePayload**](MessagePayload.md) |  | [optional] 
**avatar** | **String** |  | [optional] 



## Enum: DirectionEnum


* `in` (value: `"in"`)

* `out` (value: `"out"`)

* `o` (value: `"o"`)

* `i` (value: `"i"`)





## Enum: TypeEnum


* `text` (value: `"text"`)

* `image` (value: `"image"`)

* `audio` (value: `"audio"`)

* `voice` (value: `"voice"`)

* `document` (value: `"document"`)

* `video` (value: `"video"`)

* `log` (value: `"log"`)

* `initial` (value: `"initial"`)

* `note` (value: `"note"`)





## Enum: ChatTypeEnum


* `sms` (value: `"sms"`)

* `facebook_messenger` (value: `"facebook_messenger"`)

* `instagram` (value: `"instagram"`)

* `whatsapp_business` (value: `"whatsapp_business"`)

* `live_chat` (value: `"live_chat"`)




