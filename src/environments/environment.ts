// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyDFew-L28USW26903K_-STRZfdilXOBTR4',
    authDomain: 'fcc-voting-app-55f23.firebaseapp.com',
    databaseURL: 'https://fcc-voting-app-55f23.firebaseio.com',
    projectId: 'fcc-voting-app-55f23',
    storageBucket: '',
    messagingSenderId: '521557440223'
  }
};
