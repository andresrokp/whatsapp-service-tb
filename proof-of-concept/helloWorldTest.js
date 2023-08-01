require('dotenv').config()

async function sendMessage() {
  const accessToken = process.env.FB_APP_TOKEN;
  const phoneID = process.env.PHONE_ID;
  const destinyNum = process.env.DESTINY_NUM;
  const url = `https://graph.facebook.com/v17.0/${phoneID}/messages`;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const messageData = {
    messaging_product: 'whatsapp',
    to: `${destinyNum}`,
    type: 'template',
    template: {
      name: 'hello_world',
      language: {
        code: 'en_US',
      },
    },
  };

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(messageData),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Message sent successfully:', data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

// Call the function to send the message
sendMessage();
