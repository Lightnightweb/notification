class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'ichi',
        name: '位置情報',
        blocks: [
          {
            opcode: 'ichix',
            blockType: Scratch.BlockType.REPORTER,
            text: '位置情報(経度)',
          },
          {
            opcode: 'ichiy',
            blockType: Scratch.BlockType.REPORTER,
            text: '位置情報(緯度)',
          }
        ]
      };
    }
    ichix(){
      let ichix=navigator.geolocation.getCurrentPosition(ichi2)
      function ichi2(position) {
        return position.coords.longitude
      }
      return ichix
    }
    ichiy(){   
      let ichiy=navigator.geolocation.getCurrentPosition(ichi2)
      function ichi2(position) {
        return position.coords.latitude
      }
      return ichiy
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());