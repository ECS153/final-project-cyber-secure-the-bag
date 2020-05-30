
export class Site {
    site_name: string;
    fields: Map<string, string[]>;
    likely_fields: Map<string, string>;
    field_percentage: Map<string, number>;
    show: Boolean;
    average_percentage: number;
}

export class Data {
    user: string;
    sites: Site[];
    show: Boolean;
    average_percentage: number;
    shown_sites: Site[];
}
