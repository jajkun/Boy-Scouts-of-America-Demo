const Emitter = function() {
  this.events = {}
};

Emitter.prototype.subscribe = function( eName, cb ) {
  this.events[eName] = this.events[eName] || [];
  this.events[eName].push(cb);

  return {
    release: () => {
      let i = this.events[eName].indexOf(cb);
      this.events[eName].splice(i, 1);
      if (!this.events[eName].length) delete this.events[eName];
    }
  }
};

Emitter.prototype.emit = function( eName, ...args ) {
  if ( !this.events[eName] ) throw new Error('Event ${eName} doesn\'t exist');
  this.events[eName].forEach(el => el.call(this, ...args));
};

var emitter = new Emitter();
var sub = emitter.subscribe('click',function(e){
  console.log(e);
});
emitter.emit('click',['a','b','v']);
//sub.release();
//emitter.emit('click',['a','b','v']);

