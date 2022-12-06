class apisyutoku {
    getInfo() {
      return {
        id: 'apisyutoku', // change this if you make an actual extension!
        name: 'api取得',
        blocks: [
          {
            opcode: 'apisyutoku',
            blockType: Scratch.BlockType.REPORTER,
            text: 'api[ONE]を取得',
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
        return fetch(args.ONE)
        .then((response)=>{
          let res = JSON.stringify(response.json)
          return JSON.parse(res)
      })
   }
}
Scratch.extensions.register(new apisyutoku());