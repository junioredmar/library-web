export class ExternalBook {
    kind: string;
    totalItems: number;
    items: ExternalBookItem[];
}

export class ExternalBookItem {
    volumeInfo: ExternalBookVolume;
}

export class ExternalBookVolume {
    id: number;
    title: string;
    authors: string[];
    categories: string[];
}
