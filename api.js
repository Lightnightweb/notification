class api {
    getInfo() {
      return {
        id: 'api', // change this if you make an actual extension!
        name: 'api',
        blocks: [
          {
            opcode: 'api',
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
    api(args) {
      fetch(args.ONE)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            return a
        })
        .catch(error=>{
            console.log("データ取得失敗")
        })
    }
  }
  Scratch.extensions.register(new api());