/// <reference types="jquery"/>
/// <reference path="index.d.ts" />
namespace server {
    export interface Iperson {
        title: string,
            content: string,


    }
}

class Confirm implements server.Iperson {
    private title_: string;
    private conTent_: string;
    constructor(public title: string, public content: string) {
        this.title_ = title;
        this.conTent_ = content;
    }


    public confirm() {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function() {
                    $.alert('Confirmed!');
                },
                cancel: function(cancel: string) {
                    $.alert('Canceled! ' + cancel);
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function() {
                        alert('Something else?');
                    }
                }
            }
        });
    }

    public alert() {
        $.alert({
            title: 'Alert!',
            content: 'Simple alert!',
        });
    }

    public confirm1() {
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
                    action: function() {
                        let name = this.$content.find('.name').val();
                        if (!name) {
                            $.alert('provide a valid name');
                            return false;
                        }
                        $.alert('Your name is ' + name);
                    }
                },
                cancel: function() {
                    //close
                },
            },
            onContentReady: function() {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function(e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        });

    }

    public dialog() {
        $.dialog({
            title: 'Text content!',
            content: 'Simple modal!'
        });
    }
    public confirm_2() {
        $('.atwitter').val();
        $('.atwitter').text();
        $('a.twitter').confirm({
            content: "...",
        });
        $('a.twitter').confirm({
            buttons: {
                hey: function() {
                    location.href = this.$target.attr('href');
                }
            }
        });
    }

    public confirm_3(){
      $.alert('Content here', 'Title here');
      $.confirm('A message', 'Title is optional');
      $.dialog('Just to let you know');
    }

    public confirm_4(){
      var a = $.confirm({
        lazyOpen: true,
        });
        
    }

}


var firstName: string = 'Pierre';
var lastName: string = 'Yotti';
var type = new Confirm(firstName, lastName);
