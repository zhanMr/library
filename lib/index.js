import EventUtil from './event';


EventUtil.addHandler(document.getElementById('box'), 'click', function(event){
    console.log(this === event.currentTarget);

});


EventUtil.addHandler(document.getElementById('test'), 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.stopPropagation(event);

});


