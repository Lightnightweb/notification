class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'ichi',
        name: '位置情報',
        blocks: [
          {
            opcode: '1',
            blockType: Scratch.BlockType.REPORTER,
            text: '位置情報(経度)',
          },
          {
            opcode: '2',
            blockType: Scratch.BlockType.REPORTER,
            text: '位置情報(緯度)',
          }
        ]
      };
    }
    1(){      
      function ichi2(position) {
        return position.coords.longitude
      }
      let a = navigator.geolocation.getCurrentPosition(ichi2)
      return a
    }
    2(){   
      function ichi2(position) {
        return position.coords.latitude
      }
      let a= navigator.geolocation.getCurrentPosition(ichi2)
      return a
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());