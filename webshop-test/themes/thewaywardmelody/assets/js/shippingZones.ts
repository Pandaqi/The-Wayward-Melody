const SHIPPING_ZONES =
{
    EU:
    {
        name: "Europe",
        countries: ["BE", "BG", "BA", "JE", "BY", "RU", "RS", "RO", "GR", "GG", "GB", "GI", "HR", "HU", "PT", "SJ", "PL", "EE", "IT", "ES", "ME", "MD", "MC", "MK", "MT", "IM", "FR", "FI", "FO", "NL", "NO", "XK", "CH", "CZ", "CY", "SK", "SI", "SM", "SE", "DK", "DI", "LI", "LV", "LT", "LU", "VA", "AD", "IS", "AL", "AT", "AX", "IE", "UA"],
        timezones:
        [
            "Europe/Andorra",
            "Europe/Tirane",
            "Europe/Vienna",
            "Europe/Brussels",
            "Europe/Sofia",
            "Europe/Minsk",
            "Europe/Zurich",
            "Europe/Prague",
            "Europe/Berlin",
            "Europe/Copenhagen",
            "Europe/Tallinn",
            "Europe/Madrid",
            "Europe/Helsinki",
            "Europe/Paris",
            "Europe/London",
            "Europe/Gibraltar",
            "Europe/Athens",
            "Europe/Budapest",
            "Europe/Dublin",
            "Europe/Rome",
            "Europe/Vilnius",
            "Europe/Luxembourg",
            "Europe/Riga",
            "Europe/Monaco",
            "Europe/Chisinau",
            "Europe/Malta",
            "Europe/Amsterdam",
            "Europe/Oslo",
            "Europe/Warsaw",
            "Europe/Lisbon",
            "Europe/Bucharest",
            "Europe/Belgrade",
            "Europe/Kaliningrad",
            "Europe/Moscow",
            "Europe/Simferopol",
            "Europe/Kirov",
            "Europe/Astrakhan",
            "Europe/Volgograd",
            "Europe/Saratov",
            "Europe/Ulyanovsk",
            "Europe/Samara",
            "Europe/Stockholm",
            "Europe/Istanbul",
            "Europe/Kiev",
            "Europe/Uzhgorod",
            "Europe/Zaporozhye",
        ]
    },

    NA: 
    {
        name: "North America",
        countries: ["US", "CA"],
        timezones:
        [
            // USA
            "America/New_York",
            "America/Detroit",
            "America/Kentucky/Louisville",
            "America/Kentucky/Monticello",
            "America/Indiana/Indianapolis",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Indiana/Marengo",
            "America/Indiana/Petersburg",
            "America/Indiana/Vevay",
            "America/Chicago",
            "America/Indiana/Tell_City",
            "America/Indiana/Knox",
            "America/Menominee",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/North_Dakota/Beulah",
            "America/Denver",
            "America/Boise",
            "America/Phoenix",
            "America/Los_Angeles",
            "America/Anchorage",
            "America/Juneau",
            "America/Sitka",
            "America/Metlakatla",
            "America/Yakutat",
            "America/Nome",
            "America/Adak",
            //"Pacific/Honolulu" => don't think sending things to remote islands will work

            // CANADA
            "America/St_Johns",
            "America/Halifax",
            "America/Glace_Bay",
            "America/Moncton",
            "America/Goose_Bay",
            "America/Toronto",
            "America/Iqaluit",
            "America/Winnipeg",
            "America/Resolute",
            "America/Rankin_Inlet",
            "America/Regina",
            "America/Swift_Current",
            "America/Edmonton",
            "America/Cambridge_Bay",
            "America/Inuvik",
            "America/Dawson_Creek",
            "America/Fort_Nelson",
            "America/Whitehorse",
            "America/Dawson",
            "America/Vancouver",
            "America/Panama",
            "America/Puerto_Rico",
            "America/Phoenix",
            "America/Blanc-Sablon",
            "America/Atikokan",
            "America/Creston"
        ]
    }
}

const convertTimezoneToShippingZone = (tz:string) =>
{
    const continent:string = tz.split("/")[0] ?? "XX";
    for(const [name,data] of Object.entries(SHIPPING_ZONES))
    {
        if(data.timezones.includes(continent)) { return name; }
    }
    return "XX"
}

export { SHIPPING_ZONES, convertTimezoneToShippingZone }