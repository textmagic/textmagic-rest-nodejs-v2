[comment]: <> (HEAD)
# TextMagic JavaScript SDK

This library provides you with an easy way of sending SMS and receiving replies by integrating the TextMagic SMS Gateway into your JavaScript application.

## What Is TextMagic?

TextMagic's application programming interface (API) provides the communication link between your application and TextMagic's SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you've already sent.


[comment]: <> (/HEAD)

## Requirements

- **Node.js 18.0.0** or later
- **npm** or **yarn** for package management

## Installation

### Via npm (Recommended)

```bash
npm install textmagic-client --save
```

### Via yarn

```bash
yarn add textmagic-client
```

## Development

This SDK uses **Babel** to transpile modern ES6+ code to CommonJS for maximum compatibility.

### Build Process

The SDK source code is written in ES6+ (located in `src/`) and is automatically transpiled to ES5/CommonJS (in `dist/`) during installation:

```bash
npm install  # Automatically runs: npm run build
```

### Manual Build

If you need to rebuild the SDK manually:

```bash
npm run build
```

This will transpile all files from `src/` to `dist/` using Babel.

## Quick Start

### Basic Usage

```javascript
const TextMagicClient = require('textmagic-client');

// Get your credentials from: https://app.textmagic.com/settings/api
const defaultClient = TextMagicClient.ApiClient.instance;
const BasicAuth = defaultClient.authentications['BasicAuth'];

BasicAuth.username = 'YOUR_USERNAME';
BasicAuth.password = 'YOUR_API_KEY';

const api = new TextMagicClient.TextMagicApi();

// Test connection
api.ping()
  .then(data => {
    console.log('Ping successful:', data.ping);
  })
  .catch(error => {
    console.error('API Error:', error);
  });
```

### Using async/await (Modern Approach)

```javascript
const TextMagicClient = require('textmagic-client');

async function main() {
  const defaultClient = TextMagicClient.ApiClient.instance;
  const BasicAuth = defaultClient.authentications['BasicAuth'];

  BasicAuth.username = 'YOUR_USERNAME';
  BasicAuth.password = 'YOUR_API_KEY';

  const api = new TextMagicClient.TextMagicApi();

  try {
    // Test connection
    const pingResult = await api.ping();
    console.log('Ping successful:', pingResult.ping);
  } catch (error) {
    console.error('API Error:', error);
  }
}

main();
```

### Sending Messages

```javascript
const TextMagicClient = require('textmagic-client');

async function sendMessage() {
  const defaultClient = TextMagicClient.ApiClient.instance;
  const BasicAuth = defaultClient.authentications['BasicAuth'];

  BasicAuth.username = 'YOUR_USERNAME';
  BasicAuth.password = 'YOUR_API_KEY';

  const api = new TextMagicClient.TextMagicApi();

  const sendMessageRequest = new TextMagicClient.SendMessageRequest();
  sendMessageRequest.text = 'Hello from TextMagic Node.js SDK!';
  sendMessageRequest.phones = '+19993322111,+19993322110';

  try {
    const result = await api.sendMessage(sendMessageRequest);
    console.log('Message sent! Session ID:', result.id);
  } catch (error) {
    console.error('Failed to send message:', error);
  }
}

sendMessage();
```

### Getting Outgoing Messages

```javascript
const TextMagicClient = require('textmagic-client');

async function getMessages() {
  const defaultClient = TextMagicClient.ApiClient.instance;
  const BasicAuth = defaultClient.authentications['BasicAuth'];

  BasicAuth.username = 'YOUR_USERNAME';
  BasicAuth.password = 'YOUR_API_KEY';

  const api = new TextMagicClient.TextMagicApi();

  try {
    const result = await api.getAllOutboundMessages(1, 10);

    result.resources.forEach(message => {
      console.log('Message ID:', message.id);
      console.log('Text:', message.text);
      console.log('Status:', message.status);
      console.log('---');
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getMessages();
```

### Uploading Files

```javascript
const TextMagicClient = require('textmagic-client');
const fs = require('fs');

async function uploadAvatar() {
  const defaultClient = TextMagicClient.ApiClient.instance;
  const BasicAuth = defaultClient.authentications['BasicAuth'];

  BasicAuth.username = 'YOUR_USERNAME';
  BasicAuth.password = 'YOUR_API_KEY';

  const api = new TextMagicClient.TextMagicApi();

  try {
    const fileStream = fs.createReadStream('avatar.jpg');
    const result = await api.uploadListAvatar(fileStream, 3223); // 3223 is sample list ID
    console.log('Avatar uploaded successfully!');
  } catch (error) {
    console.error('Upload failed:', error);
  }
}

uploadAvatar();
```

## Error Handling

The SDK uses Promises and can throw errors that should be properly handled:

```javascript
const TextMagicClient = require('textmagic-client');

async function handleErrors() {
  const defaultClient = TextMagicClient.ApiClient.instance;
  const BasicAuth = defaultClient.authentications['BasicAuth'];

  BasicAuth.username = 'YOUR_USERNAME';
  BasicAuth.password = 'YOUR_API_KEY';

  const api = new TextMagicClient.TextMagicApi();

  try {
    const result = await api.sendMessage({
      text: 'Test message',
      phones: '+1234567890'
    });
    console.log('Success:', result);
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // API returned an error response
      console.error('API Error:', error.response.status);
      console.error('Error details:', error.response.body);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
  }
}

handleErrors();
```

### Common Error Codes

- **401 Unauthorized** - Invalid credentials
- **400 Bad Request** - Invalid parameters
- **404 Not Found** - Resource not found
- **429 Too Many Requests** - Rate limit exceeded
- **500 Internal Server Error** - Server error

## API Documentation

For complete API documentation, including all available methods, parameters, and response formats, please visit:

- 📖 **[TextMagic API Documentation](https://docs.textmagic.com/)**
- 🔗 **[API Reference](https://docs.textmagic.com/#tag/TextMagic-API)**

### Available API Methods

The SDK provides access to all TextMagic API endpoints through the `TextMagicApi` class. Some commonly used methods include:

**Messaging:**
- `sendMessage(request)` - Send SMS messages
- `getAllOutboundMessages(page, limit)` - Get sent messages
- `getAllInboundMessages(page, limit)` - Get received messages
- `deleteMessage(id)` - Delete a message

**Contacts:**
- `createContact(request)` - Create a new contact
- `getContact(id)` - Get contact details
- `updateContact(id, request)` - Update contact information
- `deleteContact(id)` - Delete a contact
- `getAllContacts(page, limit)` - Get all contacts

**Lists:**
- `createList(request)` - Create a contact list
- `getList(id)` - Get list details
- `getAllLists(page, limit)` - Get all lists
- `assignContactsToList(request)` - Add contacts to a list

**Account:**
- `ping()` - Test API connection
- `getUser()` - Get account information
- `getUserBalance()` - Get account balance

For a complete list of available methods, please refer to the generated SDK documentation in the `docs/` directory.

## Migration Guide from v2.x to v3.x

### Breaking Changes

#### Node.js Version Requirement

**v2.x:**
```json
"node": ">=6.0.0"
```

**v3.x:**
```json
"node": ">=18.0.0"
```

**Action Required:** Upgrade your Node.js version to 18.0.0 or later.

```bash
# Check your Node.js version
node -v

# Should output: v18.x.x or higher
```

#### Dependencies Update

**v2.x:**
```json
"superagent": "^3.5.2"
```

**v3.x:**
```json
"superagent": "^10.2.2",
"@babel/cli": "^7.24.0"
```

**Note:**
- Superagent 10.x includes modern features, better TypeScript support, and security improvements.
- Babel is now used to transpile ES6+ code to CommonJS for maximum compatibility.

### What Stays the Same

✅ **Module structure** - No changes required:
```javascript
const TextMagicClient = require('textmagic-client');
const api = new TextMagicClient.TextMagicApi();
```

✅ **Authentication** - Configuration remains the same:
```javascript
const BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR_USERNAME';
BasicAuth.password = 'YOUR_API_KEY';
```

✅ **API Methods** - All methods remain the same:
```javascript
api.sendMessage(request);
api.getAllOutboundMessages(page, limit);
api.getContact(id);
// ... all other methods unchanged
```

### Step-by-Step Migration

1. **Upgrade Node.js to 18.0.0+**
   ```bash
   # Using nvm (recommended)
   nvm install 18
   nvm use 18

   # Verify
   node -v
   ```

2. **Update Package Dependencies**
   ```bash
   # Update to latest version
   npm install textmagic-client@latest --save

   # Or update all dependencies
   npm update
   ```

3. **Update Your Code to Use async/await (Recommended)**

   **Before (v2.x):**
   ```javascript
   api.ping().then(function(data) {
     console.log(data.ping);
   }).catch(function(err) {
     console.error(err);
   });
   ```

   **After (v3.x):**
   ```javascript
   try {
     const data = await api.ping();
     console.log(data.ping);
   } catch (error) {
     console.error(error);
   }
   ```

4. **Test Your Application**
   ```bash
   # Run your tests
   npm test

   # Or test manually
   node your_script.js
   ```

### Compatibility Matrix

|    Feature    | v2.x | v3.x | Compatible? |
|---------------|------|------|-------------|
| Node.js 6-16  |  ✅  |  ❌  |    ❌ No    |
| Node.js 18+   |  ✅  |  ✅  |    ✅ Yes   |
| API Methods   | Same | Same |    ✅ Yes   |
| Models        | Same | Same |    ✅ Yes   |
| Authentication| Same | Same |    ✅ Yes   |
| Promises      |  ✅  |  ✅  |    ✅ Yes   |
| async/await   |  ✅  |  ✅  |    ✅ Yes   |

### Need Help?

- 📖 [Full Documentation](https://docs.textmagic.com/)
- 💬 [Support](https://www.textmagic.com/support/)
- 🐛 [Report Issues](https://github.com/textmagic/textmagic-rest-nodejs-v2/issues)
[comment]: <> (FOOTER)
## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
