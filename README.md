# ngrok_usage
```npm install```

```node server.js```

open new terminal

```npm install -g ngrok```

visit and sign up to https://dashboard.ngrok.com/get-started/setup/windows

scroll down and enter your configuration command to your terminal from the website

it should looks like that:

ngrok config add-authtoken your_access_token_here

Run your app

Run ngrok by using command:

ngrok http your_app_port_number

for example:

```ngrok http 3000```

and you are done! you shoud see somethink like that in new cmd:

Forwarding https://2443-195-91-2-216.ngrok-free.app -> http://localhost:3000

https://2443-195-91-2-216.ngrok-free.app -> is your public url to your app
