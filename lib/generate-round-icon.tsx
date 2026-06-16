import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function generateRoundIcon(size: number) {
  const imageBuffer = await readFile(join(process.cwd(), 'public/favicon.jpg'));
  const base64 = imageBuffer.toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`data:image/jpeg;base64,${base64}`}
          width={size}
          height={size}
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
    { width: size, height: size }
  );
}