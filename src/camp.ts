const PiCamera = require('pi-camera');
var fs = require('fs');
 
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/../img/test.jpg`,
  width: 1024,
  height: 768,
  nopreview: true,
});



myCamera.snap()
  .then((res) => {
    console.error(res);
  })
  .catch((err) => {
     console.error(err);
  });
