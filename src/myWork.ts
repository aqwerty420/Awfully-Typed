import * as spells from './spells';

class Dummy {
  none = null;
}

// Dummy class to generate lualib_bundle.lua
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = new Dummy();

awful.DevMode = true;

myWork.warrior = {
  fury: awful.Actor.New({
    spec: AwfulSpecs.Second,
    class: AwfulClasses.warrior,
  }),
};

myWork.warrior.fury.Init(() => {
  if (!awful.target.exists || awful.target.dead || awful.target.ally) return;

  StartAttack();

  spells.Recklessness();

  spells.Rampage();

  spells.Execute();

  spells.RagingBlow();

  spells.Bloodthirst();

  spells.Whirlwind();
});

export const test = () => {
  const a = 1;
};

const test2 = () => {
  const a = 1;
};

export const func = {
  test,
};
