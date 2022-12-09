document.createElement("map")
class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'strictequalityexample',
        name: 'api取得',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.REPORTER,
            text: 'api[ONE]を取得する',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          },
          {
            opcode: 'map',
            blockType: Scratch.BlockType.COMMAND,
            text: 'googleMapを表示[A][B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '140'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '35.5'
              }
            }
          }
        ]
      };
    }
    strictlyEquals(args) {
      return fetch(args.ONE) //1
      .then(response => response.text()) //2
      .then(data => {  //3
       return data;
    });
    }
    map(args){
      var opts = {
        center: new google.maps.LatLng(args.A,args.B),
        zoom: 13
    };
    var map = new google.maps.Map(document.getElementById("map"), opts);
    return map
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());