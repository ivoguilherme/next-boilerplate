import { ReactNode } from 'react';

export interface ITitle {
  text: string;
}

export default function Title({ text }: ITitle) {
  return <h1 className="text-center text-[48px] mt-8">{text}</h1>;
}
