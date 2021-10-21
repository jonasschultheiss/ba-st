// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
}

const makeProduct = (id: number): IProduct => {
  return {
    id,
    image: '/ProductImage.png',
    title: 'Lorem Ipsum sit dolor',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.',
  };
};

const products: Array<IProduct> = [];

for (let index = 0; index < 3; index++) {
  products.push(makeProduct(index + 1));
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(products);
}
