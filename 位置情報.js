class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'ichi',
        name: '位置情報',
        blocks: [
          {
            opcode: '2',
            blockType: Scratch.BlockType.REPORTER,
            text: '位置情報',
          }
        ]
      };
    }
    2(){   
      function success(position) {
        let a= ("緯度:" + position.coords.latitude);
        a= (a+"経度:" + position.coords.longitude);
        return a
      }
      function error() {
         console.log("位置情報の取得に失敗しました。");
      }
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());