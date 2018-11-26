class Subject {
    constructor(name, observers) {
        this.name = name;
        this.observers = observers || [];
    }

    notify(data) {
        this.observers.forEach(element => {
            element.handle(data);
        });
    }

    attach(ob) {
        this.observers.push(ob)
    }

}


class Observer {
    constructor() {
        this.cb = null;
        this.subject = null;
    }

    subscribe(subject, cb) {
        this.subject = subject;
        this.cb = cb;
        this.subject.attach(this);
    }

    handle(data) {
        this.cb(data);
    }
}



// 练习 (模仿onfire api大致实现)
class Onfire {
    constructor() {
        this.subjectArr = [];
    }
    
    eventIsExist(event_name) {
        for(let i=0; i<this.subjectArr.length; i++) {
            if(this.subjectArr[i].name == event_name) {
                return this.subjectArr[i]
            }
        }
        return false;
    }

    on(event_name, cb) {
        let curSubject = null;

        if(!this.eventIsExist(event_name)) {
           curSubject = new Subject(event_name);
        }else {
            curSubject = this.eventIsExist(event_name);
        }
        
        let observer = new Observer();
        this.subjectArr.push(curSubject);

        observer.subscribe(curSubject, cb);
    }

    fire(event_name, data) {
        let tarSubject = this.subjectArr.find(item => {
            return item.name == event_name
        })
        tarSubject.notify(data);
    }
}


module.exports = {
    onfire: new Onfire()
}


