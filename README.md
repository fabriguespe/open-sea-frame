# Open Sea Frames

This is handled in app/[x].tsx where metadata for an OpenSea frame is generated. This includes setting up a button for minting on OpenSea, specifying the post URL, and defining the image to be used.

```jsx
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Mint on OpenSea',
      action: 'link',
      target: `https://opensea.io/assets/ethereum/0x611bf1dc4f11f7f8bfb3a403f5a260d082405be6/64`,
    },
  ],
  postUrl: `${NEXT_PUBLIC_URL}/api/prs`,
  image: `${NEXT_PUBLIC_URL}/nft1.webp`,
```

> This Frames are compatible with [Awesome Open Frames](https://github.com/open-frames/awesome-open-frames/)
