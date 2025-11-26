# TextMagicClient.TextMagicApi

All URIs are relative to *https://rest.textmagic.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignContactsToList**](TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to a list
[**blockContact**](TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block a contact by phone number
[**buyDedicatedNumber**](TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number
[**clearAndAssignContactsToList**](TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts
[**closeChatsBulk**](TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats (bulk)
[**closeReadChats**](TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close read chats
[**createContact**](TextMagicApi.md#createContact) | **POST** /api/v2/contacts/normalized | Add a new contact
[**createContactNote**](TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note
[**createCustomField**](TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Add a new custom field
[**createEmailCampaign**](TextMagicApi.md#createEmailCampaign) | **POST** /api/v2/email-campaigns | Send email campaign
[**createList**](TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list
[**createTag**](TextMagicApi.md#createTag) | **POST** /api/v2/tags | Create tag
[**createTemplate**](TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a template
[**deleteAllContacts**](TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete contacts (bulk)
[**deleteAllOutboundMessages**](TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
[**deleteAvatar**](TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar
[**deleteChatMessages**](TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete chat messages by ID(s)
[**deleteChatsBulk**](TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats (bulk)
[**deleteContact**](TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a contact
[**deleteContactAvatar**](TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar
[**deleteContactNote**](TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a contact note
[**deleteContactNotesBulk**](TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact notes (bulk)
[**deleteContactsByIds**](TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contacts by IDs (bulk)
[**deleteContactsFromList**](TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from a list
[**deleteCustomField**](TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a custom field
[**deleteDedicatedNumber**](TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel a dedicated number subscription
[**deleteInboundMessage**](TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete a single inbound message
[**deleteInboundMessagesBulk**](TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages (bulk)
[**deleteList**](TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a list
[**deleteListAvatar**](TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for a list
[**deleteListContactsBulk**](TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contacts from a list (bulk)
[**deleteListsBulk**](TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete lists (bulk)
[**deleteMessageSession**](TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a session
[**deleteMessageSessionsBulk**](TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete sessions (bulk)
[**deleteOutboundMessage**](TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
[**deleteOutboundMessagesBulk**](TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages (bulk)
[**deleteScheduledMessage**](TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a single scheduled message
[**deleteScheduledMessagesBulk**](TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages (bulk)
[**deleteSenderId**](TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID
[**deleteTemplate**](TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a template
[**deleteTemplatesBulk**](TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete templates (bulk)
[**doCarrierLookup**](TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
[**doEmailLookup**](TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Email Lookup
[**getAllBulkSessions**](TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sessions
[**getAllChats**](TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all chats
[**getAllInboundMessages**](TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbound messages
[**getAllMessageSessions**](TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all sessions
[**getAllOutboundMessages**](TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
[**getAllScheduledMessages**](TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages
[**getAllTemplates**](TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all templates
[**getAvailableDedicatedNumbers**](TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find dedicated numbers available for purchase
[**getAvailableSenderSettingOptions**](TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get available sender settings
[**getBalanceNotificationOptions**](TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
[**getBalanceNotificationSettings**](TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
[**getBlockedContacts**](TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts
[**getBulkSession**](TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk session status
[**getCallbackSettings**](TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
[**getChat**](TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat
[**getChatByPhone**](TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone
[**getChatMessages**](TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Get chat messages
[**getContact**](TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get the details of a specific contact
[**getContactByPhone**](TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get the details of a specific contact by phone number
[**getContactIfBlocked**](TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check if a phone number is blocked
[**getContactImportSessionProgress**](TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Check import progress
[**getContactNote**](TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a contact note
[**getContactNotes**](TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to a given contact
[**getContacts**](TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all contacts
[**getContactsAutocomplete**](TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions
[**getContactsByListId**](TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Get all contacts in a list
[**getCountries**](TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Get countries
[**getCurrentUser**](TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current account information
[**getCustomField**](TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get the details of a specific custom field
[**getCustomFields**](TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all custom fields
[**getDedicatedNumber**](TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get the details of a specific dedicated number
[**getEmailSenders**](TextMagicApi.md#getEmailSenders) | **GET** /api/v2/email-campaigns/email-senders | Get list of email senders
[**getFavorites**](TextMagicApi.md#getFavorites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists
[**getInboundMessage**](TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbound message
[**getInboundMessagesNotificationSettings**](TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
[**getInvoices**](TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Get all invoices
[**getList**](TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get the details of a specific list
[**getListContactsIds**](TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Get all contact IDs in a list
[**getLists**](TextMagicApi.md#getLists) | **GET** /api/v2/lists | Get all lists
[**getListsOfContact**](TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Get a contact&#39;s lists
[**getMessagePreview**](TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
[**getMessagePrice**](TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price/normalized | Check message price
[**getMessageSession**](TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a session&#x60;s details
[**getMessageSessionStat**](TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get a session&#x60;s statistics
[**getMessagesBySessionId**](TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Get a session&#x60;s messages
[**getMessagingCounters**](TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Get sent/received messages counters values
[**getMessagingStat**](TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Get messaging statistics
[**getOutboundMessage**](TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
[**getOutboundMessagesHistory**](TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
[**getScheduledMessage**](TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get a single scheduled message
[**getSenderId**](TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get the details of a specific Sender ID
[**getSenderIds**](TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all your approved Sender IDs
[**getSenderSettings**](TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings/normalized | Get current sender settings
[**getSpendingStat**](TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Get spending statistics
[**getTemplate**](TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a template&#x60;s details
[**getTimezones**](TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Get timezones
[**getUnreadMessagesTotal**](TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get unread messages number
[**getUnsubscribedContact**](TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get the details of a specific unsubscribed contact
[**getUnsubscribers**](TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all unsubscribed contacts
[**getUserDedicatedNumbers**](TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get all your dedicated numbers
[**importContacts**](TextMagicApi.md#importContacts) | **POST** /api/v2/contacts/import/normalized | Import contacts
[**markChatsReadBulk**](TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark chats as read (bulk)
[**markChatsUnreadBulk**](TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark chats as unread (bulk)
[**muteChat**](TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Mute chat sounds
[**muteChatsBulk**](TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute chats (bulk)
[**ping**](TextMagicApi.md#ping) | **GET** /api/v2/ping | Ping
[**reopenChatsBulk**](TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats (bulk)
[**requestSenderId**](TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Apply for a new Sender ID
[**scheduleEmailCampaign**](TextMagicApi.md#scheduleEmailCampaign) | **POST** /api/v2/email-campaigns/schedule | Schedule new email campaign
[**searchChats**](TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by message text
[**searchChatsByIds**](TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats (bulk)
[**searchChatsByReceipent**](TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient
[**searchContacts**](TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find contacts by given criteria
[**searchInboundMessages**](TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages
[**searchLists**](TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find lists by given criteria
[**searchOutboundMessages**](TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
[**searchScheduledMessages**](TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages
[**searchTemplates**](TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find templates by criteria
[**sendMessage**](TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
[**setChatStatus**](TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Change chat status
[**unblockContact**](TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock a contact by phone number
[**unblockContactsBulk**](TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock contacts (bulk)
[**unmuteChatsBulk**](TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute chats (bulk)
[**unsubscribeContact**](TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Manually unsubscribe a contact
[**updateBalanceNotificationSettings**](TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
[**updateCallbackSettings**](TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
[**updateChatDesktopNotificationSettings**](TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
[**updateContact**](TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id}/normalized | Edit a contact
[**updateContactNote**](TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update a contact note
[**updateCurrentUser**](TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Edit current account info
[**updateCustomField**](TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Edit a custom field
[**updateCustomFieldValue**](TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Edit the custom field value of a specified contact
[**updateInboundMessagesNotificationSettings**](TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
[**updateList**](TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Edit a list
[**updateSenderSetting**](TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings
[**updateTemplate**](TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update a template
[**uploadAvatar**](TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Upload an avatar
[**uploadContactAvatar**](TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Upload an avatar
[**uploadListAvatar**](TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for a list
[**uploadMessageAttachment**](TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment
[**uploadMessageMMSAttachment**](TextMagicApi.md#uploadMessageMMSAttachment) | **POST** /api/v2/messages/mms/attachment | Upload message mms attachment



## assignContactsToList

> ResourceLinkResponse assignContactsToList(id, assignContactsToListInputObject)

Assign contacts to a list

&gt; Unlike all other PUT requests, this command does not need old contact IDs to be submitted. For example, if you have a list with contacts 150, 151 and 152 and you want to add contact ID 153, you only need to submit 153 as a parameter of PUT /api/v2/lists/{id}/contacts. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let assignContactsToListInputObject = new TextMagicClient.AssignContactsToListRequest(); // AssignContactsToListRequest | 
apiInstance.assignContactsToList(id, assignContactsToListInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **assignContactsToListInputObject** | [**AssignContactsToListRequest**](AssignContactsToListRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## blockContact

> ResourceLinkResponse blockContact(blockContactInputObject)

Block a contact by phone number

Block a contact from inbound and outbound communication by phone number.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let blockContactInputObject = new TextMagicClient.BlockContactRequest(); // BlockContactRequest | 
apiInstance.blockContact(blockContactInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockContactInputObject** | [**BlockContactRequest**](BlockContactRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buyDedicatedNumber

> buyDedicatedNumber(buyDedicatedNumberInputObject)

Buy a dedicated number

To buy a dedicated number, you first need to find an available number matching your criteria using the &#x60;/api/v2/numbers/available&#x60; command described above.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let buyDedicatedNumberInputObject = new TextMagicClient.BuyDedicatedNumberRequest(); // BuyDedicatedNumberRequest | 
apiInstance.buyDedicatedNumber(buyDedicatedNumberInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyDedicatedNumberInputObject** | [**BuyDedicatedNumberRequest**](BuyDedicatedNumberRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clearAndAssignContactsToList

> ResourceLinkResponse clearAndAssignContactsToList(id, clearAndAssignContactsToListInputObject)

Reset list members to the specified contacts

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let clearAndAssignContactsToListInputObject = new TextMagicClient.ClearAndAssignContactsToListRequest(); // ClearAndAssignContactsToListRequest | 
apiInstance.clearAndAssignContactsToList(id, clearAndAssignContactsToListInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **clearAndAssignContactsToListInputObject** | [**ClearAndAssignContactsToListRequest**](ClearAndAssignContactsToListRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## closeChatsBulk

> closeChatsBulk(closeChatsBulkInputObject)

Close chats (bulk)

Close chats by chat IDs or close all chats

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let closeChatsBulkInputObject = new TextMagicClient.MarkChatsUnreadBulkRequest(); // MarkChatsUnreadBulkRequest | 
apiInstance.closeChatsBulk(closeChatsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeChatsBulkInputObject** | [**MarkChatsUnreadBulkRequest**](MarkChatsUnreadBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## closeReadChats

> closeReadChats()

Close read chats

Close all chats that have no unread messages.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.closeReadChats().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## createContact

> ResourceLinkResponse createContact(createContactInputObject)

Add a new contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createContactInputObject = new TextMagicClient.CreateContactRequest(); // CreateContactRequest | 
apiInstance.createContact(createContactInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactInputObject** | [**CreateContactRequest**](CreateContactRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContactNote

> ResourceLinkResponse createContactNote(id, createContactNoteInputObject)

Create a new contact note

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let createContactNoteInputObject = new TextMagicClient.CreateContactNoteRequest(); // CreateContactNoteRequest | 
apiInstance.createContactNote(id, createContactNoteInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **createContactNoteInputObject** | [**CreateContactNoteRequest**](CreateContactNoteRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCustomField

> ResourceLinkResponse createCustomField(createCustomFieldInputObject)

Add a new custom field

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createCustomFieldInputObject = new TextMagicClient.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.createCustomField(createCustomFieldInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldInputObject** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEmailCampaign

> CreateEmailCampaignResponse createEmailCampaign(createEmailCampaignInputObject)

Send email campaign

Creates a new email campaign and sends it to the specified recipients.  This endpoint allows you to create and immediately send an email marketing campaign to your contacts, groups, or direct email addresses. The campaign will be processed asynchronously, and you&#39;ll receive a campaign object with tracking information.  ## Request Requirements  - **Email Sender ID**: Must be a valid, configured email sender from your account - **Recipients**: At least one recipient type must be specified (contacts, groups, or emails) - **Content**: Subject and HTML message content are required - **Balance**: Sufficient account balance for the estimated campaign cost  ## Recipient Types  You can target multiple recipient types in a single campaign:  - **Contact IDs**: Send to specific contacts from your contact list - **Group IDs**: Send to all contacts within specified groups   - **Direct Emails**: Send to email addresses not in your contact list  ## Content Guidelines  - **Subject**: Maximum 998 characters, should be engaging and relevant - **Message**: HTML content supported, including images, links, and formatting - **From Name**: Optional custom sender name (max 500 characters) - **Reply-To**: Optional custom reply-to email address  ## Cost and Balance  The API automatically calculates campaign costs based on: - Total number of unique recipients across all specified groups, contacts, and emails - Your account&#39;s email pricing tier - Any additional features or premium content  If your account balance is insufficient, the request will be rejected with a low balance error.  ## Response Information  Successful campaigns return: - Campaign ID for tracking and analytics - Current campaign status and progress - Cost breakdown and recipient counts - Sender information and content preview - Statistical totals and engagement metrics  ## Error Scenarios  Common error conditions include: - **Validation Errors**: Invalid email addresses, missing required fields, or content that exceeds limits - **Insufficient Balance**: Account balance too low for campaign cost - **Invalid Recipients**: Non-existent contact/group IDs or invalid email formats - **Sender Configuration**: Invalid or unconfigured email sender ID - **No Recipients**: All recipient arrays are empty or invalid 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createEmailCampaignInputObject = new TextMagicClient.CreateEmailCampaignRequest(); // CreateEmailCampaignRequest | 
apiInstance.createEmailCampaign(createEmailCampaignInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEmailCampaignInputObject** | [**CreateEmailCampaignRequest**](CreateEmailCampaignRequest.md)|  | 

### Return type

[**CreateEmailCampaignResponse**](CreateEmailCampaignResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createList

> ResourceLinkResponse createList(createListInputObject)

Create a new list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createListInputObject = new TextMagicClient.CreateListRequest(); // CreateListRequest | 
apiInstance.createList(createListInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createListInputObject** | [**CreateListRequest**](CreateListRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTag

> CreateTagResponse createTag(createTagInputObject)

Create tag

Creates a new tag for organizing and categorizing contacts.  This endpoint allows you to create a custom tag that can be used to segment and organize your contact database. Tags provide a flexible way to categorize contacts for better contact management.  ## Request Requirements  - **Title**: Required field, must be between 1 and 50 characters - **Uniqueness**: Tag titles must be unique within your account - **Authentication**: Valid API credentials required  ## Common Use Cases  Create tags for various organizational purposes:  - **Customer Types**: \&quot;VIP Customer\&quot;, \&quot;New Lead\&quot;, \&quot;Active Subscriber\&quot; - **Geographic Segments**: \&quot;North Region\&quot;, \&quot;Europe\&quot;, \&quot;Local Customers\&quot; - **Engagement Levels**: \&quot;Highly Engaged\&quot;, \&quot;Inactive\&quot;, \&quot;Recent Purchase\&quot; - **Campaign Categories**: \&quot;Summer Promotion\&quot;, \&quot;Newsletter Subscriber\&quot;, \&quot;Event Attendee\&quot; - **Custom Segments**: Any custom categorization that fits your business needs  ## Response Information  Successful tag creation returns: - **Tag ID**: Unique identifier for the newly created tag - **Title**: The tag name as provided in the request  Use the returned tag ID to assign this tag to contacts or reference it in other API operations.  ## Error Scenarios  Common error conditions include: - **Validation Errors**: Title exceeds 50 characters or is empty - **Duplicate Tag**: A tag with the same title already exists in your account - **Authentication Errors**: Invalid or missing API credentials  ## Next Steps  After creating a tag: 1. Use the tag ID to assign it to contacts via contact management endpoints 2. Reference the tag when filtering contacts 3. Manage and update tags through other Tags API endpoints 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createTagInputObject = new TextMagicClient.CreateTagRequest(); // CreateTagRequest | 
apiInstance.createTag(createTagInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTagInputObject** | [**CreateTagRequest**](CreateTagRequest.md)|  | 

### Return type

[**CreateTagResponse**](CreateTagResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplate

> ResourceLinkResponse createTemplate(createTemplateInputObject)

Create a template

There are times when creating a new template makes sense (such as when targeting specific clients or improving your business strategies).  You can create new SMS templates for marketing purposes or SMS templates for business campaigns. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let createTemplateInputObject = new TextMagicClient.CreateTemplateRequest(); // CreateTemplateRequest | 
apiInstance.createTemplate(createTemplateInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateInputObject** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllContacts

> deleteAllContacts()

Delete contacts (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.deleteAllContacts().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteAllOutboundMessages

> deleteAllOutboundMessages()

Delete all messages

Delete all messages.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.deleteAllOutboundMessages().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteAvatar

> deleteAvatar()

Delete an avatar

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.deleteAvatar().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteChatMessages

> deleteChatMessages(id, deleteChatMessagesBulkInputObject)

Delete chat messages by ID(s)

Delete messages from chat by given message IDs.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let deleteChatMessagesBulkInputObject = new TextMagicClient.DeleteChatMessagesRequest(); // DeleteChatMessagesRequest | 
apiInstance.deleteChatMessages(id, deleteChatMessagesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteChatMessagesBulkInputObject** | [**DeleteChatMessagesRequest**](DeleteChatMessagesRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteChatsBulk

> deleteChatsBulk(deleteChatsBulkInputObject)

Delete chats (bulk)

Delete chats by given IDs or delete all chats.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteChatsBulkInputObject = new TextMagicClient.DeleteChatsBulkRequest(); // DeleteChatsBulkRequest | 
apiInstance.deleteChatsBulk(deleteChatsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatsBulkInputObject** | [**DeleteChatsBulkRequest**](DeleteChatsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteContact

> deleteContact(id)

Delete a contact

&gt; This command removes your contact completely. If it was assigned or saved to a shared list, it will disappear from there too. If you only need to remove a contact from selected lists, use the Contact assignment command in the Lists section instead, rather than deleting the contact. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteContact(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteContactAvatar

> deleteContactAvatar(id)

Delete an avatar

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteContactAvatar(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteContactNote

> deleteContactNote(id)

Delete a contact note

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteContactNote(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteContactNotesBulk

> deleteContactNotesBulk(id, deleteContactNotesBulkInputObject)

Delete contact notes (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let deleteContactNotesBulkInputObject = new TextMagicClient.DeleteContactNotesBulkRequest(); // DeleteContactNotesBulkRequest | 
apiInstance.deleteContactNotesBulk(id, deleteContactNotesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteContactNotesBulkInputObject** | [**DeleteContactNotesBulkRequest**](DeleteContactNotesBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteContactsByIds

> deleteContactsByIds(deleteContactsByIdsInputObject)

Delete contacts by IDs (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteContactsByIdsInputObject = new TextMagicClient.DeleteContactsByIdsRequest(); // DeleteContactsByIdsRequest | 
apiInstance.deleteContactsByIds(deleteContactsByIdsInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContactsByIdsInputObject** | [**DeleteContactsByIdsRequest**](DeleteContactsByIdsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteContactsFromList

> deleteContactsFromList(id, deleteContacsFromListObject)

Unassign contacts from a list

&gt; When you remove contacts from a specific list, they will be deleted permanently, unless they are first saved in another list. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let deleteContacsFromListObject = new TextMagicClient.DeleteContactsFromListRequest(); // DeleteContactsFromListRequest | 
apiInstance.deleteContactsFromList(id, deleteContacsFromListObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteContacsFromListObject** | [**DeleteContactsFromListRequest**](DeleteContactsFromListRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteCustomField

> deleteCustomField(id)

Delete a custom field

&gt; When a custom field is deleted, all the information that was added to contacts under this custom field will also be lost. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteCustomField(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteDedicatedNumber

> deleteDedicatedNumber(id)

Cancel a dedicated number subscription

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteDedicatedNumber(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteInboundMessage

> deleteInboundMessage(id)

Delete a single inbound message

&gt; Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | The unique numeric ID for the inbound message.
apiInstance.deleteInboundMessage(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The unique numeric ID for the inbound message. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteInboundMessagesBulk

> deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject)

Delete inbound messages (bulk)

&gt; Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteInboundMessagesBulkInputObject = new TextMagicClient.DeleteListsBulkRequest(); // DeleteListsBulkRequest | 
apiInstance.deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInboundMessagesBulkInputObject** | [**DeleteListsBulkRequest**](DeleteListsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteList

> deleteList(id)

Delete a list

This command has no parameters. If successful, this command will return the standard delete response (204 No Content); otherwise, a standard error response will be returned.  When you delete a list, the contacts in it are deleted as well, unless they were saved in another list.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteList(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteListAvatar

> deleteListAvatar(id)

Delete an avatar for a list

Delete an avatar for a list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteListAvatar(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteListContactsBulk

> deleteListContactsBulk(id, deleteListContactsBulkInputObject)

Delete contacts from a list (bulk)

Delete contacts from a list (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let deleteListContactsBulkInputObject = new TextMagicClient.UnblockContactsBulkRequest(); // UnblockContactsBulkRequest | 
apiInstance.deleteListContactsBulk(id, deleteListContactsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteListContactsBulkInputObject** | [**UnblockContactsBulkRequest**](UnblockContactsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteListsBulk

> deleteListsBulk(deleteListsBulkInputObject)

Delete lists (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteListsBulkInputObject = new TextMagicClient.DeleteListsBulkRequest(); // DeleteListsBulkRequest | 
apiInstance.deleteListsBulk(deleteListsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListsBulkInputObject** | [**DeleteListsBulkRequest**](DeleteListsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteMessageSession

> deleteMessageSession(id)

Delete a session

Delete a message session, together with all nested messages. &gt; You will not be refunded for any deleted sent sessions. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteMessageSession(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteMessageSessionsBulk

> deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject)

Delete sessions (bulk)

Delete message sessions, together with all nested messages, by given ID(s) or delete all message sessions.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteMessageSessionsBulkInputObject = new TextMagicClient.DeleteListsBulkRequest(); // DeleteListsBulkRequest | 
apiInstance.deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMessageSessionsBulkInputObject** | [**DeleteListsBulkRequest**](DeleteListsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteOutboundMessage

> deleteOutboundMessage(id)

Delete message

Delete a single message.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteOutboundMessage(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteOutboundMessagesBulk

> deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject)

Delete messages (bulk)

Delete outbound messages by the given ID(s) or delete all outbound messages.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteOutboundMessagesBulkInputObject = new TextMagicClient.DeleteOutboundMessagesBulkRequest(); // DeleteOutboundMessagesBulkRequest | 
apiInstance.deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOutboundMessagesBulkInputObject** | [**DeleteOutboundMessagesBulkRequest**](DeleteOutboundMessagesBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteScheduledMessage

> deleteScheduledMessage(id)

Delete a single scheduled message

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteScheduledMessage(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteScheduledMessagesBulk

> deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject)

Delete scheduled messages (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteScheduledMessagesBulkInputObject = new TextMagicClient.DeleteScheduledMessagesBulkRequest(); // DeleteScheduledMessagesBulkRequest | 
apiInstance.deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledMessagesBulkInputObject** | [**DeleteScheduledMessagesBulkRequest**](DeleteScheduledMessagesBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteSenderId

> deleteSenderId(id)

Delete a Sender ID

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteSenderId(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteTemplate

> deleteTemplate(id)

Delete a template

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.deleteTemplate(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteTemplatesBulk

> deleteTemplatesBulk(deleteTemplatesBulkInputObject)

Delete templates (bulk)

Delete templates by given IDs or delete all templates.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let deleteTemplatesBulkInputObject = new TextMagicClient.DeleteContactNotesBulkRequest(); // DeleteContactNotesBulkRequest | 
apiInstance.deleteTemplatesBulk(deleteTemplatesBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTemplatesBulkInputObject** | [**DeleteContactNotesBulkRequest**](DeleteContactNotesBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## doCarrierLookup

> DoCarrierLookupResponse doCarrierLookup(phone, opts)

Carrier Lookup

This API call allows you to retrieve additional information about a phone number: region-specific phone number formatting, carrier, phone type (landline/mobile) and country information.  &gt; Numbers must be checked one by one. You cannot check multiple numbers in one request.   

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let phone = "447860021130"; // String | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). 
let opts = {
  'country': "GB" // String | This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**. 
};
apiInstance.doCarrierLookup(phone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).  | 
 **country** | **String**| This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**.  | [optional] 

### Return type

[**DoCarrierLookupResponse**](DoCarrierLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## doEmailLookup

> DoEmailLookupResponse doEmailLookup(email)

Email Lookup

To get more details about an email address or to check whether it is a valid email or not, you can use the Email Lookup command. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).  This API call allows you to retrieve additional information about an email address, such as mailbox detection, syntax checks, DNS validation, deliverability status, and many more helpful values (see the table below).  &gt; Emails must be checked one by one. You cannot check multiple emails in one request. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let email = "john@sample.com"; // String | Email address.
apiInstance.doEmailLookup(email).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address. | 

### Return type

[**DoEmailLookupResponse**](DoEmailLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllBulkSessions

> GetAllBulkSessionsPaginatedResponse getAllBulkSessions(opts)

Get all bulk sessions

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllBulkSessions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllBulkSessionsPaginatedResponse**](GetAllBulkSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllChats

> GetAllChatsPaginatedResponse getAllChats(opts)

Get all chats

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'status': "a", // String | Fetch only (a)ctive, (c)losed or (d)eleted chats.
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'voice': 0, // Number | Fetch results with voice calls.
  'flat': 1 // Number | Should additional contact info be included?
};
apiInstance.getAllChats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Fetch only (a)ctive, (c)losed or (d)eleted chats. | [optional] 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **voice** | **Number**| Fetch results with voice calls. | [optional] [default to 0]
 **flat** | **Number**| Should additional contact info be included? | [optional] [default to 0]

### Return type

[**GetAllChatsPaginatedResponse**](GetAllChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllInboundMessages

> GetAllInboundMessagesPaginatedResponse getAllInboundMessages(opts)

Get all inbound messages

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getAllInboundMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetAllInboundMessagesPaginatedResponse**](GetAllInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllMessageSessions

> GetAllMessageSessionsPaginatedResponse getAllMessageSessions(opts)

Get all sessions

Get all message sending sessions. &gt; This list contains all of your sessions, including those which were sent but not via API 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllMessageSessions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllMessageSessionsPaginatedResponse**](GetAllMessageSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllOutboundMessages

> GetAllOutboundMessagesPaginatedResponse getAllOutboundMessages(opts)

Get all messages

Get all user oubound messages.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'lastId': 56 // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
};
apiInstance.getAllOutboundMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional] 

### Return type

[**GetAllOutboundMessagesPaginatedResponse**](GetAllOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllScheduledMessages

> GetAllScheduledMessagesPaginatedResponse getAllScheduledMessages(opts)

Get all scheduled messages

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'status': "'x'", // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getAllScheduledMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to &#39;x&#39;]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetAllScheduledMessagesPaginatedResponse**](GetAllScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllTemplates

> GetAllTemplatesPaginatedResponse getAllTemplates(opts)

Get all templates

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] 
 **limit** | **Number**| The number of results per page. | [optional] 

### Return type

[**GetAllTemplatesPaginatedResponse**](GetAllTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableDedicatedNumbers

> GetAvailableDedicatedNumbersResponse getAvailableDedicatedNumbers(country, opts)

Find dedicated numbers available for purchase

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let country = "GB"; // String | The 2-letter dedicated number country ISO code.
let opts = {
  'prefix': 447155, // Number | Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country.
  'tollfree': 0 // Number | Should we show only tollfree numbers (tollfree available only for US).
};
apiInstance.getAvailableDedicatedNumbers(country, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter dedicated number country ISO code. | 
 **prefix** | **Number**| Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country. | [optional] 
 **tollfree** | **Number**| Should we show only tollfree numbers (tollfree available only for US). | [optional] [default to 0]

### Return type

[**GetAvailableDedicatedNumbersResponse**](GetAvailableDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableSenderSettingOptions

> GetAvailableSenderSettingOptionsResponse getAvailableSenderSettingOptions(opts)

Get available sender settings

Get all available sender setting options which can be used in the \&quot;from\&quot; parameter of the POST messages method.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'country': "US" // String | The 2-letter ISO country ID. If not specified, it returns all the available sender settings.
};
apiInstance.getAvailableSenderSettingOptions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter ISO country ID. If not specified, it returns all the available sender settings. | [optional] 

### Return type

[**GetAvailableSenderSettingOptionsResponse**](GetAvailableSenderSettingOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBalanceNotificationOptions

> GetBalanceNotificationOptionsResponse getBalanceNotificationOptions()

Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getBalanceNotificationOptions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationOptionsResponse**](GetBalanceNotificationOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBalanceNotificationSettings

> GetBalanceNotificationSettingsResponse getBalanceNotificationSettings()

Get balance notification settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getBalanceNotificationSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationSettingsResponse**](GetBalanceNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBlockedContacts

> GetBlockedContactsPaginatedResponse getBlockedContacts(opts)

Get blocked contacts

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find blocked contacts by specified search query.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getBlockedContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find blocked contacts by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetBlockedContactsPaginatedResponse**](GetBlockedContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBulkSession

> BulkSession getBulkSession(id)

Get bulk session status

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getBulkSession(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**BulkSession**](BulkSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCallbackSettings

> GetCallbackSettingsResponse getCallbackSettings()

Fetch callback URL settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getCallbackSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCallbackSettingsResponse**](GetCallbackSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChat

> Chat getChat(id)

Get a single chat

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getChat(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChatByPhone

> Chat getChatByPhone(phone, opts)

Find chats by phone

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let phone = "447860021130"; // String | 
let opts = {
  'upsert': 0, // Number | Create a new chat if not found.
  'reopen': 0 // Number | Reopen chat if found or do not change status.
};
apiInstance.getChatByPhone(phone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **upsert** | **Number**| Create a new chat if not found. | [optional] [default to 0]
 **reopen** | **Number**| Reopen chat if found or do not change status. | [optional] [default to 0]

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChatMessages

> GetChatMessagesPaginatedResponse getChatMessages(id, opts)

Get chat messages

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find messages by specified search query.
  'start': "start_example", // String | Return messages since specified timestamp only. Required when `end` parameter specified.
  'end': "end_example", // String | Return messages up to specified timestamp only. Required when `start` parameter specified.
  'direction': "'desc'", // String | Order direction. Default is desc.
  'voice': 0, // Number | Fetch results with voice calls.
  'includeNotes': 0 // Number | Fetch results with messenger notes.
};
apiInstance.getChatMessages(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional] 
 **start** | **String**| Return messages since specified timestamp only. Required when &#x60;end&#x60; parameter specified. | [optional] 
 **end** | **String**| Return messages up to specified timestamp only. Required when &#x60;start&#x60; parameter specified. | [optional] 
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]
 **voice** | **Number**| Fetch results with voice calls. | [optional] [default to 0]
 **includeNotes** | **Number**| Fetch results with messenger notes. | [optional] [default to 0]

### Return type

[**GetChatMessagesPaginatedResponse**](GetChatMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> Contact getContact(id)

Get the details of a specific contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | Contact ID.
apiInstance.getContact(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Contact ID. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactByPhone

> Contact getContactByPhone(phone)

Get the details of a specific contact by phone number

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let phone = "447860021130"; // String | 
apiInstance.getContactByPhone(phone).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactIfBlocked

> Contact getContactIfBlocked(phone)

Check if a phone number is blocked

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let phone = "447860021130"; // String | Phone number to check.
apiInstance.getContactIfBlocked(phone).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number to check. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactImportSessionProgress

> GetContactImportSessionProgressResponse getContactImportSessionProgress(id)

Check import progress

Get contact import session progress.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getContactImportSessionProgress(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetContactImportSessionProgressResponse**](GetContactImportSessionProgressResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactNote

> ContactNote getContactNote(id)

Get a contact note

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getContactNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ContactNote**](ContactNote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactNotes

> GetContactNotesPaginatedResponse getContactNotes(id, opts)

Fetch notes assigned to a given contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getContactNotes(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetContactNotesPaginatedResponse**](GetContactNotesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContacts

> GetContactsPaginatedResponse getContacts(opts)

Get all contacts

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'shared': 0, // Number | Should shared contacts be included?
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts be included? | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetContactsPaginatedResponse**](GetContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactsAutocomplete

> [GetContactsAutocompleteResponseItem] getContactsAutocomplete(query, opts)

Get contacts autocomplete suggestions

Get contacts autocomplete suggestions by given search terms.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let query = "A"; // String | Find recipients by specified search query.
let opts = {
  'limit': 10, // Number | The number of results per page.
  'lists': 0 // Number | Should lists be returned or not?
};
apiInstance.getContactsAutocomplete(query, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Find recipients by specified search query. | 
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lists** | **Number**| Should lists be returned or not? | [optional] [default to 0]

### Return type

[**[GetContactsAutocompleteResponseItem]**](GetContactsAutocompleteResponseItem.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactsByListId

> GetContactsByListIdPaginatedResponse getContactsByListId(id, opts)

Get all contacts in a list

A useful synonym for the \&quot;contacts/search\&quot; command with the provided \&quot;listId\&quot; parameter.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | Given group ID.
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getContactsByListId(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Given group ID. | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetContactsByListIdPaginatedResponse**](GetContactsByListIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCountries

> [Country] getCountries()

Get countries

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Country]**](Country.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> User getCurrentUser()

Get current account information

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomField

> UserCustomField getCustomField(id)

Get the details of a specific custom field

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getCustomField(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UserCustomField**](UserCustomField.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomFields

> GetCustomFieldsPaginatedResponse getCustomFields(opts)

Get all custom fields

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getCustomFields(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetCustomFieldsPaginatedResponse**](GetCustomFieldsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDedicatedNumber

> UsersInbound getDedicatedNumber(id)

Get the details of a specific dedicated number

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getDedicatedNumber(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UsersInbound**](UsersInbound.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailSenders

> GetEmailSendersResponse getEmailSenders(opts)

Get list of email senders

Retrieves a list of configured email senders available for creating email campaigns.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'domainId': 56 // Number | Filter email senders by specific domain ID.
};
apiInstance.getEmailSenders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **Number**| Filter email senders by specific domain ID. | [optional] 

### Return type

[**GetEmailSendersResponse**](GetEmailSendersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavorites

> GetFavoritesPaginatedResponse getFavorites(opts)

Get favorite contacts and lists

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "A" // String | Find contacts or lists by specified search query.
};
apiInstance.getFavorites(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find contacts or lists by specified search query. | [optional] 

### Return type

[**GetFavoritesPaginatedResponse**](GetFavoritesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInboundMessage

> MessageIn getInboundMessage(id)

Get a single inbound message

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1782832; // Number | The unique numeric ID for the inbound message.
apiInstance.getInboundMessage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The unique numeric ID for the inbound message. | 

### Return type

[**MessageIn**](MessageIn.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInboundMessagesNotificationSettings

> GetInboundMessagesNotificationSettingsResponse getInboundMessagesNotificationSettings()

Get inbound messages notification settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getInboundMessagesNotificationSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetInboundMessagesNotificationSettingsResponse**](GetInboundMessagesNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInvoices

> GetInvoicesPaginatedResponse getInvoices(opts)

Get all invoices

With the TextMagic API, you can check the invoices and transactions for your account.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getInvoices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetInvoicesPaginatedResponse**](GetInvoicesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getList

> Array getList(id)

Get the details of a specific list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getList(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**Array**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListContactsIds

> [Number] getListContactsIds(id)

Get all contact IDs in a list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getListContactsIds(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**[Number]**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLists

> GetListsPaginatedResponse getLists(opts)

Get all lists

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | The current fetched page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'", // String | Order direction. Default is desc.
  'favoriteOnly': 0, // Number | Return only favorited lists.
  'onlyMine': 0 // Number | Return only current user lists.
};
apiInstance.getLists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The current fetched page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]
 **favoriteOnly** | **Number**| Return only favorited lists. | [optional] [default to 0]
 **onlyMine** | **Number**| Return only current user lists. | [optional] [default to 0]

### Return type

[**GetListsPaginatedResponse**](GetListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListsOfContact

> GetListsOfContactPaginatedResponse getListsOfContact(id, opts)

Get a contact&#39;s lists

Get all the lists in which a contact is included.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getListsOfContact(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetListsOfContactPaginatedResponse**](GetListsOfContactPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagePreview

> GetMessagePreviewResponse getMessagePreview(opts)

Preview message

Get a messages preview (with dynamic fields merged) of up to 100 messages per session. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'text': "Test message test", // String | Message text. Required if **template_id** is not set.
  'templateId': 1, // Number | Template used instead of message text. Required if **text** is not set.
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
  'sendingDateTime': "2020-05-27 13:02:33", // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
  'sendingTimezone': "America/Buenos_Aires", // String | The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
  'contacts': "1,2,3,4", // String | Comma-separated array of contact resources id message will be sent to.
  'lists': "1,2,3,4", // String | Comma-separated array of list resources id message will be sent to.
  'phones': "447860021130,447860021131", // String | Comma-separated array of E.164 phone numbers message will be sent to.
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
  'partsCount': 6, // Number | Maximum message parts count (Textmagic allows sending of 1 to 6 message parts).
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure.
  'from': "Test Sender ID", // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
  'rule': "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1", // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
  'createChat': 0, // Number | Should the sending method try to create new Chat(if not exist) with specified recipients?
  'tts': 0, // Number | Send Text-to-Speech message.
  'local': 0, // Number | Treat phone numbers passed in the \\'phones\\' field as local.
  'localCountry': "US" // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
};
apiInstance.getMessagePreview(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Message text. Required if **template_id** is not set. | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if **text** is not set. | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (Textmagic allows sending of 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **Number**| Should the sending method try to create new Chat(if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Number**| Send Text-to-Speech message. | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePreviewResponse**](GetMessagePreviewResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagePrice

> GetMessagePriceResponse getMessagePrice(opts)

Check message price

Check pricing for a new outbound message.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'includeBlocked': 0, // Number | Should we show the pricing for blocked contacts?
  'text': "Test message test", // String | Message text. Required if the **template_id** is not set.
  'templateId': 1, // Number | Template used instead of message text. Required if the **text** is not set.
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
  'sendingDateTime': "2020-05-27 13:02:33", // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
  'sendingTimezone': "America/Buenos_Aires", // String | The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
  'contacts': "1,2,3,4", // String | Comma-separated array of contact resources id message will be sent to.
  'lists': "1,2,3,4", // String | Comma-separated array of list resources id message will be sent to.
  'phones': "447860021130,447860021131", // String | Comma-separated array of E.164 phone numbers message will be sent to.
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
  'partsCount': 6, // Number | Maximum message parts count (Textmagic allows sending 1 to 6 message parts).
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure.
  'from': "Test Sender ID", // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
  'rule': "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1", // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
  'createChat': 0, // Number | Should the sending method try to create new Chat (if not exist) with specified recipients?
  'tts': 0, // Number | Send a Text-to-Speech message.
  'local': 0, // Number | Treat phone numbers passed in the \\'phones\\' field as local.
  'localCountry': "US" // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
};
apiInstance.getMessagePrice(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeBlocked** | **Number**| Should we show the pricing for blocked contacts? | [optional] [default to 0]
 **text** | **String**| Message text. Required if the **template_id** is not set. | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if the **text** is not set. | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (Textmagic allows sending 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **Number**| Should the sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Number**| Send a Text-to-Speech message. | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePriceResponse**](GetMessagePriceResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessageSession

> MessageSession getMessageSession(id)

Get a session&#x60;s details

Get a specific session’s details.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | Session ID.
apiInstance.getMessageSession(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Session ID. | 

### Return type

[**MessageSession**](MessageSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessageSessionStat

> GetMessageSessionStatResponse getMessageSessionStat(id, opts)

Get a session&#x60;s statistics

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'includeDeleted': 0 // Number | Search also in deleted messages.
};
apiInstance.getMessageSessionStat(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessageSessionStatResponse**](GetMessageSessionStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagesBySessionId

> GetMessagesBySessionIdPaginatedResponse getMessagesBySessionId(id, opts)

Get a session&#x60;s messages

A useful synonym for the \&quot;messages/search\&quot; command with the provided \&quot;sessionId\&quot; parameter.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'statuses': "statuses_example", // String | Find messages by status.
  'includeDeleted': 0 // Number | Search also in deleted messages.
};
apiInstance.getMessagesBySessionId(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **statuses** | **String**| Find messages by status. | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessagesBySessionIdPaginatedResponse**](GetMessagesBySessionIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagingCounters

> GetMessagingCountersResponse getMessagingCounters()

Get sent/received messages counters values

Get total contacts, sent messages and received messages counters values.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getMessagingCounters().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMessagingCountersResponse**](GetMessagingCountersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagingStat

> [MessagingStatItem] getMessagingStat(opts)

Get messaging statistics

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'by': "off", // String | *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year. 
  'start': 1430438400, // Number | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
  'end': 1431648000 // Number | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
};
apiInstance.getMessagingStat(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | **String**| *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year.  | [optional] [default to &#39;off&#39;]
 **start** | **Number**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **Number**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**[MessagingStatItem]**](MessagingStatItem.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOutboundMessage

> MessageOut getOutboundMessage(id)

Get a single message

Get a single outgoing message.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getOutboundMessage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOutboundMessagesHistory

> GetOutboundMessagesHistoryPaginatedResponse getOutboundMessagesHistory(opts)

Get history

Get the outbound messages history.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'limit': 10, // Number | The number of results per page.
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID.
  'query': "query_example", // String | Find message by specified search query.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.getOutboundMessagesHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. | [optional] 
 **query** | **String**| Find message by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**GetOutboundMessagesHistoryPaginatedResponse**](GetOutboundMessagesHistoryPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScheduledMessage

> MessagesIcs getScheduledMessage(id)

Get a single scheduled message

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getScheduledMessage(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessagesIcs**](MessagesIcs.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSenderId

> SenderId getSenderId(id)

Get the details of a specific Sender ID

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getSenderId(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SenderId**](SenderId.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSenderIds

> GetSenderIdsPaginatedResponse getSenderIds(opts)

Get all your approved Sender IDs

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getSenderIds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSenderIdsPaginatedResponse**](GetSenderIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSenderSettings

> GetSenderSettingsResponse getSenderSettings(opts)

Get current sender settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'country': "US" // String | Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters.
};
apiInstance.getSenderSettings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters. | [optional] 

### Return type

[**GetSenderSettingsResponse**](GetSenderSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpendingStat

> GetSpendingStatPaginatedResponse getSpendingStat(opts)

Get spending statistics

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'start': "2018-11-11 11:11", // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
  'end': "2019-11-11 11:11" // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
};
apiInstance.getSpendingStat(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **start** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**GetSpendingStatPaginatedResponse**](GetSpendingStatPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> MessageTemplate getTemplate(id)

Get a template&#x60;s details

Get a single template.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getTemplate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTimezones

> Object getTimezones(opts)

Get timezones

Return all available timezone IDs

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'full': 0 // Number | Return full info about timezones in array (0 or 1). Default is 0.
};
apiInstance.getTimezones(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | **Number**| Return full info about timezones in array (0 or 1). Default is 0. | [optional] [default to 0]

### Return type

**Object**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnreadMessagesTotal

> GetUnreadMessagesTotalResponse getUnreadMessagesTotal()

Get unread messages number

Get the total amount of unread messages in the current user chats.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.getUnreadMessagesTotal().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUnreadMessagesTotalResponse**](GetUnreadMessagesTotalResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnsubscribedContact

> UnsubscribedContact getUnsubscribedContact(id)

Get the details of a specific unsubscribed contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
apiInstance.getUnsubscribedContact(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UnsubscribedContact**](UnsubscribedContact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnsubscribers

> GetUnsubscribersPaginatedResponse getUnsubscribers(opts)

Get all unsubscribed contacts

When one of your message recipients sends a request with one of the [STOP-words](https://www.textmagic.com/sms-stop-command/), they will be immediately opted-out of your send lists and their contact status will change to an unsubscribed contact. To retrieve information on all contacts who have unsubscribed status, use: 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getUnsubscribers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetUnsubscribersPaginatedResponse**](GetUnsubscribersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserDedicatedNumbers

> GetUserDedicatedNumbersPaginatedResponse getUserDedicatedNumbers(opts)

Get all your dedicated numbers

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'surveyId': 56 // Number | Fetch only those numbers that are ready for the survey.
};
apiInstance.getUserDedicatedNumbers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **surveyId** | **Number**| Fetch only those numbers that are ready for the survey. | [optional] 

### Return type

[**GetUserDedicatedNumbersPaginatedResponse**](GetUserDedicatedNumbersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importContacts

> ResourceLinkResponse importContacts(column, file, opts)

Import contacts

Import contacts from the CSV, XLS or XLSX file.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let column = "0:firstName;1:lastName;3:phone;4:email"; // String | Import file column mapping. The string must contain sub-strings of mapping in format `columnNumber:field` glued by `;`. For example: `0:firstName;1:lastName;3:phone;4:email` where the value before `:` is a number of the column in the file, and the value after `:` is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: `firstName`, `lastName`, `phone`, `email`. Existing of `phone` mapping is required. 
let file = "/path/to/file"; // File | File containing contacts in csv or xls(x) formats.
let opts = {
  'listId': 443, // Number | List that ID contacts will be imported to. Ignored if `listName` is specified. 
  'listName': "A new list" // String | List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if `listId` is specified. 
};
apiInstance.importContacts(column, file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **column** | **String**| Import file column mapping. The string must contain sub-strings of mapping in format &#x60;columnNumber:field&#x60; glued by &#x60;;&#x60;. For example: &#x60;0:firstName;1:lastName;3:phone;4:email&#x60; where the value before &#x60;:&#x60; is a number of the column in the file, and the value after &#x60;:&#x60; is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: &#x60;firstName&#x60;, &#x60;lastName&#x60;, &#x60;phone&#x60;, &#x60;email&#x60;. Existing of &#x60;phone&#x60; mapping is required.  | 
 **file** | **File**| File containing contacts in csv or xls(x) formats. | 
 **listId** | **Number**| List that ID contacts will be imported to. Ignored if &#x60;listName&#x60; is specified.  | [optional] 
 **listName** | **String**| List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if &#x60;listId&#x60; is specified.  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## markChatsReadBulk

> markChatsReadBulk(markChatsReadBulkInputObject)

Mark chats as read (bulk)

Mark several chats as read by chat IDs or mark all chats as read

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let markChatsReadBulkInputObject = new TextMagicClient.MarkChatsUnreadBulkRequest(); // MarkChatsUnreadBulkRequest | 
apiInstance.markChatsReadBulk(markChatsReadBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsReadBulkInputObject** | [**MarkChatsUnreadBulkRequest**](MarkChatsUnreadBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## markChatsUnreadBulk

> markChatsUnreadBulk(markChatsUnreadBulkInputObject)

Mark chats as unread (bulk)

Mark several chats as UNread by chat IDs or mark all chats as UNread

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let markChatsUnreadBulkInputObject = new TextMagicClient.MarkChatsUnreadBulkRequest(); // MarkChatsUnreadBulkRequest | 
apiInstance.markChatsUnreadBulk(markChatsUnreadBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsUnreadBulkInputObject** | [**MarkChatsUnreadBulkRequest**](MarkChatsUnreadBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## muteChat

> ResourceLinkResponse muteChat(muteChatInputObject)

Mute chat sounds

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let muteChatInputObject = new TextMagicClient.MuteChatRequest(); // MuteChatRequest | 
apiInstance.muteChat(muteChatInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatInputObject** | [**MuteChatRequest**](MuteChatRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## muteChatsBulk

> muteChatsBulk(muteChatsBulkInputObject)

Mute chats (bulk)

Mute several chats by chat ids or mute all chats.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let muteChatsBulkInputObject = new TextMagicClient.MuteChatsBulkRequest(); // MuteChatsBulkRequest | 
apiInstance.muteChatsBulk(muteChatsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatsBulkInputObject** | [**MuteChatsBulkRequest**](MuteChatsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## ping

> PingResponse ping()

Ping

Make a simple ping request.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
apiInstance.ping().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PingResponse**](PingResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reopenChatsBulk

> reopenChatsBulk(reopenChatsBulkInputObject)

Reopen chats (bulk)

Reopen chats by chat IDs or reopen all chats

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let reopenChatsBulkInputObject = new TextMagicClient.MarkChatsUnreadBulkRequest(); // MarkChatsUnreadBulkRequest | 
apiInstance.reopenChatsBulk(reopenChatsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reopenChatsBulkInputObject** | [**MarkChatsUnreadBulkRequest**](MarkChatsUnreadBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## requestSenderId

> ResourceLinkResponse requestSenderId(requestSenderIdInputObject)

Apply for a new Sender ID

&gt; Sender IDs are shared among all of your sub-accounts.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let requestSenderIdInputObject = new TextMagicClient.RequestSenderIdRequest(); // RequestSenderIdRequest | 
apiInstance.requestSenderId(requestSenderIdInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestSenderIdInputObject** | [**RequestSenderIdRequest**](RequestSenderIdRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scheduleEmailCampaign

> ScheduleEmailCampaignResponse scheduleEmailCampaign(scheduleEmailCampaignInputObject)

Schedule new email campaign

Creates a new scheduled email campaign that will be sent at a specified time or according to a recurring schedule.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let scheduleEmailCampaignInputObject = new TextMagicClient.ScheduleEmailCampaignRequest(); // ScheduleEmailCampaignRequest | 
apiInstance.scheduleEmailCampaign(scheduleEmailCampaignInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduleEmailCampaignInputObject** | [**ScheduleEmailCampaignRequest**](ScheduleEmailCampaignRequest.md)|  | 

### Return type

[**ScheduleEmailCampaignResponse**](ScheduleEmailCampaignResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchChats

> SearchChatsPaginatedResponse searchChats(opts)

Find chats by message text

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example" // String | Find chats by specified search query.
};
apiInstance.searchChats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional] 

### Return type

[**SearchChatsPaginatedResponse**](SearchChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchChatsByIds

> SearchChatsByIdsPaginatedResponse searchChatsByIds(opts)

Find chats (bulk)

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example" // String | Find chats by ID(s).
};
apiInstance.searchChatsByIds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find chats by ID(s). | [optional] 

### Return type

[**SearchChatsByIdsPaginatedResponse**](SearchChatsByIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchChatsByReceipent

> SearchChatsByReceipentPaginatedResponse searchChatsByReceipent(opts)

Find chats by recipient

Find chats by recipient (contact, list name or phone number).

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find chats by specified search query.
  'orderBy': "'id'" // String | Order results by some field. Default is id.
};
apiInstance.searchChatsByReceipent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]

### Return type

[**SearchChatsByReceipentPaginatedResponse**](SearchChatsByReceipentPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchContacts

> SearchContactsPaginatedResponse searchContacts(opts)

Find contacts by given criteria

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'shared': 0, // Number | Should shared contacts be included?
  'ids': "ids_example", // String | Find contacts by IDs.
  'listId': 56, // Number | Find contacts by List ID.
  'includeBlocked': 56, // Number | Should blocked contacts be included?
  'query': "query_example", // String | Find contacts by specified search query.
  'local': 0, // Number | Treat phone number passed in the \"query\" field as local. Default is 0.
  'exactMatch': 0, // Number | Return only exactly matching contacts. Default is 0.
  'country': "country_example", // String | The 2-letter ISO country code for local phone numbers, used when \"local\" is set to true. Default is the account country.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'", // String | Order direction. Default is desc.
  'tagIds': "tagIds_example" // String | Find contacts by tag ID(s). Multiple IDs can be separated by comma.
};
apiInstance.searchContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts be included? | [optional] [default to 0]
 **ids** | **String**| Find contacts by IDs. | [optional] 
 **listId** | **Number**| Find contacts by List ID. | [optional] 
 **includeBlocked** | **Number**| Should blocked contacts be included? | [optional] 
 **query** | **String**| Find contacts by specified search query. | [optional] 
 **local** | **Number**| Treat phone number passed in the \&quot;query\&quot; field as local. Default is 0. | [optional] [default to 0]
 **exactMatch** | **Number**| Return only exactly matching contacts. Default is 0. | [optional] [default to 0]
 **country** | **String**| The 2-letter ISO country code for local phone numbers, used when \&quot;local\&quot; is set to true. Default is the account country. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]
 **tagIds** | **String**| Find contacts by tag ID(s). Multiple IDs can be separated by comma. | [optional] 

### Return type

[**SearchContactsPaginatedResponse**](SearchContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchInboundMessages

> SearchInboundMessagesPaginatedResponse searchInboundMessages(opts)

Find inbound messages

Find inbound messages by given parameters.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example", // String | Find message by ID(s).
  'query': "query_example", // String | Find recipients by specified search query.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'", // String | Order direction. Default is desc.
  'expand': 0 // Number | Expand by adding firstName, lastName and contactId.
};
apiInstance.searchInboundMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find message by ID(s). | [optional] 
 **query** | **String**| Find recipients by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]
 **expand** | **Number**| Expand by adding firstName, lastName and contactId. | [optional] [default to 0]

### Return type

[**SearchInboundMessagesPaginatedResponse**](SearchInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchLists

> SearchListsPaginatedResponse searchLists(opts)

Find lists by given criteria

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "1,2,3,4", // String | Find lists by IDs.
  'query': "A", // String | Find lists by specified search query.
  'onlyMine': 0, // Number | Return only current user lists.
  'onlyDefault': 0, // Number | Return only default lists.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.searchLists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find lists by IDs. | [optional] 
 **query** | **String**| Find lists by specified search query. | [optional] 
 **onlyMine** | **Number**| Return only current user lists. | [optional] [default to 0]
 **onlyDefault** | **Number**| Return only default lists. | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**SearchListsPaginatedResponse**](SearchListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchOutboundMessages

> SearchOutboundMessagesPaginatedResponse searchOutboundMessages(opts)

Find messages

Find outbound messages by given parameters.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
  'ids': "ids_example", // String | Find message by ID(s).
  'sessionId': 56, // Number | Find messages by session ID.
  'statuses': "q", // String | Find messages by status.
  'includeDeleted': 0, // Number | Search also in deleted messages.
  'query': "query_example" // String | Find messages by specified search query.
};
apiInstance.searchOutboundMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional] 
 **ids** | **String**| Find message by ID(s). | [optional] 
 **sessionId** | **Number**| Find messages by session ID. | [optional] 
 **statuses** | **String**| Find messages by status. | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]
 **query** | **String**| Find messages by specified search query. | [optional] 

### Return type

[**SearchOutboundMessagesPaginatedResponse**](SearchOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchScheduledMessages

> SearchScheduledMessagesPaginatedResponse searchScheduledMessages(opts)

Find scheduled messages

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find messages by specified search query.
  'ids': "ids_example", // String | Find schedules by ID(s).
  'status': "'x'", // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
  'orderBy': "'id'", // String | Order results by some field. Default is id.
  'direction': "'desc'" // String | Order direction. Default is desc.
};
apiInstance.searchScheduledMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional] 
 **ids** | **String**| Find schedules by ID(s). | [optional] 
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to &#39;x&#39;]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to &#39;id&#39;]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to &#39;desc&#39;]

### Return type

[**SearchScheduledMessagesPaginatedResponse**](SearchScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchTemplates

> SearchTemplatesPaginatedResponse searchTemplates(opts)

Find templates by criteria

Find user templates by given parameters.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let opts = {
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example", // String | Find template by ID(s).
  'name': "name_example", // String | Find template by name.
  'content': "content_example" // String | Find template by content.
};
apiInstance.searchTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find template by ID(s). | [optional] 
 **name** | **String**| Find template by name. | [optional] 
 **content** | **String**| Find template by content. | [optional] 

### Return type

[**SearchTemplatesPaginatedResponse**](SearchTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendMessage

> SendMessageResponse sendMessage(sendMessageInputObject)

Send message

This is the main entrypoint to send messages. See the examples above for the reference.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let sendMessageInputObject = new TextMagicClient.SendMessageRequest(); // SendMessageRequest | 
apiInstance.sendMessage(sendMessageInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageInputObject** | [**SendMessageRequest**](SendMessageRequest.md)|  | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setChatStatus

> ResourceLinkResponse setChatStatus(setChatStatusInputObject)

Change chat status

Set the status of the chat given by ID.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let setChatStatusInputObject = new TextMagicClient.SetChatStatusRequest(); // SetChatStatusRequest | 
apiInstance.setChatStatus(setChatStatusInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setChatStatusInputObject** | [**SetChatStatusRequest**](SetChatStatusRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unblockContact

> unblockContact(unblockContactInputObject)

Unblock a contact by phone number

Unblock a contact by phone number

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let unblockContactInputObject = new TextMagicClient.BlockContactRequest(); // BlockContactRequest | 
apiInstance.unblockContact(unblockContactInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactInputObject** | [**BlockContactRequest**](BlockContactRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## unblockContactsBulk

> unblockContactsBulk(unblockContactsBulkInputObject)

Unblock contacts (bulk)

Unblock several contacts by blocked contact IDs or unblock all contacts.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let unblockContactsBulkInputObject = new TextMagicClient.UnblockContactsBulkRequest(); // UnblockContactsBulkRequest | 
apiInstance.unblockContactsBulk(unblockContactsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactsBulkInputObject** | [**UnblockContactsBulkRequest**](UnblockContactsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## unmuteChatsBulk

> unmuteChatsBulk(unmuteChatsBulkInputObject)

Unmute chats (bulk)

Unmute several chats by chat ids or unmute all chats.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let unmuteChatsBulkInputObject = new TextMagicClient.UnmuteChatsBulkRequest(); // UnmuteChatsBulkRequest | 
apiInstance.unmuteChatsBulk(unmuteChatsBulkInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unmuteChatsBulkInputObject** | [**UnmuteChatsBulkRequest**](UnmuteChatsBulkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## unsubscribeContact

> ResourceLinkResponse unsubscribeContact(unsubscribeContactInputObject)

Manually unsubscribe a contact

&gt; Please note, if you unsubscribe a contact, this action cannot be reversed. 

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let unsubscribeContactInputObject = new TextMagicClient.UnsubscribeContactRequest(); // UnsubscribeContactRequest | 
apiInstance.unsubscribeContact(unsubscribeContactInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribeContactInputObject** | [**UnsubscribeContactRequest**](UnsubscribeContactRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBalanceNotificationSettings

> updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject)

Update balance notification settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateBalanceNotificationSettingsInputObject = new TextMagicClient.UpdateBalanceNotificationSettingsRequest(); // UpdateBalanceNotificationSettingsRequest | 
apiInstance.updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBalanceNotificationSettingsInputObject** | [**UpdateBalanceNotificationSettingsRequest**](UpdateBalanceNotificationSettingsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateCallbackSettings

> updateCallbackSettings(updateCallbackSettingsInputObject)

Update callback URL settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateCallbackSettingsInputObject = new TextMagicClient.UpdateCallbackSettingsRequest(); // UpdateCallbackSettingsRequest | 
apiInstance.updateCallbackSettings(updateCallbackSettingsInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackSettingsInputObject** | [**UpdateCallbackSettingsRequest**](UpdateCallbackSettingsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChatDesktopNotificationSettings

> updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject)

Update chat desktop notification settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateChatDesktopNotificationSettingsInputObject = new TextMagicClient.UpdateChatDesktopNotificationSettingsRequest(); // UpdateChatDesktopNotificationSettingsRequest | 
apiInstance.updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChatDesktopNotificationSettingsInputObject** | [**UpdateChatDesktopNotificationSettingsRequest**](UpdateChatDesktopNotificationSettingsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContact

> ResourceLinkResponse updateContact(id, updateContactInputObject)

Edit a contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let updateContactInputObject = new TextMagicClient.UpdateContactRequest(); // UpdateContactRequest | 
apiInstance.updateContact(id, updateContactInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateContactInputObject** | [**UpdateContactRequest**](UpdateContactRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContactNote

> ResourceLinkResponse updateContactNote(id, updateContactNoteInputObject)

Update a contact note

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let updateContactNoteInputObject = new TextMagicClient.UpdateContactNoteRequest(); // UpdateContactNoteRequest | 
apiInstance.updateContactNote(id, updateContactNoteInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateContactNoteInputObject** | [**UpdateContactNoteRequest**](UpdateContactNoteRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCurrentUser

> UpdateCurrentUserResponse updateCurrentUser(updateCurrentUserInputObject)

Edit current account info

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateCurrentUserInputObject = new TextMagicClient.UpdateCurrentUserRequest(); // UpdateCurrentUserRequest | 
apiInstance.updateCurrentUser(updateCurrentUserInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCurrentUserInputObject** | [**UpdateCurrentUserRequest**](UpdateCurrentUserRequest.md)|  | 

### Return type

[**UpdateCurrentUserResponse**](UpdateCurrentUserResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomField

> ResourceLinkResponse updateCustomField(id, updateCustomFieldInputObject)

Edit a custom field

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let updateCustomFieldInputObject = new TextMagicClient.CreateCustomFieldRequest(); // CreateCustomFieldRequest | 
apiInstance.updateCustomField(id, updateCustomFieldInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateCustomFieldInputObject** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomFieldValue

> ResourceLinkResponse updateCustomFieldValue(id, updateCustomFieldValueInputObject)

Edit the custom field value of a specified contact

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 554; // Number | 
let updateCustomFieldValueInputObject = new TextMagicClient.UpdateCustomFieldValueRequest(); // UpdateCustomFieldValueRequest | 
apiInstance.updateCustomFieldValue(id, updateCustomFieldValueInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateCustomFieldValueInputObject** | [**UpdateCustomFieldValueRequest**](UpdateCustomFieldValueRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInboundMessagesNotificationSettings

> updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject)

Update inbound messages notification settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateInboundMessagesNotificationSettingsInputObject = new TextMagicClient.UpdateInboundMessagesNotificationSettingsRequest(); // UpdateInboundMessagesNotificationSettingsRequest | 
apiInstance.updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInboundMessagesNotificationSettingsInputObject** | [**UpdateInboundMessagesNotificationSettingsRequest**](UpdateInboundMessagesNotificationSettingsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateList

> ResourceLinkResponse updateList(id, opts)

Edit a list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let opts = {
  'updateListObject': new TextMagicClient.UpdateListRequest() // UpdateListRequest | 
};
apiInstance.updateList(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateListObject** | [**UpdateListRequest**](UpdateListRequest.md)|  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSenderSetting

> updateSenderSetting(updateSenderSettingInputObject)

Change sender settings

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let updateSenderSettingInputObject = new TextMagicClient.UpdateSenderSettingRequest(); // UpdateSenderSettingRequest | 
apiInstance.updateSenderSetting(updateSenderSettingInputObject).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSenderSettingInputObject** | [**UpdateSenderSettingRequest**](UpdateSenderSettingRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateTemplate

> ResourceLinkResponse updateTemplate(id, updateTemplateInputObject)

Update a template

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let updateTemplateInputObject = new TextMagicClient.CreateTemplateRequest(); // CreateTemplateRequest | 
apiInstance.updateTemplate(id, updateTemplateInputObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateTemplateInputObject** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadAvatar

> uploadAvatar(image)

Upload an avatar

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let image = "/path/to/file"; // File | User avatar. Should be a PNG or JPG file not more than 10 MB.
apiInstance.uploadAvatar(image).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| User avatar. Should be a PNG or JPG file not more than 10 MB. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadContactAvatar

> ResourceLinkResponse uploadContactAvatar(id, image)

Upload an avatar

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let image = "/path/to/file"; // File | Contact avatar. Should be a PNG or JPG file not more than 10 MB.
apiInstance.uploadContactAvatar(id, image).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **image** | **File**| Contact avatar. Should be a PNG or JPG file not more than 10 MB. | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadListAvatar

> ResourceLinkResponse uploadListAvatar(id, image)

Add an avatar for a list

Add an avatar for a list

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let id = 1; // Number | 
let image = "/path/to/file"; // File | List avatar. Should be a PNG or JPG file not more than 10 MB.
apiInstance.uploadListAvatar(id, image).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **image** | **File**| List avatar. Should be a PNG or JPG file not more than 10 MB. | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadMessageAttachment

> UploadMessageAttachmentResponse uploadMessageAttachment(file)

Upload message attachment

Upload a new file to insert it as a link.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let file = "/path/to/file"; // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.
apiInstance.uploadMessageAttachment(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadMessageMMSAttachment

> UploadMessageAttachmentResponse uploadMessageMMSAttachment(file)

Upload message mms attachment

Upload a new file to mms.

### Example

```javascript
import TextMagicClient from 'textmagic-client';
let defaultClient = TextMagicClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TextMagicClient.TextMagicApi();
let file = "/path/to/file"; // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.
apiInstance.uploadMessageMMSAttachment(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

