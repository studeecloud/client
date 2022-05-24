# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## APIs

### Twilio Video API

Create a Room via CLI:

```bash
curl -XPOST 'https://video.twilio.com/v1/Rooms' -u '{API SID}:{API Secret}' -d 'UniqueName=DailyStandup'
```

Example of Room object:

```json
{
  "unique_name": "DailyStandup",
  "date_updated": "2022-05-15T17:26:32Z",
  "media_region": "us1",
  "max_participant_duration": 14400,
  "duration": null,
  "video_codecs": ["VP8", "H264"],
  "large_room": false,
  "enable_turn": true,
  "empty_room_timeout": 5,
  "sid": "RM4cc18aa4a604d878f7f1fb5b5e2f2327",
  "type": "group",
  "status_callback_method": "POST",
  "status": "in-progress",
  "audio_only": false,
  "unused_room_timeout": 5,
  "max_participants": 50,
  "max_concurrent_published_tracks": 170,
  "url": "https://video.twilio.com/v1/Rooms/RM4cc18aa4a604d878f7f1fb5b5e2f2327",
  "record_participants_on_connect": false,
  "account_sid": "AC715697874243866d7b71c7fc02a56f3d",
  "end_time": null,
  "date_created": "2022-05-15T17:26:32Z",
  "status_callback": null,
  "links": {
    "recordings": "https://video.twilio.com/v1/Rooms/RM4cc18aa4a604d878f7f1fb5b5e2f2327/Recordings",
    "participants": "https://video.twilio.com/v1/Rooms/RM4cc18aa4a604d878f7f1fb5b5e2f2327/Participants",
    "recording_rules": "https://video.twilio.com/v1/Rooms/RM4cc18aa4a604d878f7f1fb5b5e2f2327/RecordingRules"
  }
}
```

Generate unique user token, where <identity> is a string identifying the user:

```bash
twilio token:video --identity=<identity>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
