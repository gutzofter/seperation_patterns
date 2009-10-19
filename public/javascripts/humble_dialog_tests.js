//******************************************************************************
// newContactsController tests
//******************************************************************************

should('be valid contactsController object').test = function() {
    var view = newMockView();
    var model = newInMemoryContactsModel();

    this.is(newContactsController(view, model));
}

should('view, after init is in show state').test = function() {
    var view = newMockView();
    var model = newInMemoryContactsModel();
    newContactsController(view, model);


    this.isEqual(actions.show, view.getAction());
}

should('view, after click is in hide state').test = function() {
    var view = newMockView();
    var model = newInMemoryContactsModel();
    var controller = newContactsController(view, model);

    controller.click();

    this.isEqual(actions.hide, view.getAction());
}

should('view, after two clicks is in show state').test = function() {
    var view = newMockView();
    var model = newInMemoryContactsModel();
    var controller = newContactsController(view, model);

    controller.click();
    controller.click();

    this.isEqual(actions.show, view.getAction());
}

should('view, after three clicks is in hide state').test = function() {
    var view = newMockView();
    var model = newInMemoryContactsModel();
    var controller = newContactsController(view, model);

    controller.click();
    controller.click();
    controller.click();

    this.isEqual(actions.hide, view.getAction());
}



//******************************************************************************
// newContactsView tests
//******************************************************************************

should('be valid contactsView object').test = function() {
    var view = newContactsView();

    this.is(view);
}

should('show contacts in DOM').test = function() {
    var dom = newFakeDOM();

    var view = newContactsView(dom);

    action = actions.show;
    view.changeContactsDisplay(action);

    this.isEqual(action.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(action.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(action.label), dom.htmlText, "html");
    this.isEqual(action.style, dom.displayStyleCmd, "display cmd");
}

should('hide contacts in DOM').test = function() {
    var dom = newFakeDOM();

    var view = newContactsView(dom);

    action = actions.hide;
    view.changeContactsDisplay(action);

    this.isEqual(action.control, dom.innerIdName, "element contacts toggle");
    this.isEqual(action.list, dom.dispIdName, "element contacts");
    this.isEqual(linkHTML(action.label), dom.htmlText, "html");
    this.isEqual(action.style, dom.displayStyleCmd, "display cmd");
}

//******************************************************************************
// newInMemoryContactsModel tests
//******************************************************************************

should('be valid newInMemoryContactsModel object').test = function() {
    this.is(newInMemoryContactsModel());
}

should('hide action in newInMemoryContactsModel object').test = function() {
    var model = newInMemoryContactsModel();
    
    this.isEqual(actions.hide, model.hideAction());
}

should('hide action in newInMemoryContactsModel object').test = function() {
    var model = newInMemoryContactsModel();

    this.isEqual(actions.show, model.showAction());
}

