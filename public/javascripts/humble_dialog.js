var dom;
var view;
var model;
var controller;

function newContactsController(view, model) {
    var Controller = new Object();

    Controller.view = view;
    Controller.model = model;

    Controller.isShow = true;

    Controller.click = function() {
        var action = null;

        if(this.isShow){
            action = this.model.hideAction();
            this.isShow = false;
        }
        else {
            action = this.model.showAction();
            this.isShow = true;
        }

        this.view.changeContactsDisplay(action);
    }

    Controller.view.changeContactsDisplay(Controller.model.showAction());

    return Controller;
}

function newView() {
    var DOM = new Object();
    
    DOM.insertInnerHTML = function(id, html) {
        document.getElementById(id).innerHTML = html;
    }

    DOM.changeDisplayStyle = function(id, style) {
        document.getElementById(id).style.display = style;
    }

    return DOM;

}

var linkHTML = function(label) {
    return '<a href="#" onclick = "controller.click(); return false;">' + label + '</a>';
}

function newContactsView(dom) {
    var View = new Object();

    View.dom = dom;

    View.changeContactsDisplay = function(action) {
        this.dom.insertInnerHTML(action.control, linkHTML(action.label));
        this.dom.changeDisplayStyle(action.list, action.style);
    }

    return View;
}

var control = 'contacts-toggle';
var list = 'contacts';

var actions =
    {
        hide: {
            label: 'show',
            control: control,
            list: list,
            style: 'none'
    },
        show: {
            label: 'hide',
            control: control,
            list: list,
            style: 'block'
    }
};

function newInMemoryContactsModel() {
    var Elements = new Object();

    Elements.hideAction = function() {
        return actions.hide;
    }

    Elements.showAction = function() {
        return actions.show;
    }

    return Elements;
}

function init() {
    dom = newView();
    model = newInMemoryContactsModel();
    view = newContactsView(dom);
    controller = newContactsController(view, model);
}

window.onload = init;

//http://jsbin.com/ebuce/edit