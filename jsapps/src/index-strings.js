//strings 
var firstName = "Subramanian"; //; is optional in javascript
let lastName = 'Murugan'
let fullName = firstName + lastName
console.log("Name" + fullName)
console.log('Name', fullName)
//es 6 string polation syntax 
let name = `${firstName} ${lastName}`
console.log(`Name is ${name}`)
//es 5 multi line strings
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)
// es 6 back tic notation is used for string concatation.
let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)

