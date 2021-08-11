AFRAME.registerComponent("move-box",{
    schema:{
        moveZ:{type:"number",default:1}
    },
    tick:function(){
        this.data.moveZ=this.data.moveZ+0.01
        var rot=this.el.getAttribute("rotation")
        rot.z=this.data.moveZ
        this.el.setAttribute("rotation",{x:rot.x,y:rot.y,z:rot.z})
            }
})