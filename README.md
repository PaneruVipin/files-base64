# files-base64
 Some functions to handle files and base64 strings
 
 ## Getting Started

```
npm i files-base64@latest
```
### usage
The function takes a file as an argument and returns a Promise that resolves with the base64 representation of the file. If there is an error, the Promise will be rejected with the error.
```
import { fileToBase64 } from "files-base64"

const inputFile = document.querySelector('input[type="file"]').files[0];  // file
fileToBase64(inputFile)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
````
