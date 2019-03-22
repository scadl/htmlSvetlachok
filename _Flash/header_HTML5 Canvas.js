(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"header_HTML5 Canvas_atlas_", frames: [[248,1002,50,100],[0,0,500,1000],[502,599,295,295],[502,302,295,295],[502,896,295,295],[126,1002,120,102],[0,1002,124,101],[0,1193,800,100],[502,0,300,300]]}
];


// symbols:



(lib.Candle_body = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Candle_fire = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ff_bodyback = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ff_body = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ff_lightboxon = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ff_wingleft = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ff_wingright = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fon_header = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.slovologo = function() {
	this.spriteSheet = ss["header_HTML5 Canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgFCKQgNgDgDgCQgWgRgLgzQgJglAAgmQAAgpAJgfQANgtAdgJIAMAAQADAAAGgHQAHAHACAAIANAAQAYAKAEA2IgfAAQgCgVgCgIQgFgSgKgGQgqAPABBkQAAAkAJAlQALAwAVARQATgPAEgSIAgAAQgOAdgbANIgOAHQgCgDgMgDg");
	var mask_graphics_79 = new cjs.Graphics().p("AgFCKQgNgDgDgCQgWgRgLgzQgJglAAgmQAAgpAJgfQANgtAdgJIAMAAQADAAAGgHQAHAHACAAIANAAQAYAKAEA2IgfAAQgCgVgCgIQgFgSgKgGQgqAPABBkQAAAkAJAlQALAwAVARQATgPAEgSIAgAAQgOAdgbANIgOAHQgCgDgMgDg");
	var mask_graphics_159 = new cjs.Graphics().p("AgFCKQgNgDgDgCQgWgRgLgzQgJglAAgmQAAgpAJgfQANgtAdgJIAMAAQADAAAGgHQAHAHACAAIANAAQAYAKAEA2IgfAAQgCgVgCgIQgFgSgKgGQgqAPABBkQAAAkAJAlQALAwAVARQATgPAEgSIAgAAQgOAdgbANIgOAHQgCgDgMgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-64.4,y:-2.1}).wait(79).to({graphics:mask_graphics_79,x:-64.4,y:-2.1}).wait(80).to({graphics:mask_graphics_159,x:-64.4,y:-2.1}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Axaj+MAi1AAAIAAH9Mgi1AAAg");
	this.shape.setTransform(-119.3,-0.3,1.707,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#808080","#6144D5","#FF0000","#FFFF00"],[0,0.008,0.459,1],-111.5,0,111.5,0).s().p("AxaD/IAAn9MAi1AAAIAAH9g");
	this.shape_1.setTransform(-119.3,-0.3,1.707,1);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-119.3}},{t:this.shape,p:{x:-119.3}}]}).to({state:[{t:this.shape_1,p:{x:116.3}},{t:this.shape,p:{x:116.3}}]},79).to({state:[{t:this.shape_1,p:{x:-119.3}},{t:this.shape,p:{x:-119.3}}]},80).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAVCKIAAhAQAAgcgNgbQgKgQgLgEIgHAAIAACLIgnAAIAAkTIAnAAIAAB2IAEAAQAQgGAKgVQALgWAAgUIAAgxIAnAAIAAAxQAAAbgNAWQgOAagVAAIgBABIgCgBIACABIABgBQAWABAOAgQAMAYAAAdIAABBg");
	this.shape_2.setTransform(58.9,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAACRQgFgEgJgCQgJgDgHgFQgUgNgJg1QgHgkAAgmQAAhuAtgRIANAAQAFAAAFgIQAGAIAEAAIANAAQAqAQAABvQAAB1ghAYQgGAEgKADQgJACgEAEgAgOhjQgFAKgDATQgFAXAAAlQAAAlAGAmQAJArAOAOQAagYAAhrQABhEgNgZQgFgKgJgFQgKAFgGANg");
	this.shape_3.setTransform(43.9,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AAVCKIAAh1QgDAAgPAGIgDAAIgYgGQgjgLAAg+IAAhVIAnAAIAABXQAAAbAEAMQAFARALAFQAVgJAAgmIAAhlIAnAAIAAETg");
	this.shape_4.setTransform(28.9,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AAVCKIAAiLIgIAAQgKAEgKAXQgNAbAAAcIAAA5IgnAAIAAg5QAAgeAMgdQAOgiAXgBIABAAIgBAAQgSAAgQgbQgPgZAAgXQAAgHADgSQABgKANgIQALgGAKAAIBRAAIAAETgAgUhYQAAATALAVQALAYAOAFIAFAAIAAhlIgnAAQgCATAAANg");
	this.shape_5.setTransform(14.2,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AAWCOIAAjGQgOgLgIgcQgGAcgPALIAADGIgnAAIAAjFQARgIAOgZQAMgXADgWIAIAAIAGgIIAHAIIAIAAQABAVAOAaQAOAYARAHIAADFg");
	this.shape_6.setTransform(-0.6,-2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgSCKIAAkCIgZAAIAABRIgmAiIAAiEICjAAIAABkIglgiIAAgxIgYAAIAAECg");
	this.shape_7.setTransform(-17.3,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgRCLQgMgDgCgCQgTgOgGgRQgGgTgBgwIAAhrQAAgRAMgUQAMgWAQgGIANAAIAKgIIAIAIIANAAQAeAIAGAIQAHAIAAAqIAAAQQgUAWhEAuIAAATQAAAuADAMQAEAQARAPIANgNQAMgJAAgHIAAgzIAnAAIAAAzQAAARgVAOQgIAGgUAIIgQAHQgEgDgMgDgAgQhiQgIAPAAAMIAABBIAxgqQAAg6gZgMQgJAFgHAPg");
	this.shape_8.setTransform(-34.2,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgRCLQgMgDgCgCQgTgOgGgRQgHgWAAgtIAAhrQAAgRAMgUQAMgWAQgGIANAAIAKgIIAIAIIANAAQAZAHAGADQAJAGACAPQABALAAAoQAAAGgHAGIgKAIIgwAiIA3AZIAGAAIAAADIADACIgCAHIADA4QABARgWAOQgIAGgUAIIgQAHQgEgDgMgDgAgYAPIAAAWIADA3QAEAPARAPIAPgNQALgJAAgHIgEg8IgogTgAgQhiQgIAPAAAMIAABFIAxgrIABgTIAAgWQAAgPgFgFQgDgEgSgIQgJAFgHAPg");
	this.shape_9.setTransform(-49.8,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgHCLQgMgDgDgCQgXgSgMgzQgJglAAglQAAgpAKghQANgsAegJIANAAQAAAAAJgIIAJAIIAMAAQAbAKAFA8IgnAAQgBgYgCgFQgFgSgHgFQglANABBfQAAAjAJAiQAMAxAQAOQAPgNAEgUIAnAAQgPAkgcANQgEACgMAFQgEgDgLgDg");
	this.shape_10.setTransform(-64.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-25,167.1,50.7);


(lib.ff_lighton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ff_lightboxon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.305,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.Candle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Candle_body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// Candle_fire.png
	this.instance_1 = new lib.Candle_fire();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleY:0.09,rotation:-7.2,x:-6.3,y:9.1},0).wait(15).to({scaleY:0.08,rotation:0.6,x:0.1,y:11.1},0).wait(15).to({scaleY:0.09,rotation:5.8,x:5.5,y:3.4},0).wait(20).to({scaleY:0.1,rotation:0,skewX:-0.2,skewY:-0.3,x:-0.3,y:0.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,100);


(lib.FF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light-on
	this.instance = new lib.ff_lighton("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.5,43.9,1,1,0,0,0,45,45);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},9).to({alpha:1},10).to({startPosition:0},10).to({x:42.8,alpha:0.5},10).wait(1));

	// body
	this.instance_1 = new lib.ff_body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-1.1,0.305,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// wing-left
	this.instance_2 = new lib.ff_wingleft();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.3,33.4,0.3,0.3,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({rotation:15,x:10.4,y:-0.5},0).wait(10).to({rotation:-41.6,x:-3.3,y:33.4},0).wait(10).to({rotation:15,x:10.4,y:-0.5},0).wait(10).to({rotation:-41.6,x:-3.3,y:33.4},0).wait(1));

	// wing-right
	this.instance_3 = new lib.ff_wingright();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,10.6,0.29,0.29,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({rotation:-15,x:43.5,y:8.8},0).wait(10).to({rotation:34.7,x:62,y:10.6},0).wait(10).to({rotation:-15,x:43,y:8.8},0).wait(10).to({rotation:34.7,x:62,y:10.6},0).wait(1));

	// wing-back
	this.instance_4 = new lib.ff_bodyback();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.2,-1.1,0.305,0.305);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-1.1,94.9,90);


// stage content:
(lib.header_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions
	this.instance = new lib.slovologo();
	this.instance.parent = this;
	this.instance.setTransform(55,1,0.333,0.333);

	this.text = new cjs.Text("Православная газета для детей и взрослых", "19px 'Izhitsa'", "#FFFF00");
	this.text.lineHeight = 24;
	this.text.lineWidth = 381;
	this.text.parent = this;
	this.text.setTransform(183,68.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AARAhQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgEIgBgPIAAgDIAAgDIAAgCIAAgCQgSAEAAAUQAAAEgBABQgCACgFAAIgGAAQgFAAgBgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgDACgFQACgFAEgEQAEgFAGgDQAGgDAGgBIAAAAQgLgCgIgFQgHgFAAgJQAAgHAEgCQADgBAIAAIAiAAIADAAIABgBQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBAIIgBAcIABAKIABAMIAAABIgBACIgFABgAgCgaQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAFQAAAHAFAFQAEAEAHAAIABgYIgIAAIgGABg");
	this.shape.setTransform(777.4,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgWA0IAAgBIAAgMIAAgTIgBgMIgBgLIAAgIQgBgMAFgJQAFgKAGgEQAHgGADAAQADAAAEADQAEAEAEAHQAEAGADAHQACAJAAAIQAAAIgCAGQgDAGgEAEQgFADgFAAQgFAAgEgDQgFgEgEgFIABAEQABAKAAANQAAALgCAEQgCAEgFAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAgAgMgdQgCAFABAHQAAAJACAGQADAGAFADQADADADAAQADAAACgBQADgDAAgGIAAgFQAAgEgEgIQgCgHgEgGQgDgGgFgCIgFAJg");
	this.shape_1.setTransform(770.4,79.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgXAeQgEgDgBgEIgCgIQAAgEACgEIAFgHIAFgGIAGgHIAFgFIADgEIAAgCIAAgFIgBgDIADAAIANAAIACAAIAAACIAAACIABADIABAEIABAEIABAEIAHAZIAFANIABAFQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgPAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgHIgBgFIgDgGQgGAWgOAAQgGAAgDgDgAgMgDQgDAGAAADQAAAEACADQACADAFAAQADAAACgCIAEgFIABgFIgCgJIgCgGIgBgHQgIAIgDAHg");
	this.shape_2.setTransform(763.8,77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgiAiIALgLQAEgCAGAAIADAAIADABIACACQAFAEAFAAQAEAAADgEQADgDAAgHQAAgGgEgEQgEgDgGAAIgFAAIAAgFQAIAAAFgDQAEgEAAgJQAAgFgCgEQgDgDgEAAQgFAAgCAEQgDADAAAFIAAABIAAABIAAACQAAACgFABQgGACgFAAIgBgCQAAgIAFgFQAEgGAHgCQAHgDAHAAQAGAAAGACQAGACADADQAEAFAAAFQAAAJgGAFQgGADgKABIAAABIACABIABAAQAWACAAAPQAAAJgFAFQgFAFgKAAQgFAAgHgDIgHgDIgDAAQgFAAgHACQgHADgFADg");
	this.shape_3.setTransform(756.1,78);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgXAeQgEgDgBgEIgCgIQAAgEADgEIAEgHIAFgGIAGgHIAFgFIACgEIABgCIgBgFIAAgDIADAAIANAAIACAAIAAACIAAACIABADIABAEIABAEIABAEIAHAZIAFANIABAFQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgPAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgHIgBgFIgDgGQgGAWgPAAQgFAAgDgDgAgMgDQgDAGAAADQAAAEACADQACADAFAAQADAAADgCIADgFIABgFIgCgJIgCgGIgBgHQgIAIgDAHg");
	this.shape_4.setTransform(749.5,77.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgaAxIgEAAIgEAAIgGgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgFIACgKIADgMIAIgQIAHgMIADgFIAHgOQACgGAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgDgBIgKAAIAAgGIAtAAIAAAGIgIAAIAHAmIAKAmIACAJIALAAIAAAGIgpAAIAAgGIAJAAIgHgWIgEgUIgDgQIgCgMIgIANQgLATAAAOIABAJIABAEIACABIAAAAIABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIABAMQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgDABIgFgBg");
	this.shape_5.setTransform(741.4,76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgHABgIQgBgKAFgJQAEgKAHgGQAGgGADABIAGACQAFACAEAEQAEAEADAHQADAFAAAJQAAAFgCAIQgDAGgEAHQgEAGgEAEQgEAFgEAAQgDgBgHgFgAgOgJQAAAFACAGQAEAIAFAEQAGAGAJAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFABAHg");
	this.shape_6.setTransform(728.6,77.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgVAhIgCgBIgBgFIgBgLIAAgUIAAgSIACgIQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIAHABIAKAAIAYgBIAFABQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAACgDAEIgCAGIgDAGIgBAEIgGgBIAAgHQABgFgCgDQgDgEgHAAIgIAAQgBALAAAMIAAAOIABALIABAIIgBADQgBABgEAAg");
	this.shape_7.setTransform(722.8,77.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgHABgIQgBgKAFgJQAEgKAHgGQAGgGADABIAGACQAFACAEAEQAEAEAEAHQACAFAAAJQABAFgDAIQgCAGgFAHQgDAGgFAEQgFAFgDAAQgDgBgHgFgAgOgJQAAAFACAGQAEAIAGAEQAEAGAKAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFABAHg");
	this.shape_8.setTransform(716.3,77.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AAUAhIgDAAIgEABIgDAAIgCgBIAAgGQgCgGgCgFQgDgEgCgEQgFgEgEgCQAAARACAKIAAACQgBACgGAAIgGAAIgEgBIgCgFIAAgKIAAgUIAAgTIACgIQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIABAAIACAAIAHAAIACAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAHQgCAJAAAMIABAAQARgfANgBIAFABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBACIgBAEIgBAIIgBABIAAACIgEAAQgCgEgEgBQgEAAgEAFQgFAEgCAFIgDAEQAJACAGAFQAIAEADAFQAEAFABAEIACAHQAAACgFAAIgDgBg");
	this.shape_9.setTransform(710.2,77.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgGAhQgEgDgEgGQgEgGgCgHQgCgGAAgFQAAgIAEgIQAEgJAFgGQAGgGADABIAEABIAIADIAHAFQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAABgEAEIgDAEIgCACIgBABIgDgDIgHgGQgCgCgHgCQgCAFAAAHQAAAGADAHQADAGADAGQAFAFAFACQAEgDACgFIABAAIABgCIAFADQgFAKgGAHQgHAHgEABQgCAAgFgFg");
	this.shape_10.setTransform(703.7,77.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AAiAgQgEAAgDgGQgDgHgDgJIgDgOIgCgFQgEAJgCAJQgDAJAAAIIAAADQAAABgBABQAAAAAAABQAAAAAAAAQAAAAgBAAIgKAAIgDgBIgCgFIgGgRIgFgYQgFAIgEAHQgDAJAAAIIAAAEIABADIABAEIACADQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgMAAQgCABAAgHQAAgMAMgTIAHgLQABgFABgFIAAgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIALAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABAHQACAMAGAaQACgLAGgKQADgJAAgCIgBgJIAAgEIADgBIAMAAIADABIAAABIADAUQABAIADAIIAIAUIABAEIAAACIgDAAg");
	this.shape_11.setTransform(696,77.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AAGAhIgDgBIgBAAIgCAAIgjAAQgFABAAgGIAAgSIABgWIAAgMQAAgEACgCQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIACAAIACAAIAGAAIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgBAFIgBAJIgBANQAUABAIAHQALAIAAAOQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgDACgEAAgAgXALIAAARIAQAAIADAAIAAgFIgCgIQgBgEgDgDQgFgEgIgBIAAAIgAAbAgQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgCAAgHIgCgaIABgTQAAgFACgCQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIACAAIACAAIAGAAIACAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIgBAHIgBAIIgBAKQAAASADAQQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFABg");
	this.shape_12.setTransform(686.3,77.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgWA0IAAgBIAAgMIAAgTIgBgMIgBgLIAAgIQgBgMAFgJQAFgKAGgEQAHgGADAAQADAAAEADQAEAEAEAHQAEAGADAHQACAJAAAIQAAAIgCAGQgDAGgEAEQgFADgFAAQgFAAgEgDQgFgEgEgFIABAEQABAKAAANQAAALgCAEQgCAEgFAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAgAgMgdQgCAFABAHQAAAJACAGQADAGAFADQADADADAAQADAAACgBQADgDAAgGIAAgFQAAgEgEgIQgCgHgEgGQgDgGgFgCIgFAJg");
	this.shape_13.setTransform(678.2,79.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AAIAyIAAgGIAFAAIABgIQAAgHgCgGQgBgGgDgEQgDgFgFgDQgEgDgHgCIAAAsIAIAAIAAAGIgqAAIAAgGIAMAAIAAhVIgMAAIAAgGIArAAIAAAGIgJAAIAAAlIAFAAIACgEIACgFIACgDIAAgDIAFgKIAGgKQADgFAEgDQAFgCAFAAQAGAAAGACIgDAJIAAAEIgBAGIgDAAIgEgBQgEgCgEAAQgEAAgDADQgDADgDAFIgIASQAKACAIAEQAIAFAGAJQAFAKABAQIAIAAIAAAGg");
	this.shape_14.setTransform(669.9,75.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AAQAgIgDgBIgCgHIgBgNIABgYIgXAOQABAOACAOIgBACQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAIgDgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgJIgBgWIABgPIABgIIABgEIACgBIANAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAIgBAHQgCAKAAAIIAXgNIABgKIABgDIADgBIAMAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAHIgBASQAAAQACASIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_15.setTransform(779.8,59.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgHABgIQgBgKAFgJQAEgKAHgGQAGgGADABIAGACQAFACAEAEQAFAEACAHQADAFAAAJQAAAFgCAIQgDAGgEAHQgEAGgEAEQgEAFgEAAQgDgBgHgFgAgOgJQAAAFACAGQAEAIAFAEQAGAGAJAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFABAHg");
	this.shape_16.setTransform(768.2,59.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AgVAhIgCgBIgBgFIgBgLIAAgUIAAgSIACgIQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIAHABIAJAAIAZgBIAFABQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAACgDAEIgDAGIgCAGIgBAEIgGgBIAAgHQAAgFgBgDQgDgEgHAAIgIAAQgBALAAAMIAAAOIABALIABAIIgBADQgBABgEAAg");
	this.shape_17.setTransform(762.4,59.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgHABgIQgBgKAFgJQAEgKAHgGQAGgGADABIAGACQAFACAEAEQAEAEAEAHQACAFAAAJQABAFgDAIQgDAGgEAHQgEAGgEAEQgFAFgDAAQgDgBgHgFgAgOgJQAAAFACAGQAEAIAFAEQAFAGAKAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFABAHg");
	this.shape_18.setTransform(755.9,59.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AAUAhIgCAAIgFABIgDAAIgCgBIAAgGQgCgGgCgFQgCgEgDgEQgFgEgEgCQAAARABAKIAAACQAAACgGAAIgGAAIgEgBIgCgFIAAgKIAAgUIAAgTIACgIQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIABAAIACAAIAHAAIACAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAHQgBAJAAAMIABAAQARgfANgBIAFABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBACIgBAEIgBAIIgBABIAAACIgEAAQgCgEgEgBQgEAAgEAFQgFAEgCAFIgDAEQAJACAGAFQAIAEADAFQAEAFABAEIACAHQAAACgFAAIgDgBg");
	this.shape_19.setTransform(749.8,59.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AgGAhQgEgDgEgGQgEgGgCgHQgCgGAAgFQAAgIAEgIQAEgJAFgGQAGgGADABIAEABIAIADIAHAFQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAABgEAEIgDAEIgCACIgBABIgDgDIgHgGQgCgCgHgCQgCAFAAAHQAAAHADAGQADAGADAGQAFAFAFACQAEgDACgFIABgBIABgBIAFADQgFAKgGAHQgHAHgEABQgCAAgFgFg");
	this.shape_20.setTransform(743.3,59.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AATAhIgDgBIgCAAIgBAAIgkAAQgEABgBgGIAAgSIABgWIABgMQAAgEACgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIADAAIAGAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIgBAFIgCAJIAAANQASABAKAHQAKAIABAOQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgCACgEAAgAgLALIABARIAPAAIACAAIAAgFIgBgIQgBgEgEgDQgEgEgHgBIgBAIg");
	this.shape_21.setTransform(736.8,59.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgdAgIgBgEQAAgIAEgIIALgTIAFgGIADgGIACgGIgBgEIAAgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIALAAIAEABIABADQAAAIAGASIAGASIAEAKIACAEQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgDAAIgGAAIgGAAIgCgBIgDgDIgCgHIgEgPIgBgEIgBgCIgCgLIgBgFIgBgFIgEAKIgHAPIgBALQAAAFACAFIACADIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEAAIgDAAIgDABIgEgBg");
	this.shape_22.setTransform(729.9,59.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AgJAgQgHgFgEgIQgEgHgBgIQABgKAEgJQAEgKAHgGQAGgGADABIAHACQAEACAFAEQADAEADAHQAEAFAAAJQAAAFgDAIQgCAGgEAHQgEAGgFAEQgEAFgEAAQgEgBgFgFgAgPgJQAAAFADAGQAEAIAFAEQAFAGAJAAQADgFAAgFQAAgIgDgGQgDgHgGgEQgEgFgIgBQgEAFgBAHg");
	this.shape_23.setTransform(723.5,59.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AAPAhIgDgBIgBgFIgBgKIAAgVQAAgNABgKIgUAAQgCAMAAALQAAAPACASIgBADQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgJAAIgDgBIgBgFIgBgKIAAgVIABgSIABgIQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAsAAIADgBIACAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIgBAGIgBATIAAAOIACATIgBADQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_24.setTransform(716.7,59.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgVA0IAAgBIAAgMIgBgTIgCgMIgBgLIAAgIQABgMAEgJQAFgKAGgEQAHgGACAAQAEAAAEADQAFAEAEAHQADAGADAHQACAJABAIQgBAIgCAGQgCAGgFAEQgEADgGAAQgFAAgEgDQgGgEgCgFIAAAEQABAKABANQgBALgCAEQgCAEgEAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgAgMgdQgCAFAAAHQABAJADAGQACAGAFADQADADADAAQACAAADgBQADgDgBgGIAAgFQAAgEgCgIQgDgHgEgGQgEgGgFgCIgEAJg");
	this.shape_25.setTransform(709.7,60.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgLAhQgIgDgFgHQgGgHAAgNIAAgEQAAgHADgIQADgIAHgFQAGgGAKAAQAKAAAKAHQAEACABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIAFAFQgIAEgGAAQgFABgHgIIgDgEIgDgBQgHAAgCAIQgCAIAAAMIAJgEQAFgEADAAIAGABIAFAEIAFABQACAAACgCIAEAEIgIAGIgEACIgDABQgDAAgEgCIgFgEIgFgBQgEAAgFAEQAAALAGAHQAEAIAIAAQAJAAAKgIIACADQgJALgQAAQgGAAgIgDg");
	this.shape_26.setTransform(703.2,59.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AgFBDIAAgnQgHAFgKAAQgJAAgHgGQgIgGABgLQgBgEACgFQACgDACgEIAIgHIAMgKIAKgIQADgDAAgCIABgHIgBgLIAAgDIAAgCIAAgCIAAgBQAAgCAFgBIAIgCIACABIAAAFIgBASQAAAFACAEQABADACACIAIAGIAPALQAEAFAEAGQADAFAAAGQAAAFgCAFQgDAGgFADQgGAEgIAAQgKAAgGgFIAAAngAAGAXIAFACQAFgBADgCQAEgCADgEQADgGAAgHQAAgEgCgEIgFgHIgGgGIgGgFIgDgDgAgLgWIgKAJQgDADgCAEQgCAEAAAFQAAAHACAGQADAEAEACQAEACAEABIAGgCIgBgxIgFAEg");
	this.shape_27.setTransform(694.3,59.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AAiAgQgEAAgDgGQgDgHgDgJIgDgOIgCgFQgEAJgCAJQgDAJAAAIIAAADQAAABgBABQAAAAAAABQAAAAAAAAQAAAAgBAAIgKAAIgDgBIgCgFIgGgRIgFgYQgFAIgEAHQgDAJAAAIIAAAEIABADIABAEIACADQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgMAAQgCABAAgHQAAgMAMgTIAHgLQABgFABgFIAAgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIALAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABAHQACAMAGAaQACgLAGgKQADgJAAgCIgBgJIAAgEIADgBIAMAAIADABIAAABIADAUQABAIADAIIAIAUIABAEIAAACIgDAAg");
	this.shape_28.setTransform(684.3,59.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AAQAgIgDgBIgCgHIgBgNIABgYIgXAOQABAOACAOIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgJIgBgWIABgPIABgIIABgEIACgBIANAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAHQgCAKAAAIIAXgNIABgKIABgDIADgBIAMAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAHQgBAJAAAJQAAAQACASIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_29.setTransform(675.7,59.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgTAyIAAgCIAAgGIgDgHIgHgLIgJgNIgEgKIgBgIQABgNAFgKQAGgKAKgFQAJgFAMgBQATAAAIAKQAJAKACAMIAGAAIAAAFIglAAIAAgFIAGAAQAAgPgEgFQgFgFgFAAQgEgBgEADQgEADgDAGQgCAHAAALQAAAJABAGIAEATQADAMAAAIIAAADIAAACIgBABIAAABIAAABIADABQAFAAAEgFQAGgFADgIQADgIAAgJIAAgDIgGAAIAAgGIAlAAIAAAGIgGAAQgBAJgEAIQgEAHgHAGQgHAFgIADQgIAEgHAAQgGAAgFgCg");
	this.shape_30.setTransform(667.3,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgXAeQgDgDgCgEIgBgIQAAgEACgEIAEgHIAFgGIAGgHIAEgFIAEgEIABgCIgBgFIgBgDIADAAIANAAIACAAIAAACIAAACIABADIABAEIABAEIABAEIAHAZIAFANIACAFQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgOAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgHIgCgFIgBgGQgHAWgPAAQgFAAgDgDgAgMgDQgDAGAAADQAAAEACADQACADAEAAQAEAAADgCIADgFIABgFIgCgJIgCgGIgBgHQgIAIgDAHg");
	this.shape_31.setTransform(763.4,40.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgEAiIgDgBIgBgEIAAgLIAAgFIAAgEIAAgGIAAgPIABgEIAAgKIgDAAQgQAAAAAMIACAIIgIABQgDgIgFgIQgCgEAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAIABIASABIAZAAIASgBIAIgBIADACIABAEQAAACgCAEIgFAIIgDAIIgIgBIACgIQAAgIgFgCQgFgCgGAAIgDAAIAAAHIAAAGIAAAJIAAATIABAPIgBADQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_32.setTransform(755.3,40.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AAQAgIgDgBIgCgHIgBgNIABgYIgXAOQABAOACAOIgBACQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgJIgBgWIABgPIABgIIABgEIACgBIANAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGQgCALAAAIIAXgNIABgKIABgDIADgBIAMAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGIgBATQAAARACARIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_33.setTransform(747.2,40.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgdAgIgBgEQAAgIAEgIIALgTIAFgGIADgGIACgGIgBgEIAAgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIALAAIAEABIABADQAAAIAGASIAGASIAEAKIACAEQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgDAAIgGAAIgGAAIgCgBIgDgDIgCgHIgEgPIgBgEIgBgCIgCgLIgBgFIgBgFIgEAKIgHAPIgBALQAAAFACAFIACADIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEAAIgDAAIgDABIgEgBg");
	this.shape_34.setTransform(740.2,40.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgJAgQgHgFgEgIQgEgHAAgIQAAgKAEgJQAEgKAHgGQAGgGADABIAHACQAEACAFAEQADAEADAHQAEAFAAAJQAAAFgDAIQgCAGgEAHQgEAGgFAEQgEAFgEAAQgEgBgFgFgAgPgJQAAAFADAHQAEAHAFAEQAFAGAJAAQADgFAAgFQAAgIgDgGQgDgHgGgEQgEgFgIgBQgEAFgBAHg");
	this.shape_35.setTransform(733.8,40.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AAPAhIgDgBIgBgFIgBgKIAAgVQAAgNABgKIgUAAQgCAMAAALQAAAPACASIgBADQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgJAAIgDgBIgBgFIgBgKIAAgVIABgSIABgIQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAsAAIADgBIACAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIgBAGIgBATIAAAOIACATIgBADQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_36.setTransform(727,40.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgHAAgIQAAgKAFgJQAFgKAGgGQAGgGADABIAGACQAFACAEAEQAFAEADAHQACAFAAAJQABAFgDAIQgDAGgEAHQgDAGgFAEQgFAFgDAAQgEgBgGgFgAgOgJQAAAFADAHQACAHAHAEQAEAGAKAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgEgFgIgBQgFAFABAHg");
	this.shape_37.setTransform(720.3,40.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgVA0IAAgBIAAgMIgBgTIgCgMIgBgLIAAgIQAAgMAFgJQAFgKAGgEQAHgGACAAQAEAAAEADQAFAEAEAHQADAGADAHQACAJAAAIQAAAIgCAGQgCAGgFAEQgEADgGAAQgFAAgEgDQgGgEgCgFIAAAEQABAKAAANQAAALgCAEQgCAEgFAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgAgMgdQgBAFAAAHQAAAJADAGQACAGAFADQADADADAAQACAAADgBQACgDAAgGIAAgFQAAgEgDgIQgCgHgEgGQgEgGgFgCIgEAJg");
	this.shape_38.setTransform(713.9,42.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgEAiIgDgBIgBgEIAAgLIAAgFIAAgEIAAgGIAAgPIABgEIAAgKIgDAAQgQAAAAAMIACAIIgIABQgDgIgFgIQgCgEAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAIABIASABIAZAAIASgBIAIgBIADACIABAEQAAACgCAEIgFAIIgDAIIgIgBIACgIQAAgIgFgCQgFgCgGAAIgDAAIAAAHIAAAGIAAAJIAAATIABAPIgBADQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_39.setTransform(706.1,40.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AAQAgIgDgBIgCgHIgBgNIABgYIgXAOQABAOACAOIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgJIgBgWIABgPIABgIIABgEIACgBIANAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGQgCALAAAIIAXgNIABgKIABgDIADgBIAMAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGIgBATQAAARACARIgBACQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_40.setTransform(698,40.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("Ag2AxIgEAAIgEAAIgDABQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgBgIQAAgKACgIQADgIAEgHIANgQQAIgLADgGQADgGAAgGIAAgEIgKAAIAAgGIAoAAIAAAGIgIAAIARBRIAPhRIgGAAIAAgGIAmAAIAAAGIgJAAIASBVIAKAAIAAAGIglAAIAAgGIAGAAIgQhIIgOBIIAIAAIAAAGIgoAAIAAgGIAHAAIgPhGIgJAQQgEAHgBAGQgCAHAAAIIABANIABAKIAAAHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDABIgFgBg");
	this.shape_41.setTransform(686.9,39.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AAGAgQgGgEgEgJQgEgIAAgJIgQAAIABAPIABAMQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgBABgFAAIgGAAIgDgBIgCgEIgBgMIAAgTIABgSIACgIQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIABAAIACAAIAHAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAAGIgBAIIgBAMIAQAAQACgIAEgIQADgIAGgEQAFgFAEABIAGACQAFACAEAEQAEAEADAHQADAFABAJQAAAFgDAIQgCAHgEAGQgFAGgEAEQgEAFgEAAQgEAAgGgGgAABgJIAAAEQABAFADAFQADAHAGAEQAGAEAIAAQACgFAAgFQAAgHgCgGQgDgHgGgFQgFgFgIgBQgFAEAAAIg");
	this.shape_42.setTransform(774.4,22.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AAQAgIgDgBIgCgHIgBgNIABgYIgXAOQABAOACAOIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgIAAIgDgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgJIgBgWIABgPIABgIIABgEIACgBIANAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGQgCALAAAIIAXgNIABgKIABgDIADgBIAMAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAGIgBATQAAAQACASIgBACQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_43.setTransform(765.8,22.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AAPAhIgCgBIgCgEIgBgIIAAgTIgVgLIAAAJIAAATIABALQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgFAAIgGAAIgDgBIgCgGIgBgKIAAgUIABgTIABgHQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACABIACAAIAGgBIACAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAAFQgBABAAAHIAVAMIAAgGIAAgOIADgGQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIACABIACAAIAHgBIABAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIgBADIgBAFIgBARIAAAOIABALIACAIQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQgBABgFAAg");
	this.shape_44.setTransform(758.5,22.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AgLAhQgHgDgGgHQgGgHgBgNIAAgEQABgHADgIQAEgIAGgFQAHgGAJAAQAJAAAMAHQACACACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIADAFQgHAEgFAAQgHABgGgIIgDgEIgDgBQgHAAgBAIQgDAIAAAMIAJgEQAFgEADAAIAGABIAGAEIADABQADAAADgCIADADIgIAHIgEACIgEABQgDAAgDgCIgFgEIgFgBQgEAAgFAEQAAALAGAHQAFAIAHAAQAIAAALgIIADADQgKALgQAAQgGAAgIgDg");
	this.shape_45.setTransform(751.6,22.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AgZAgIgCgBIgBgEIgBgKIAAgIIABgYIABgKIABgGIADgBIAhAAQAHABADABQADABAAAFQAAAIgGAEQgHAFgLAEIAAAAQAKADALAGQAKAGAAALQAAAEgCACQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgHAAgAgLADIgBAHIABASIADAAIAGAAIAGAAQABgBAAAAQABAAAAAAQABgBAAAAQABgBAAAAQABgCABgDQgBgEgCgFQgDgFgEgEQgEgCgHAAgAgLgGQAEAAAFgCQACgDACgEQACgDAAgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgBIgGAAIgBAVg");
	this.shape_46.setTransform(744.3,22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AgJAgQgHgFgEgIQgEgIgBgHQABgKAEgJQAEgKAHgGQAGgGADABIAHACQAEACAFAEQAEAEACAHQAEAFAAAJQAAAFgDAIQgCAGgEAHQgFAGgEAEQgEAFgEAAQgEgBgFgFgAgPgJQAAAFADAHQAEAHAFAEQAFAGAJAAQADgFAAgFQAAgIgDgGQgDgHgGgEQgEgFgIgBQgEAFgBAHg");
	this.shape_47.setTransform(737.4,22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AgdAgIgBgEQAAgIAEgIIALgTIAFgGIADgGIACgGIgBgEIAAgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIALAAIAEABIABADQAAAIAGASIAGASIAEAKIACAEQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgDAAIgGAAIgGAAIgCgBIgDgDIgCgHIgEgPIgBgEIgBgCIgCgLIgBgFIgBgFIgEAKIgHAPIgBALQAAAFACAFIACADIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEAAIgDAAIgDABIgEgBg");
	this.shape_48.setTransform(731,22.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AgGAhQgEgDgEgGQgEgGgCgHQgCgGAAgFQAAgIAEgIQAEgJAFgGQAGgGADABIAEABIAIADIAHAFQADACAAABQAAACgEAEIgDAEIgCACIgBABIgDgDIgHgGQgCgCgHgCQgCAFAAAHQAAAGADAHQADAGADAGQAFAFAFACQAEgDACgFIABgBIABgBIAFADQgFAKgGAHQgHAHgEABQgCAAgFgFg");
	this.shape_49.setTransform(724.8,22.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AgJAgQgGgFgFgIQgFgIAAgHQAAgKAFgJQAFgKAGgGQAGgGADABIAHACQAEACAFAEQADAEAEAHQACAFAAAJQAAAFgCAIQgDAGgDAHQgEAGgFAEQgFAFgDAAQgEgBgFgFgAgPgJQABAFADAHQACAHAHAEQAFAGAIAAQADgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFAAAHg");
	this.shape_50.setTransform(718.8,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AgUAhIgDgBIgCgFIgBgLIAAgUIABgSIACgIQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIAGABIAKAAIAYgBIAFABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABACgDAEIgCAGIgDAGIgCAEIgFgBIABgHQAAgFgDgDQgCgEgIAAIgHAAQgBALgBAMIABAOIABALIAAAIIAAADQgBABgEAAg");
	this.shape_51.setTransform(713.1,22.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AgXAeQgDgDgCgEIgBgIQAAgEABgEIAFgHIAFgGIAGgHIAEgFIAEgEIABgCIgBgFIgBgDIADAAIANAAIACAAIAAACIAAACIABADIABAEIABAEIABAEIAHAZIAFANIACAFQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgOAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgHIgCgFIgBgGQgHAWgOAAQgGAAgDgDgAgMgDQgDAGAAADQAAAEACADQACADAEAAQAEAAACgCIAEgFIABgFIgCgJIgCgGIgBgHQgIAIgDAHg");
	this.shape_52.setTransform(706.3,22.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AgdAgIgBgEQAAgIAEgIIALgTIAFgGIADgGIACgGIgBgEIAAgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIALAAIAEABIABADQAAAIAGASIAGASIAEAKIACAEQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgDAAIgGAAIgGAAIgCgBIgDgDIgCgHIgEgPIgBgEIgBgCIgCgLIgBgFIgBgFIgEAKIgHAPIgBALQAAAFACAFIACADIABADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEAAIgDAAIgDABIgEgBg");
	this.shape_53.setTransform(699.4,22.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgZAhIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgHIABgMIAAgQIAAgKIABgLIABgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAeAAIAJgBIAIAAQAGAAAAADQAAADgDAFIgGANIgGAAIABgGIAAgFQgBgFgEgBQgEgCgIAAIgJAAIgBAZIAPACQAJABAFAEQAGAFADAGQACAGAAAFQAAABAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHABgAgMANIAAAIIABAHIATAAIACAAIAAgEQAAgVgVAAIgBAKg");
	this.shape_54.setTransform(692.5,22.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AgKAgQgFgFgFgIQgFgIABgHQgBgKAFgJQAEgKAHgGQAGgGADABIAGACQAFACAEAEQAEAEAEAHQACAFAAAJQABAFgDAIQgCAGgFAHQgEAGgEAEQgFAFgDAAQgDgBgHgFgAgOgJQAAAFACAHQAEAHAFAEQAFAGAKAAQACgFAAgFQAAgIgDgGQgDgHgGgEQgFgFgHgBQgFAFABAHg");
	this.shape_55.setTransform(680.8,22.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AAGAxIAAgGIAJAAIAAhVIgdAAIAABVIAJAAIAAAGIgrAAIAAgGIAMAAIAAhVIgMAAIAAgGIBhAAIAAAGIgMAAIAABVIAMAAIAAAGg");
	this.shape_56.setTransform(672.2,20.6);

	this.instance_1 = new lib.text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(508.3,89,1.775,1.775,0,0,0,73,25.1);

	this.instance_2 = new lib.Candle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.4,50.4,1,1,0,0,0,25,50);

	this.instance_3 = new lib.FF();
	this.instance_3.parent = this;
	this.instance_3.setTransform(607.8,53,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

	// fon
	this.instance_4 = new lib.fon_header();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.4,47.7,971.7,117.6);
// library properties:
lib.properties = {
	id: '13B5A57DD0710C41828BB4A70D27DA9F',
	width: 800,
	height: 100,
	fps: 30,
	color: "#BA5D00",
	opacity: 1.00,
	manifest: [
		{src:"images/header_HTML5 Canvas_atlas_.png?1539866036545", id:"header_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['13B5A57DD0710C41828BB4A70D27DA9F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;