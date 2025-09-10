const stream = await navigator.mediaDevices.getUserMedia({
  video: {
    aspectRatio: 9 / 16,
    width: 1280,
    height: 720,
    facingMode: "user",
  },
});

const video = document.getElementById("stream") as HTMLVideoElement;
video.srcObject = stream;
