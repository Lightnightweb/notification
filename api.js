document.createElement("map")
class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'strictequalityexample',
        name: 'Web',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.REPORTER,
            text: 'api[ONE]を取得する',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Url'
              }
            }
          },
          {
            opcode: 'Webopen',
            blockType: Scratch.BlockType.COMMAND,
            text: '位置情報を取得',
            arguments: {

            }
          },
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
    Webopen(){
      return navigator.geolocation.getCurrentPosition(success, fail)
      function success(pos){
        return pos
      }
      function fail(error){
        return ("位置情報が取得できませんでした")
      }
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());