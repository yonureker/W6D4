
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

  children(){
    let allChildren = [];
    this.elements.forEach(ele => {
      allChildren = allChildren.concat(Array.from(ele.children));
    }); 
    return new DOMNodeCollection(allChildren);
  }

  parent(){
    let parents = [];
    this.elements.forEach(ele => {
      parents.push(ele.parentElement);
    });
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let descendants = [];
    this.elements.forEach(ele => {
      descendants = descendants.concat(Array.from(ele.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(descendants);
  }

  remove() {
    this.elements.forEach(ele => {
      ele.outerHTML = '';
    });
  }
}

module.exports = DOMNodeCollection;