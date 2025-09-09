const stream = await navigator.mediaDevices.getUserMedia({
  video: { aspectRatio: 9 / 16 },
});

const video = document.getElementById("stream") as HTMLVideoElement;
video.srcObject = stream;
