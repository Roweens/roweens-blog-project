export interface MainPageItemType {
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    authOnly: boolean;
    onClick: () => void;
}
