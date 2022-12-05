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
      fetch("https://api-public.odpt.org/api/v4/odpt:Bus?odpt:operator=odpt.Operator:Toei")
        .then(response=>{
            return response.json();
        })
    }
  }
  Scratch.extensions.register(new api());