class api取得 {
    getInfo() {
      return {
        id: 'api取得', // change this if you make an actual extension!
        name: 'api取得',
        blocks: [
          {
            opcode: 'api取得',
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
    api取得(args) {
      
      fetch(args.ONE)
        .then(Response=>{
          return Response.json
        .catch(error=>{
          return (error)
        })
      })
   }
}
Scratch.extensions.register(new api取得());