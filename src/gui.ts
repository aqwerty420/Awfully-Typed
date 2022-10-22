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

const testTab = awfulGui.Tab('Test');

export class MyCheckBox {
  private eVar: string;

  constructor(
    eVar: string,
    tab: IAwfulTab,
    label: string,
    tooltip?: string,
    defaultValue = true
  ) {
    this.eVar = eVar;

    tab.Checkbox({
      text: label,
      var: eVar,
      default: defaultValue,
      tooltip: tooltip,
    });
  }

  public enabled(): boolean {
    return awfulSettings.get(this.eVar) as boolean;
  }
}

const testCheckBox = new MyCheckBox('testCheckBox', testTab, 'Test Checkbox');

print('Checkbox enabled ? ' + testCheckBox.enabled());
