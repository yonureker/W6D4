
class DOMNodeCollection {
  
  constructor(elements){
    
    this.elements = elements;

  }

  html(string) {
    if (typeof string === 'undefined') {
      return this.elements[0].innerHTML
    } else {
      this.elements.forEach(element => {
        element.innerHTML = string; 
      });
    }
  }

  empty (){
    this.html('');
  }

  append(element){
    if (element instanceof DOMNodeCollection) {
      for (let i = 0; i < element.elements.length; i++) {
        this.elements.forEach(el2 => {
          el2.innerHTML += element.elements[i].outerHTML;
        });
      }
    } else if (typeof element === 'string'){
      this.elements.forEach(el2 => {
        el2.innerHTML += element;
      });
    }else{
      this.elements.forEach(el2 => {
        el2.innerHTML += element.outerHTML;
      });
    }
  }

  attr(attribute, value){
    this.elements.forEach(el2 => {
      el2.setAttribute(attribute,value);
    });
  }

  addClass(name){
    this.elements.forEach(el2 => {
      el2.setAttribute("class", name);
    });
  }

  removeClass(){
    this.elements.forEach(el2 => {
      el2.removeAttribute("class");
    });
  }

  
}

module.exports = DOMNodeCollection;