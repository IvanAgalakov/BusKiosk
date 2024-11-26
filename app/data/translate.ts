export const translateMap: Map<string, Map<string, string>> = new Map<
  string,
  Map<string, string>
>([
  [
    "Purchase Pass",
    new Map<string, string>([
      ["en", "Purchase Pass"],
      ["fr", "Acheter un Pass"],
    ]),
  ],

  [
    "Bus Routes",
    new Map<string, string>([
      ["en", "Bus Routes"],
      ["fr", "Itinéraires de Bus"],
    ]),
  ],

  [
    "Language",
    new Map<string, string>([
      ["en", "Language"],
      ["fr", "Langue"],
    ]),
  ],

  ["Where To?", new Map<string, string>([["en", "Where To?"]])],

  [
    "Select Your Language:",
    new Map<string, string>([["en", "Select Your Language:"]]),
  ],

  ["Single", new Map<string, string>([["en", "Single"]])],
  ["Daily", new Map<string, string>([["en", "Daily"]])],
  ["Weekly", new Map<string, string>([["en", "Weekly"]])],
  ["Monthly", new Map<string, string>([["en", "Monthly"]])],
  [
    "Ticket Regulations",
    new Map<string, string>([["en", "Ticket Regulations"]]),
  ],
  [
    "Nonrefundable",
    new Map<string, string>([
      ["en", "Non-refundable"],
      ["fr", "Non remboursable"],
    ]),
  ],
  [
    "A single ticket is valid for 1 (one) use.",
    new Map<string, string>([
      ["en", "A single ticket is valid for 1 (one) use."],
    ]),
  ],
  [
    "A daily ticket is valid for 1 (one) day.",
    new Map<string, string>([
      ["en", "A daily ticket is valid for 1 (one) day."],
    ]),
  ],
  [
    "A weekly ticket is valid for 7 (seven) days.",
    new Map<string, string>([
      ["en", "A weekly ticket is valid for 7 (seven) days."],
    ]),
  ],
  [
    "A monthly ticket is valid for 1 (one) Month.",
    new Map<string, string>([
      ["en", "A monthly ticket is valid for 1 (one) Month."],
    ]),
  ],
  [
    "Ticket expires 365 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 365 days from purchase date."],
    ]),
  ],
  [
    "Ticket expires 1 day from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 1 day from purchase date."],
    ]),
  ],
  [
    "Ticket expires 7 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 7 days from purchase date."],
    ]),
  ],
  [
    "Ticket expires 30 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 30 days from purchase date."],
    ]),
  ],

  [
    "No refunds or exchanges.",
    new Map<string, string>([
      ["en", "No refunds or exchanges."],
      ["fr", "Aucun remboursement ni échange."],
    ]),
  ],
  [
    "Youth age 13 - 17 yrs old",
    new Map<string, string>([
      [
        "en",
        "Youth age 13 - 17 years old may use a youth ticket. Children age 12 years and under ride for free",
      ],
    ]),
  ],

  [
    "OK",
    new Map<string, string>([
      ["en", "OK"],
      ["fr", "D'accord"],
    ]),
  ],

  [
    "Return to selection",
    new Map<string, string>([
      ["en", "Return to selection"],
      ["fr", "Retour à la sélection"],
    ]),
  ],

  ["Single", new Map<string, string>([["en", "Single"]])],

  ["Monthly", new Map<string, string>([["en", "Monthly"]])],

  ["Weekly", new Map<string, string>([["en", "Weekly"]])],

  ["Select pass", new Map<string, string>([["en", "Select pass"]])],

  ["Children age 0-13 do not have to pay.", new Map<string, string>([["en", "Children age 0-13 do not have to pay."]])],
  ["Purchase", new Map<string, string>([["en", "Purchase"]])],
  ["Total", new Map<string, string>([["en", "Total"]])],
  ["Adult", new Map<string, string>([["en", "Adult"]])],
  ["Youth", new Map<string, string>([["en", "Youth"]])],
  ["Ticket", new Map<string, string>([["en", "Ticket"]])],
  ["Your Purchase", new Map<string, string>([["en", "Your Purchase"]])],
  ["Cancel", new Map<string, string>([["en", "Cancel"]])],
  ["Receipt",  new Map<string, string>([["en", "Receipt"]])],
  ["Pay", new Map<string, string>([["en", "Pay"]])],
  ["Payment Complete", new Map<string, string>([["en", "Payment Complete"]])],
  ["Please use pinpad or insert cash to complete transaction", new Map<string, string>([["en", "Please use pinpad or insert cash to complete transaction"]])],
 
]);

export function translate(value: string, language: string) {
  let res = translateMap.get(value)?.get(language);
  if (res == undefined && value != "") {
    console.error('\"' + value + '\"' + " is undefined for language " + '\"' + language + '\"')
  }
  return res;
}
