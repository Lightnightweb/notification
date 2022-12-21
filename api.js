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
            text: '[Page]をブラウザで開く',
            arguments: {
              Page: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Url'
              }
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
    Webopen(args){
        let Urlopen=window.open(args)
        return Urlopen
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());