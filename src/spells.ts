const NewSpell = awful.NewSpell;

export const Recklessness = NewSpell(1719, {
  targeted: false,
});

Recklessness.Callback((spell) => {
  spell.Cast();
});

export const Rampage = NewSpell(184367);

Rampage.Callback((spell) => {
  spell.Cast(awful.target);
});

export const Execute = NewSpell(5308);

Execute.Callback((spell) => {
  if (awful.target.hp <= 20) {
    spell.Cast(awful.target);
  }
});

export const RagingBlow = NewSpell(85288);

RagingBlow.Callback((spell) => {
  spell.Cast(awful.target);
});

export const Bloodthirst = NewSpell(23881);

Bloodthirst.Callback((spell) => {
  spell.Cast(awful.target);
});

export const Whirlwind = NewSpell(190411, {
  targeted: false,
});

Whirlwind.Callback((spell) => {
  if (awful.target.distance <= 8) {
    spell.Cast();
  }
});
