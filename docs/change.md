# changes

## Architecture

change the folder architecture

```
features/
└── community/
    ├── feed/
    │   ├── api/
    │   ├── hooks/
    │   ├── components/
    │   ├── store/
    │   └── index.js
    │
    ├── createCommunity/
    │   ├── api/
    │   ├── hooks/
    │   ├── components/
    │   ├── store/
    │   └── index.js
    │
    ├── editCommunity/
    │   ├── ...
    │
    └── shared/
        ├── api/
        ├── components/
        ├── hooks/
        └── utils/
```

## changed the architecture again

the draft should contain what the ui have

```js
const initialDraft = {
  name: "",
  description: "",

  avatar: {
    preview: null,
    file: null,
  },

  banner: {
    preview: null,
    file: null,
  },
};
```

```js
  return (
    <section className="flex flex-col gap-6">
      <Header />

      <MediaSection media={controller.media} />
      <Form form={controller.form} />

      <Actions actions={controller.actions} />
      <ImageAdjuster cropper={controller.media.cropper} />
    </section>

```

the data been changed to what the UI wants not what single features are there the data will branch the same like the single source of truth
