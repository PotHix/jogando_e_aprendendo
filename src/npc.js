var Npc = function(x,y,still,dialogue,questid,talking,silence){
	return({
		questid:questid,
		group:"walls",
		tileset:"npc",
		zindex:0, // Needed for zindexed objects
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
			if (this.silence) toys.generate.audio.fadeOut(this,"background",null,{channel:"bgmusic"});
			this.iamTalking=true; // go in talking mode
			maingame.startDialogue(this.myDialogue); // Starts its dialogue. Is another object because of z-index
		},

		initialize:function() {
			toys.topview.initialize(this); // Any particular initialization. Just the auto z-index
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
				// Shadowed object. First draws the shadow...
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.shadow.tileset,tile:this.shadow.tile,dx:this.x,dy:this.y+this.h-gbox.getTiles(this.shadow.tileset).tileh+4,camera:this.camera});
				// Then the object. Notes that the y is y-z to have the "over the floor" effect.
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x,dy:this.y+this.z,camera:this.camera,fliph:this.fliph,flipv:this.flipv});
			 }
		 }
	});
}
