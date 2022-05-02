function openMenu() {
    document.body.classList += " menu-open"
    /*if (document.body.classList.length == 2) {
        document.body.classList = ""
        document.body.classList += " menu-open"
    } else{
        document.body.classList += " menu-open"
    }*/
    /* Ya que es un string se pone espacio por si hay otras clases
    */ 
    /* += es anadir on top de, esto agarra el body la clase */
}

function closeMenu(){
    document.body.classList.remove('menu-open')
    /*if (document.body.classList.length == 2) {
        document.body.classList = ""
        document.body.classList += " close-menu"
    } else{
        document.body.classList += " close-menu"
    }*/
}

/*tambien solo se podia hacer .remove('menu-open') pero ya que*/ 


