import { ReactNode } from 'react';

export interface IStep {
    id: string;
    text: ReactNode;
    activeFile?: string;
    scroll?: number;
}

export interface ILine {
    id: string;
    depth: number;
    elements: ILineElement[],
    appearOnStep?: number;
    hideOnStep?: number;
}

export interface ILineElement {
    id: string;
    content: string;
    token: string;
    appearOnStep?: number;
    hideOnStep?: number;
}
