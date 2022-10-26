const green = [170, 211, 114, 1] as AwfulColor;
const white = [255, 255, 255, 1] as AwfulColor;
const dark = [21, 21, 21, 0.45] as AwfulColor;

const [awfulGui, awfulSettings, awfulCmd] = awful.UI.New('myWork', {
  title: 'My Work',
  show: true,
  colors: {
    title: green,
    primary: white,
    accent: green,
    background: dark,
  },
});
