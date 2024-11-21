export const translateMap: Map<string, Map<string,string>> = new Map<string,Map<string,string>>(
    [
        [
            "Purchase Pass", new Map<string,string>([
                ["en", "Purchase Pass"],
                ["fr", "Acheter un Pass"],
            ])
        ],

        [
            "Bus Routes", new Map<string,string>([
                ["en", "Bus Routes"],
                ["fr", "Itinéraires de Bus"],
            ])
        ],

        [
            "Language", new Map<string,string>([
                ["en", "Language"],
                ["fr", "Langue"],
            ])
        ],

        [
            "Where To?", new Map<string,string>([
                ["en", "Where To?"],
            ])
        ],

        [
            "Select Your Language:", new Map<string,string>([
                ["en", "Select Your Language:"],
            ])
        ],

        [
            "Daily", new Map<string,string>([
                ["en", "Daily"],
                ["fr", "Tous les jours"],
            ])
        ],
        
        [
            "Single", new Map<string,string>([
                ["en", "Single"],
            ])
        ],

        [
            "Monthly", new Map<string,string>([
                ["en", "Monthly"],
            ])
        ],

        [
            "Weekly", new Map<string,string>([
                ["en", "Weekly"],
            ])
        ],

        [
            "Select pass", new Map<string,string>([
                ["en", "Select pass"],
            ])
        ],
    ]
);


export function translate(value: string, language: string) {
    return translateMap.get(value)?.get(language);
}