var Npc = function(tileset,x,y,still,dialogue,questid,talking,silence){
	return({
		questid:questid,
		group:"walls",
		tileset:tileset,
		zindex:0,
		x:x,
		y:y,
		myDialogue:dialogue,
		iamTalking:false,
		silence:silence,
		shadow:{tileset:"shadows",tile:0},
		frames:{
			still:{ speed:6, frames:still },
			talking:{ speed:6, frames:(talking==null?still:talking) }
		},

		doPlayerAction:function(sw) {
			this.iamTalking=true;
			maingame.startDialogue(this.myDialogue);
		},

		initialize:function() {
			toys.topview.initialize(this);
		},

		first:function(by) {
			this.counter=(this.counter+1)%12;

			if (this.iamTalking) {
				this.frame=help.decideFrame(this.counter,this.frames.talking);
				if (!gbox.getObject("foreground","dialogue")) {// Check if the dialogue ended
					this.iamTalking=false; // Stop talking
				}
			} else
				this.frame=help.decideFrame(this.counter,this.frames.still);
		},

		blit:function() {
			if (gbox.objectIsVisible(this)) {
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.shadow.tileset,tile:this.shadow.tile,dx:this.x,dy:this.y+this.h-gbox.getTiles(this.shadow.tileset).tileh+4,camera:this.camera});
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x,dy:this.y+this.z,camera:this.camera,fliph:this.fliph,flipv:this.flipv});
			 }
		 }
	});
}
