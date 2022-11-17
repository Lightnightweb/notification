let script = document.createElement('script'); //変数名は適当なものにでも
script.src = "https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.12/push.min.js"; //ファイルパス
document.body.appendChild(script);
class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'strictequalityexample',
        name: 'Strict Equality',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.COMMAND,
            text: '[ONE]を通知する',
            arguments: {
                ONE:{
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '通知'
                }
            }
          }
        ]
      };
    }
    strictlyEquals(args){
        function push(){
            Push.create("更新情報", 
             {
              body: args.ONE,
              timeout: 8000,
              vibrate: [100, 100, 100],
              onClick: function () {
              window.focus(); 
              this.close();
              }
            })
          }
        return push()
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());