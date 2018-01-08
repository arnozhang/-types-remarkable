/**
 * TypeScript declares for Remarkable.
 *
 * @author arnozhang <zyfgood12@163.com>
 * @date 2017/11/23
 */

export interface Options {
    [key: string]: any;

    html?: boolean;
    breaks?: boolean;
    linkify?: boolean;
    typographer?: boolean;
    xhtmlOut?: boolean;

    quotes?: string;
    langPrefix?: string,
    linkTarget?: string;
    maxNesting?: number;
    highlight?: (str: string, language: string) => string;
}


export interface Presets {
    options?: Options;
    components?: any;
}


export declare type Plugin = (instance: Remarkable, options: any) => void;


export interface StateCore {

    src: string;
    env: any;
    options: Options;
    tokens: any[];
    inlineMode: boolean;

    inline: any;
    block: any;
    renderer: any;
    typographer: any;
}


export class Remarkable {

    constructor(preset: string | Options, options?: Options);

    set(options: Options): void;

    configure(presets?: Presets): void;

    use(plugin: Plugin, options: any): Remarkable;

    parse(str: string, env: any): any[];

    render(str: string, env: any): string;

    parseInline(str: string, env: any): any[];

    renderInline(str: string, env: any): string;
}
