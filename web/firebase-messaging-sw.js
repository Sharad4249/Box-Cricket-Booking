importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
      apiKey: 'AIzaSyCQicCiZLsEJm-sYq3fnwMrXr86EX4KOzI',
      authDomain: 'boxcricket-3fba1.firebaseapp.com',
      databaseURL: 'https://boxcricket-3fba1.firebaseio.com',
      projectId: 'boxcricket-3fba1',
      storageBucket: 'boxcricket-3fba1.appspot.com',
      messagingSenderId: '1082041922111',
      appId: '1:1082041922111:web:9577ce3858a73bcedd7e8a',
      measurementId: 'G-Y1FGECQJT1',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});

