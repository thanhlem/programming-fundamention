'use strict'

/***
 * Source:
 * https://stackoverflow.com/questions/2443901/random-object-generator-in-javascript
 *
 * Bạn không cần phải đọc vào bộ thư viện này quá nhiều, chỉ cần biết rằng nhiệm
 * vụ của nó ra tạo ra các object một cách ngẫu nhiên không đoán trước được.
 */

function createRandomObj(fieldCount, allowNested)
{
  var generatedObj = {};

  for(var i = 0; i < fieldCount; i++) {
    var generatedObjField;

    switch(randomInt(allowNested ? 6 : 5)) {

      case 0:
        generatedObjField = randomInt(1000);
        break;

      case 1:
        generatedObjField = Math.random();
        break;

      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false;
        break;

      case 3:
        generatedObjField = randomString(randomInt(4) + 4);
        break;

      case 4:
        generatedObjField = null;
        break;

      case 5:
        generatedObjField = createRandomObj(fieldCount, allowNested);
        break;
    }
    generatedObj[randomString(8)] = generatedObjField;
  }
  return generatedObj;
}

// helper functions

function randomInt(rightBound)
{
  return Math.floor(Math.random() * rightBound);
}

function randomString(size)
{
  var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var generatedString = '';
  for(var i = 0; i < size; i++) {
    generatedString += alphaChars[randomInt(alphaChars.length)];
  }

  return generatedString;
}