import EventUtil from './event';
import Util from './util';
let tool = new Util();

EventUtil.addHandler(document.getElementById('box'), 'click', function(event){
    console.log(this === event.currentTarget);

});

EventUtil.addHandler(document.getElementById('test'), 'click', function(event){
    event = EventUtil.getEvent(event);
    EventUtil.stopPropagation(event);

});

console.log(tool.bubbleSort([100,1,2,3,1,6,0,9]));
console.log(tool.quickSort([100,1,2,3,1,6,0,9]));