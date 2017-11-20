/// <reference types="jquery"/>
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
    Confirm.prototype.confirm_2 = function () {
        $('.atwitter').val();
        $('.atwitter').text();
        $('a.twitter').confirm({
            content: "..."
        });
        $('a.twitter').confirm({
            buttons: {
                hey: function () {
                    location.href = this.$target.attr('href');
                }
            }
        });
    };
    Confirm.prototype.confirm_3 = function () {
        $.alert('Content here', 'Title here');
        $.confirm('A message', 'Title is optional');
        $.dialog('Just to let you know');
    };
    Confirm.prototype.confirm_4 = function () {
        var a = $.confirm({
            lazyOpen: true
        });
        a.open();
        a.close();
        a.toggle(); // toggle open close.
    };
    Confirm.prototype.confirm_5 = function () {
        $.confirm({
            buttons: {
                hello: function (helloButton) {
                    // shorthand method to define a button
                    // the button key will be used as button name
                },
                hey: function (heyButton) {
                    // access the button using jquery
                    this.$$hello.trigger('click'); // click the 'hello' button
                    this.$$hey.prop('disabled', true); // disable the current button using jquery method
                    // jconfirm button methods, all methods listed here
                    this.buttons.hello.setText('Helloooo'); // setText for 'hello' button
                    this.buttons.hey.disable(); // disable with button function provided by jconfirm
                    this.buttons.hey.enable(); // enable with button function provided by jconfirm
                    // the button's instance is passed as the first argument, for quick access
                    heyButton === this.buttons.hey;
                },
                heyThere: {
                    text: 'Hey there!',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'a'],
                    isHidden: false,
                    isDisabled: false,
                    action: function (heyThereButton) {
                        // longhand method to define a button
                        // provides more features
                    }
                }
            }
        });
    };
    Confirm.prototype.confirm_6 = function () {
        $.confirm({
            buttons: {
                hey: function () {
                    // here the button key 'hey' will be used as the text.
                    $.alert('You clicked on "hey".');
                },
                heyThere: {
                    text: 'hey there!',
                    action: function () {
                        $.alert('You clicked on "heyThere"');
                    }
                }
            }
        });
    };
    Confirm.prototype.confirm_7 = function () {
        $.confirm({
            content: 'Time to use your keyboard, press shift, alert, A or B',
            buttons: {
                specialKey: {
                    text: 'On behalf of shift',
                    keys: ['shift', 'alt'],
                    action: function () {
                        $.alert('Shift or Alt was pressed');
                    }
                },
                alphabet: {
                    text: 'A, B',
                    keys: ['a', 'b'],
                    action: function () {
                        $.alert('A or B was pressed');
                    }
                }
            }
        });
    };
    Confirm.prototype.confirm_8 = function () {
        $.confirm({
            closeIcon: true,
            buttons: {
                buttonA: {
                    text: 'button a',
                    action: function (buttonA) {
                        this.buttons.resetButton.setText('reset button!!!');
                        this.buttons.resetButton.disable();
                        this.buttons.resetButton.enable();
                        this.buttons.resetButton.hide();
                        this.buttons.resetButton.show();
                        this.buttons.resetButton.addClass('btn-red');
                        this.buttons.resetButton.removeClass('btn-red');
                        // or
                        this.$$resetButton; // button's jquery element reference, go crazy
                        this.buttons.buttonA == buttonA; // both are the same.
                        return false; // prevent the modal from closing
                    }
                },
                resetButton: function (resetButton) { }
            }
        });
    };
    Confirm.prototype.confirm_9 = function () {
        $.confirm({
            title: 'Encountered an error!',
            content: 'Something went downhill, this may be serious',
            type: 'red',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red',
                    action: function () { }
                },
                close: function () { }
            }
        });
    };
    Confirm.prototype.confirm_10 = function () {
        $.confirm({
            icon: 'glyphicon glyphicon-heart',
            title: 'glyphicon'
        });
        $.confirm({
            icon: 'fa fa-warning',
            title: 'font-awesome'
        });
        $.confirm({
            icon: 'fa fa-spinner fa-spin',
            title: 'Working!',
            content: 'Sit back, we are processing your request!'
        });
    };
    Confirm.prototype.confirm_11 = function () {
        $.confirm({
            closeIcon: true
        });
        $.confirm({
            closeIcon: true,
            closeIconClass: 'fa fa-close'
        });
    };
    Confirm.prototype.confirm_12 = function () {
        $.confirm({
            closeIcon: function () {
                return false;
            },
            buttons: {
                aRandomButton: function () {
                    $.alert('A random button is called, and i prevent closing the modal');
                    return false; // you shall not pass
                },
                close: function () { }
            }
        });
    };
    Confirm.prototype.confirm_13 = function () {
        $.confirm({
            columnClass: 'small'
        });
        $.confirm({
            columnClass: 'col-md-4 col-md-offset-4'
        });
        $.confirm({
            columnClass: 'col-md-12'
        });
        $.confirm({
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            containerFluid: true
        });
    };
    Confirm.prototype.confirm_14 = function () {
        $.confirm({
            boxWidth: '30%',
            useBootstrap: false
        });
        $.confirm({
            boxWidth: '500px',
            useBootstrap: false
        });
    };
    Confirm.prototype.confirm_15 = function () {
        $.confirm({
            bootstrapClasses: {
                container: 'container',
                containerFluid: 'container-fluid',
                row: 'row'
            }
        });
        $.confirm({
            title: 'Hello there',
            content: 'click and hold on the title to drag',
            draggable: true
        });
        $.confirm({
            title: 'Hello there',
            content: 'Drag this modal out of the window',
            draggable: true,
            dragWindowBorder: false
        });
        $.confirm({
            title: 'Hello there',
            content: 'try to drag this modal out of the window',
            draggable: true,
            dragWindowGap: 0
        });
    };
    Confirm.prototype.ajaxLoading = function () {
        $.confirm({
            title: 'Title',
            content: 'url:text.txt',
            onContentReady: function () {
                var self = this;
                this.setContentPrepend('<div>Prepended text</div>');
                setTimeout(function () {
                    self.setContentAppend('<div>Appended text after 2 seconds</div>');
                }, 2000);
            },
            columnClass: 'medium'
        });
        $.confirm({
            content: function () {
                var self = this;
                return $.ajax({
                    url: 'bower.json',
                    dataType: 'json',
                    method: 'get'
                }).done(function (response) {
                    self.setContent('Description: ' + response.description);
                    self.setContentAppend('<br>Version: ' + response.version);
                    self.setTitle(response.name);
                }).fail(function () {
                    self.setContent('Something went wrong.');
                });
            }
        });
        $.confirm({
            content: 'url:text.txt',
            contentLoaded: function (data, status, xhr) {
                // data is already set in content
                this.setContentAppend('<br>Status: ' + status);
            }
        });
        $.confirm({
            content: function () {
                var self = this;
                self.setContent('Checking callback flow');
                return $.ajax({
                    url: 'bower.json',
                    dataType: 'json',
                    method: 'get'
                }).done(function (response) {
                    self.setContentAppend('<div>Done!</div>');
                }).fail(function () {
                    self.setContentAppend('<div>Fail!</div>');
                }).always(function () {
                    self.setContentAppend('<div>Always!</div>');
                });
            },
            contentLoaded: function (data, status, xhr) {
                self.setContentAppend('<div>Content loaded!</div>');
            },
            onContentReady: function () {
                this.setContentAppend('<div>Content ready!</div>');
            }
        });
    };
    Confirm.prototype.autoClose = function () {
        $.confirm({
            title: 'Delete user?',
            content: 'This dialog will automatically trigger \'cancel\' in 6 seconds if you don\'t respond.',
            autoClose: 'cancelAction|8000',
            buttons: {
                deleteUser: {
                    text: 'delete user',
                    action: function () {
                        $.alert('Deleted the user!');
                    }
                },
                cancelAction: function () {
                    $.alert('action is canceled');
                }
            }
        });
        $.confirm({
            title: 'Logout?',
            content: 'Your time is out, you will be automatically logged out in 10 seconds.',
            autoClose: 'logoutUser|10000',
            buttons: {
                logoutUser: {
                    text: 'logout myself',
                    action: function () {
                        $.alert('The user was logged out');
                    }
                },
                cancel: function () {
                    $.alert('canceled');
                }
            }
        });
    };
    Confirm.prototype.backgroundDismisse = function () {
        $.confirm({
            backgroundDismiss: true
        });
        $.confirm({
            backgroundDismiss: function () {
                return false; // modal wont close.
            }
        });
        $.confirm({
            backgroundDismiss: function () {
                return 'buttonName'; // the button will handle it
            }
        });
        $.confirm({
            backgroundDismiss: 'buttonName',
            content: 'in here the backgroundDismiss action is handled by buttonName' +
                '<div class="checkbox"><label><input type="checkbox" id="enableCheckbox"> Enable backgroundDismiss</label></div>',
            buttons: {
                buttonName: function () {
                    var $checkbox = this.$content.find('#enableCheckbox');
                    return $checkbox.prop('checked');
                },
                close: function () { }
            }
        });
    };
    Confirm.prototype.backgroundDismisseAnimation = function () {
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'shake'
        });
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'glow'
        });
    };
    Confirm.prototype.escapeKey = function () {
        $.confirm({
            escapeKey: true,
            backgroundDismiss: false
        });
        $.confirm({
            escapeKey: 'buttonName',
            buttons: {
                buttonName: function () {
                    $.alert('Button name was called');
                },
                close: function () {
                }
            }
        });
    };
    Confirm.prototype.rtlSupport = function () {
        $.alert({
            title: 'پیغام',
            content: 'این یک متن به زبان شیرین فارسی است',
            rtl: true,
            closeIcon: true,
            buttons: {
                confirm: {
                    text: 'تایید',
                    btnClass: 'btn-blue',
                    action: function () {
                        $.alert('تایید شد.');
                    }
                },
                cancel: {
                    text: 'انصراف',
                    action: function () {
                    }
                }
            }
        });
    };
    Confirm.prototype.callBack = function () {
        $.confirm({
            title: false,
            content: 'url:callback.html',
            onContentReady: function () {
                // when content is fetched & rendered in DOM
                alert('onContentReady');
                var self = this;
                this.buttons.ok.disable();
                this.$content.find('.btn').click(function () {
                    self.$content.find('input').val('Chuck norris');
                    self.buttons.ok.enable();
                });
            },
            contentLoaded: function (data, status, xhr) {
                // when content is fetched
                alert('contentLoaded: ' + status);
            },
            onOpenBefore: function () {
                // before the modal is displayed.
                alert('onOpenBefore');
            },
            onOpen: function () {
                // after the modal is displayed.
                alert('onOpen');
            },
            onClose: function () {
                // before the modal is hidden.
                alert('onClose');
            },
            onDestroy: function () {
                // when the modal is removed from DOM
                alert('onDestroy');
            },
            onAction: function (btnName) {
                // when a button is clicked, with the button name
                alert('onAction: ' + btnName);
            },
            buttons: {
                ok: function () {
                }
            }
        });
    };
    Confirm.prototype.globalSettings = function () {
        jconfirm.defaults = {
            title: 'Hello',
            titleClass: '',
            type: 'default',
            typeAnimated: true,
            draggable: true,
            dragWindowGap: 15,
            dragWindowBorder: true,
            animateFromElement: true,
            smoothContent: true,
            content: 'Are you sure to continue?',
            buttons: {},
            defaultButtons: {
                ok: {
                    action: function () {
                    }
                },
                close: {
                    action: function () {
                    }
                }
            },
            contentLoaded: function (data, status, xhr) {
            },
            icon: '',
            lazyOpen: false,
            bgOpacity: null,
            theme: 'light',
            animation: 'scale',
            closeAnimation: 'scale',
            animationSpeed: 400,
            animationBounce: 1,
            rtl: false,
            container: 'body',
            containerFluid: false,
            backgroundDismiss: false,
            backgroundDismissAnimation: 'shake',
            autoClose: false,
            closeIcon: null,
            closeIconClass: false,
            watchInterval: 100,
            columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
            boxWidth: '50%',
            scrollToPreviousElement: true,
            scrollToPreviousElementAnimate: true,
            useBootstrap: true,
            offsetTop: 40,
            offsetBottom: 40,
            bootstrapClasses: {
                container: 'container',
                containerFluid: 'container-fluid',
                row: 'row'
            },
            onContentReady: function () { },
            onOpenBefore: function () { },
            onOpen: function () { },
            onClose: function () { },
            onDestroy: function () { },
            onAction: function () { }
        };
    };
    Confirm.prototype.api = function () {
        var jc = $.confirm({
            title: 'awesome',
            onContentReady: function () {
                // this === jc
                //jc.setTitle(title: string);
            }
        });
    };
    return Confirm;
}());
var firstName = 'Pierre';
var lastName = 'Yotti';
var type = new Confirm(firstName, lastName);
