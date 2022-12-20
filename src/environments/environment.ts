// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URLStel: 'http://app.stelorder.com/app/', 
  URLContab: 'http://rest.contabilium.com/',
  APIKEY: 'ilb2NhAwMoAW39GJ1f1ln9dnxjTwFWH6YgXiMbpn',
  accept: 'application/json; charset=utf-8',
  client_id: 'soporte@qumax.com.ar',
  client_secret: 'Qumax1234',
  grant_type: '{{credentials}}'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
