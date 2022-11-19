class camera{
    getInfo() {
      return {
        id: 'strictequalityexample', // change this if you make an actual extension!
        name: 'camera',
        blocks: [
          {
            opcode: 'camera',
            blockType: Scratch.BlockType.COMMAND,
            text: 'カメラを[ONE]にする',
            arguments: {
              ONE:{
                type:Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              }
            }
          }
        ]
      };
    }
    camera(ONE) {
      function cameras(){
        if(ONE===1){
          navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
         .then(stream => vi.srcObject = stream)
        }else{
          navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
         .then(stream => vi.srcObject = stream)
        }
      }
      return cameras()
    }
  }
  Scratch.extensions.register(new camera());
  