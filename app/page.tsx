import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const image = `${NEXT_PUBLIC_URL}/picture.webp`;
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Explore OpenSea',
      action: 'link',
      target: `https://opensea.io/assets/ethereum/0x611bf1dc4f11f7f8bfb3a403f5a260d082405be6/64`,
    },
  ],
  postUrl: `${NEXT_PUBLIC_URL}/api/prs`,
  image: image,
});

export const metadata: Metadata = {
  title: 'Open Sea Frame',
  description: 'Interoperable Frames',
  openGraph: {
    title: 'Open Sea Frame',
    description: 'Interoperable Frames',
    images: [image],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': 'vNext',
  },
};

export default function Page1() {
  return (
    <>
      <img src={image} />
    </>
  );
}
