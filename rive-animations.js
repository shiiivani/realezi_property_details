// Party Popper Animation
const partyPopper = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});
