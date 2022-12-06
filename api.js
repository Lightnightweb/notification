document.createElement("script")
script.src="https://code.jquery.com/jquery-3.0.0.min.js";
class aaaaaa {
    getInfo() {
      return {
        id: 'aaaaaa', // change this if you make an actual extension!
        name: 'aaaaaa',
        blocks: [
          {
            opcode: 'aaaaaa',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE]を取得',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:'https://api-public.odpt.org/api/v4/odpt:Bus?odpt:operator=odpt.Operator:Toei'
              },
            }
          }
        ]
      };
    }
    aaaaaa(args) {
      fetch(args.ONE)
        .then(Response=>{
          return Response.json
        .catch(error=>{
          return ("失敗")
        })
      })
   }  
}
Scratch.extensions.register(new aaaaaa());
