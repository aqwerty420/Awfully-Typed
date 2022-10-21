// Automaticly removed if project is built for production
awful.DevMode = true;

// Uncomment the line below to enable ttd
//awful.ttd_enabled = true;

myWork.warrior = {
  fury: awful.Actor.New({
    spec: AwfulSpecs.Second,
    class: AwfulClasses.warrior,
  }),
};

export {};
