/// <reference path="index.d.ts" />
var Confirm = /** @class */ (function () {
    function Confirm(title, content) {
        this.title = title;
        this.content = content;
        this.title_ = title;
        this.conTent_ = content;
    }
    Confirm.prototype.confirm = function () {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function () {
                    $.alert('Confirmed!');
                },
                cancel: function (cancel) {
                    $.alert('Canceled! ' + cancel);
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        alert('Something else?');
                    }
                }
            }
        });
    };
    Confirm.prototype.alert = function () {
        $.alert({
            title: 'Alert!',
            content: 'Simple alert!'
        });
    };
    Confirm.prototype.confirm1 = function () {
        $.confirm({
            title: 'Prompt!',
            content: '' +
                '<form action="" class="formName">' +
                '<div class="form-group">' +
                '<label>Enter something here</label>' +
                '<input type="text" placeholder="Your name" class="name form-control" required />' +
                '</div>' +
                '</form>',
            buttons: {
                formSubmit: {
                    text: 'Submit',
                    btnClass: 'btn-blue',
                    action: function () {
                        var name = this.$content.find('.name').val();
                        if (!name) {
                            $.alert('provide a valid name');
                            return false;
                        }
                        $.alert('Your name is ' + name);
                    }
                },
                cancel: function () {
                    //close
                }
            },
            onContentReady: function () {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function (e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        });
    };
    Confirm.prototype.dialog = function () {
        $.dialog({
            title: 'Text content!',
            content: 'Simple modal!'
        });
    };
    return Confirm;
}());
var firstName = 'Pierre';
var lastName = 'Yotti';
var type = new Confirm(firstName, lastName);
