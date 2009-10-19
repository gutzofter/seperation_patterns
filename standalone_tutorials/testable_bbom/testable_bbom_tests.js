//******************************************************************************
// newContactsView tests
//******************************************************************************

should('be valid contactsViewController object').test = function() {
    var dom = newFakeDOM();
    var view = newBBOM_ContactsViewController(dom);

    this.is(view);
}

should('show contacts in DOM').test = function() {
    var expectedAction = actions.show;
    var dom = newFakeDOM();

    newBBOM_ContactsViewController(dom);

    this.isEqual(expectedAction.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(expectedAction.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(expectedAction.label), dom.htmlText, "html");
    this.isEqual(expectedAction.style, dom.displayStyleCmd, "display cmd");
}

should('hide contacts in DOM single click').test = function() {
    var expectedAction = actions.hide;
    var dom = newFakeDOM();

    var view = newBBOM_ContactsViewController(dom);
    view.click();

    this.isEqual(expectedAction.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(expectedAction.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(expectedAction.label), dom.htmlText, "html");
    this.isEqual(expectedAction.style, dom.displayStyleCmd, "display cmd");
}

should('show contacts in DOM two clicks').test = function() {
    var expectedAction = actions.show;
    var dom = newFakeDOM();

    var view = newBBOM_ContactsViewController(dom);
    view.click();
    view.click();

    this.isEqual(expectedAction.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(expectedAction.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(expectedAction.label), dom.htmlText, "html");
    this.isEqual(expectedAction.style, dom.displayStyleCmd, "display cmd");
}

should('hide contacts in DOM three clicks').test = function() {
    var expectedAction = actions.hide;
    var dom = newFakeDOM();

    var view = newBBOM_ContactsViewController(dom);
    view.click();
    view.click();
    view.click();

    this.isEqual(expectedAction.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(expectedAction.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(expectedAction.label), dom.htmlText, "html");
    this.isEqual(expectedAction.style, dom.displayStyleCmd, "display cmd");
}

