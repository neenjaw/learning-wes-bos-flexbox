window.onload = function(){
document.querySelector('.close').onclick = function(){
    this.parentNode.parentNode
    .removeChild(this.parentNode);
    return false;
  };
};
