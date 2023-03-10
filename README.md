# files-base64
 Some functions to handle files and base64 strings
 
 ## Getting Started

```
npm i files-base64@latest
```
### Usage
here is example for `fileToBase64` function.\
\
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
```
here is example for `fileToBase64` function.\
\
The function takes two arguments: url which is the base64 representation of the file, and fileName which is an optional argument that sets the name of the file. It returns a File object that can be used for further processing.
```
import { fileToBase64 } from "files-base64"

const base64Url = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUVFRcVFRU...";
const file = await base64ToFile(base64Url, "image.jpeg");
console.log(file);
```
#### Dependencies
The functions use the FileReader API, the fetch API, and the File constructor, which are available in modern browsers. There are no other dependencies.


