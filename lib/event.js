//跨浏览器事件处理程序
const EventUtil = {
    //绑定事件
    addHandler: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type, handler);
        }else{
            element['on' + type] = handler;
        }
    },
    //解除事件
    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){
            element.detachEvent('on' + type, handler);
        }else{
            element['on' + type] = null;
        }
    },
    //阻止默认行为
    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancalBubble = true;
        }
    },
    getEvent: function(event){
        return event ||  window.event
    },
    getTarget: function(event){
        return event.target || event.srcElement;
    }
}
export default EventUtil;