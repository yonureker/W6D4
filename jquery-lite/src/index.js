const DOMNodeCollection = require('./dom_node_collection.js');

Window.prototype.$1 = function(selector){
  if(typeof(selector) === "string"){
    let selected = this.document.querySelectorAll(selector);
    // let selectedArr = Array.from(selected);
    let x = new DOMNodeCollection(Array.from(selected));
    return x;
  }else if (selector instanceof HTMLElement){
    return new DOMNodeCollection([selector]);
  }
}