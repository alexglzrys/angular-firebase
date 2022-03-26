// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-firebase-chart',
    appId: '1:52442432718:web:e0d3cb08d46685893e3c9f',
    storageBucket: 'angular-firebase-chart.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCa5xK2uQNFhjEHR-jxon8RVoBoqGRwj-Y',
    authDomain: 'angular-firebase-chart.firebaseapp.com',
    messagingSenderId: '52442432718',
  },
  production: false,
  api: 'http://localhost:5000/angular-firebase-chart/us-central1/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
