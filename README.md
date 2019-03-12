# sw-starships-api


# notes from reading assignments

##  Url search params

 * is an interface that defines utility methods to work with query staring methods.

 * an  object implementing URLSearchParams can be directly used in a for...of structure. 

 * creates and returns a new URLSearchParams object. beginning with '?'.

 ## URLSearchParams toString()
 * to string, a method of the URLSearchParams interface returns a query string suitable for use in a URL
 * returns a dom string without th question mark.
 
 ## Location 
 * an interface represents the location of the object it is linked to. Changes on  it are reflected on the object it relates to Both the document and the window interface have such a linked location accessible vis document.location and window.location.
 * reference MDN documentation for list of properties and methods.

 ## hashchange

 * is an event thats fired when the fragmnet identifier of the URL has changed the part beginning with #

 ## Promises chaining and Promise.all

 # MDN using promises (chaining)

 *  a promise is an object representing the eventual completion or failure of an asynchronous
 operation. 
 * a promise is a returned object to which you attach callbacks instead of passing to a function.
 * .then
 * a promise comes with some guarantees.
 * callbacks will never be called before the completion of the current run of the javaScript event loop
 * Mulitple callbacks may be added by calling then() several times. executed one after another in the order in which they werer inserted.
 * most often used with arrow functions
 * always return results otherwise call backs won't catch the result of a previous promise
 * it's possible to chain after a failure using a catch method which becomes useful to accomplish new actions even after an action failed in the chain.
 * essential for functional composition of asynchronous operations catching all errors thrown exceptions and programming errors.
 * nesting is a control structure to limit the scope of the catch statements.



