import { NextRequest } from 'next/server';
import { getFrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../../config';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; collection: string } },
) {
  const id = params.id;
  const collection = '0x611bf1dc4f11f7f8bfb3a403f5a260d082405be6';
  let url = `https://opensea.io/assets/ethereum/${collection}/${id}`;

  const imageUrl = `${NEXT_PUBLIC_URL}/nft/${id}.webp`;
  return new Response(
    `
    <!DOCTYPE html>
        <html>
              <head>
                <title>Open Sea Frame</title>
                <meta name="description" content="Interoperable Frames" />
                <meta name="fc:frame" content="vNext" />
                <meta name="fc:frame:image" content="${imageUrl}" />
                <meta name="fc:frame:button:1" content="Explore OpenSea" />
                <meta name="fc:frame:button:1:action" content="link" />
                <meta
                  name="fc:frame:button:1:target"
                  content="${url}"
                />
                <meta name="fc:frame:post_url" content="${NEXT_PUBLIC_URL}/api/prs" />
                <meta name="of:accepts:xmtp" content="vNext" />
                <meta property="og:title" content="Open Sea Frame" />
                <meta property="og:description" content="Interoperable Frames" />
                <meta property="og:image" content="${imageUrl}" />
            </head>
            <body>
              <img src="${imageUrl}">
            </body>
        </html>
    `,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    },
  );
}
