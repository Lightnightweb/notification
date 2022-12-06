class apisyutoku {
    getInfo() {
      return {
        id: 'apisyutoku', // change this if you make an actual extension!
        name: 'api取得',
        blocks: [
          {
            opcode: 'apisyutoku',
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
    apisyutoku(args) {
      function apisyutoku(){
        fetch(args.ONE)
        .then((response)=>{
          return response.json
      })
      return response.json
      }
      apisyutoku()
   }
}
Scratch.extensions.register(new apisyutoku());