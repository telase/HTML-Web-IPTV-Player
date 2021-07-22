        function myFunction() {
          if (Hls.isSupported()) {
            var video = document.getElementById('video');
            var hls = new Hls();
            var url = document.getElementById("videoselection").value;

            // bind them together
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function() {
              console.log("video and hls.js are now bound together !");
              hls.loadSource(url);
              hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                video.play();
                console.log("manifest loaded, found " + data.levels.length + " quality level");

              });
            });
          }
        }

        function myFunction1() {
          if (Hls.isSupported()) {
            var video = document.getElementById('video');
            var hls = new Hls();
            var url = document.getElementById("textbox").value;

            // bind them together
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function() {
              console.log("video and hls.js are now bound together !");
              hls.loadSource(url);
              hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                video.play();
                console.log("manifest loaded, found " + data.levels.length + " quality level");

              });
            });
          }
        }