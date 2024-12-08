export const translateMap: Map<string, Map<string, string>> = new Map<
  string,
  Map<string, string>
>([
  [
    "Purchase Ticket",
    new Map<string, string>([
      ["en", "Purchase Ticket"],
      ["fr", "Acheter un Billet"],
      ["es", "Comprar Billete"],
      ["de", "Ticket Kaufen"],
      ["it", "Acquista Biglietto"],
      ["pt", "Comprar Bilhete"],
      ["zh", "购买车票"],
      ["ja", "チケットを購入"],
    ]),
  ],

  [
    "Bus Routes",
    new Map<string, string>([
      ["en", "Bus Routes"],
      ["fr", "Itinéraires de Bus"],
      ["es", "Rutas de Autobús"],
      ["de", "Buslinien"],
      ["it", "Percorsi Autobus"],
      ["pt", "Rotas de Ônibus"],
      ["zh", "公交路线"],
      ["ja", "バスルート"],
    ]),
  ],

  [
    "Language",
    new Map<string, string>([
      ["en", "Language"],
      ["fr", "Langue"],
      ["es", "Idioma"],
      ["de", "Sprache"],
      ["it", "Lingua"],
      ["pt", "Idioma"],
      ["zh", "语言"],
      ["ja", "言語"],
    ]),
  ],

  [
    "Where To?", 
    new Map<string, string>([
      ["en", "Where To?"],
      ["fr", "Où Aller?"],
      ["es", "¿A Dónde?"],
      ["de", "Wohin?"],
      ["it", "Dove?"],
      ["pt", "Para Onde?"],
      ["zh", "去哪儿？"],
      ["ja", "どこへ？"],
    ])
  ],

  [
    "Select Your Language:",
    new Map<string, string>([
      ["en", "Select Your Language:"],      
      ["fr", "Sélectionnez Votre Langue:"],
      ["es", "Seleccione Su Idioma:"],
      ["de", "Wählen Sie Ihre Sprache:"],
      ["it", "Seleziona la tua lingua:"],
      ["pt", "Selecione o seu idioma:"],
      ["zh", "选择您的语言："],
      ["ja", "言語を選択してください："],
    ]),
  ],

  [
    "Single", 
    new Map<string, string>([
      ["en", "Single"],
      ["fr", "Simple"],
      ["es", "Sencillo"],
      ["de", "Einzel"],
      ["it", "Singolo"],
      ["pt", "Simples"],
      ["zh", "单次"],
      ["ja", "シングル"],
    ])
  ],

  [
    "Daily", 
    new Map<string, string>([
      ["en", "Daily"],
      ["fr", "Quotidien"],
      ["es", "Diario"],
      ["de", "Täglich"],
      ["it", "Giornaliero"],
      ["pt", "Diário"],
      ["zh", "每日"],
      ["ja", "デイリー"],
    ])
  ],
  [
    "Weekly",
    new Map<string, string>([
      ["en", "Weekly"],
      ["fr", "Hebdomadaire"],
      ["es", "Semanal"],
      ["de", "Wöchentlich"],
      ["it", "Settimanale"],
      ["pt", "Semanal"],
      ["zh", "每周"],
      ["ja", "ウィークリー"],
    ])
  ],

  [
    "Monthly", 
    new Map<string, string>([
      ["en", "Monthly"],
      ["fr", "Mensuel"],
      ["es", "Mensual"],
      ["de", "Monatlich"],
      ["it", "Mensile"],
      ["pt", "Mensal"],
      ["zh", "每月"],
      ["ja", "マンスリー"],
    ])
  ],
  
  [
    "Ticket Regulations",
    new Map<string, string>([
      ["en", "Ticket Regulations"],
      ["fr", "Réglementation des Billets"],
      ["es", "Regulaciones de Boletos"],
      ["de", "Ticketbestimmungen"],
      ["it", "Regolamenti sui Biglietti"],
      ["pt", "Regulamentos de Bilhetes"],
      ["zh", "票务规定"],
      ["ja", "チケット規則"],
    ]),
  ],

  [
    "Nonrefundable",
    new Map<string, string>([
      ["en", "Non-refundable"],
      ["fr", "Non remboursable"],
      ["es", "No Reembolsable"],
      ["de", "Nicht Rückerstattbar"],
      ["it", "Non Rimborsabile"],
      ["pt", "Não Reembolsável"],
      ["zh", "不可退票"],
      ["ja", "払い戻し不可"],
    ]),
  ],
  [
    "A single ticket is valid for 1 (one) use.",
    new Map<string, string>([
      ["en", "A single ticket is valid for 1 (one) use."],
      ["fr", "Un billet simple est valide pour une seule utilisation."],
      ["es", "Un billete sencillo es válido para un (1) uso."],
      ["de", "Ein Einzelticket ist für eine (1) Nutzung gültig."],
      ["it", "Un biglietto singolo è valido per 1 (uno) utilizzo."],
      ["pt", "Um bilhete simples é válido para 1 (uma) utilização."],
      ["zh", "单程票仅限一次使用。"],
      ["ja", "シングルチケットは1回の使用に有効です。"],
    ]),
  ],
  [
    "A daily ticket is valid for 1 (one) day.",
    new Map<string, string>([
      ["en", "A daily ticket is valid for 1 (one) day."],
      ["fr", "Un billet quotidien est valide pour une (1) journée."],
      ["es", "Un billete diario es válido por 1 (un) día."],
      ["de", "Ein Tagesticket ist für einen (1) Tag gültig."],
      ["it", "Un biglietto giornaliero è valido per 1 (uno) giorno."],
      ["pt", "Um bilhete diário é válido por 1 (um) dia."],
      ["zh", "日票有效期为一天。"],
      ["ja", "デイリーチケットは1日間有効です。"],
    ]),
  ],
  [
    "A weekly ticket is valid for 7 (seven) days.",
    new Map<string, string>([
      ["en", "A weekly ticket is valid for 7 (seven) days."],
      ["fr", "Un billet hebdomadaire est valide pour 7 (sept) jours."],
      ["es", "Un billete semanal es válido por 7 (siete) días."],
      ["de", "Ein Wochenticket ist für 7 (sieben) Tage gültig."],
      ["it", "Un biglietto settimanale è valido per 7 (sette) giorni."],
      ["pt", "Um bilhete semanal é válido por 7 (sete) dias."],
      ["zh", "周票有效期为七天。"],
      ["ja", "ウィークリーチケットは7日間有効です。"],
    ]),
  ],
  [
    "A monthly ticket is valid for 1 (one) Month.",
    new Map<string, string>([
      ["en", "A monthly ticket is valid for 1 (one) Month."],
      ["fr", "Un billet mensuel est valide pour 1 (un) mois."],
      ["es", "Un billete mensual es válido por 1 (un) mes."],
      ["de", "Ein Monatsticket ist für 1 (einen) Monat gültig."],
      ["it", "Un biglietto mensile è valido per 1 (uno) mese."],
      ["pt", "Um bilhete mensal é válido por 1 (um) mês."],
      ["zh", "月票有效期为一个月。"],
      ["ja", "マンスリーチケットは1か月間有効です。"],

    ]),
  ],
  [
    "Ticket expires 365 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 365 days from purchase date."],
      ["fr", "Le billet expire 365 jours après la date d'achat."],
      ["es", "El billete vence 365 días después de la fecha de compra."],
      ["de", "Das Ticket verfällt 365 Tage nach dem Kaufdatum."],
      ["it", "Il biglietto scade 365 giorni dalla data di acquisto."],
      ["pt", "O bilhete expira 365 dias após a data de compra."],
      ["zh", "车票自购买日期起365天内有效。"],
      ["ja", "チケットは購入日から365日後に失効します。"],
    ]),
  ],
  [
    "Ticket expires 1 day from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 1 day from purchase date."],
      ["fr", "Le billet expire 1 jour après la date d'achat."],
      ["es", "El billete expira 1 día después de la fecha de compra."],
      ["de", "Das Ticket verfällt 1 Tag nach dem Kaufdatum."],
      ["it", "Il biglietto scade 1 giorno dopo la data di acquisto."],
      ["pt", "O bilhete expira 1 dia após a data de compra."],
      ["zh", "票据在购买日期后1天到期。"],
      ["ja", "チケットは購入日から1日で有効期限が切れます。"],
    ]),
  ],
  [
    "Ticket expires 7 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 7 days from purchase date."],
      ["fr", "Le billet expire 7 jours après la date d'achat."],
      ["es", "El billete expira 7 días después de la fecha de compra."],
      ["de", "Das Ticket verfällt 7 Tage nach dem Kaufdatum."],
      ["it", "Il biglietto scade 7 giorni dopo la data di acquisto."],
      ["pt", "O bilhete expira 7 dias após a data de compra."],
      ["zh", "票据在购买日期后7天到期。"],
      ["ja", "チケットは購入日から7日で有効期限が切れます。"],

    ]),
  ],
  [
    "Ticket expires 30 days from purchase date.",
    new Map<string, string>([
      ["en", "Ticket expires 30 days from purchase date."],
      ["fr", "Le billet expire 30 jours après la date d'achat."],
      ["es", "El billete expira 30 días después de la fecha de compra."],
      ["de", "Das Ticket verfällt 30 Tage nach dem Kaufdatum."],
      ["it", "Il biglietto scade 30 giorni dopo la data di acquisto."],
      ["pt", "O bilhete expira 30 dias após a data de compra."],
      ["zh", "票据在购买日期后30天到期。"],
      ["ja", "チケットは購入日から30日で有効期限が切れます。"],
    ]),
  ],

  [
    "No refunds or exchanges.",
    new Map<string, string>([
      ["en", "No refunds or exchanges."],
      ["fr", "Aucun remboursement ni échange."],
      ["es", "No hay reembolsos ni cambios."],
      ["de", "Keine Rückerstattungen oder Umtausch."],
      ["it", "Nessun rimborso o cambio."],
      ["pt", "Sem reembolsos ou trocas."],
      ["zh", "不可退款或更换。"],
      ["ja", "払い戻しや交換はできません。"],
    ]),
  ],
  [
    "Youth age 13 - 17 yrs old",
    new Map<string, string>([
      [
        "en",
        "Youth age 13 - 17 years old may use a youth ticket. Children age 12 years and under ride for free",
      ],
      [
        "fr",
        "Les jeunes de 13 à 17 ans peuvent utiliser un billet pour jeunes. Les enfants de 12 ans et moins voyagent gratuitement.",
      ],
      [
        "es",
        "Los jóvenes de 13 a 17 años pueden usar un billete juvenil. Los niños de 12 años o menos viajan gratis.",
      ],
      [
        "de",
        "Jugendliche im Alter von 13 bis 17 Jahren können ein Jugendticket verwenden. Kinder bis 12 Jahre fahren kostenlos.",
      ],
      [
        "it",
        "I giovani di età compresa tra 13 e 17 anni possono utilizzare un biglietto per giovani. I bambini di 12 anni o meno viaggiano gratis.",
      ],
      [
        "pt",
        "Jovens de 13 a 17 anos podem usar um bilhete juvenil. Crianças de 12 anos ou menos viajam gratuitamente.",
      ],
      [
        "zh",
        "13至17岁的青少年可使用青少年票，12岁及以下儿童免费乘车。"
      ],
      [
        "ja", 
        "13～17歳の若者はユースチケットを利用できます。12歳以下の子供は無料です。"
      ],
    ]),
  ],

  [
    "OK",
    new Map<string, string>([
      ["en", "OK"],
      ["fr", "D'accord"],
      ["es", "De acuerdo"],
      ["de", "OK"],
      ["it", "OK"],
      ["pt", "OK"],
      ["zh", "确定"],
      ["ja", "了解"],
    ]),
  ],
  ["Accept", new Map<string, string>([
    ["en", "Accept & Continue"],
    ["fr", "Accepter et Continuer"],
    ["es", "Aceptar y Continuar"],
    ["de", "Akzeptieren und Fortfahren"],
    ["it", "Accetta e Continua"],
    ["pt", "Aceitar e Continuar"],
    ["zh", "接受并继续"],
    ["ja", "承認して続行"],
  ])],
 

  [
    "Return to selection",
    new Map<string, string>([
      ["en", "Return to selection"],
      ["fr", "Retour à la sélection"],
      ["es", "Volver a la selección"],
      ["de", "Zurück zur Auswahl"],
      ["it", "Torna alla selezione"],
      ["pt", "Voltar à seleção"],
      ["zh", "返回选择"],
      ["ja", "選択に戻る"],
    ]),
  ],

  [
    "Home Screen",
    new Map<string, string>([
      ["en", "Home Screen"],
      ["fr", "Écran d'Accueil"],
      ["es", "Pantalla de Inicio"],
      ["de", "Startbildschirm"],
      ["it", "Schermata Iniziale"],
      ["pt", "Tela Inicial"],
      ["zh", "主屏幕"],
      ["ja", "ホーム画面"],
    ])
  ],

  [
    "Single", 
    new Map<string, string>([
      ["en", "Single"],
      ["fr", "Simple"],
      ["es", "Sencillo"],
      ["de", "Einzel"],
      ["it", "Singolo"],
      ["pt", "Simples"],
      ["zh", "单次"],
      ["ja", "シングル"],
    ])
  ],

  [
    "Monthly", 
    new Map<string, string>([
      ["en", "Monthly"],
      ["fr", "Mensuel"],
      ["es", "Mensual"],
      ["de", "Monatlich"],
      ["it", "Mensile"],
      ["pt", "Mensal"],
      ["zh", "每月"],
      ["ja", "マンスリー"],
    ])
  ],

  [
    "Weekly", 
    new Map<string, string>([
      ["en", "Weekly"],
      ["fr", "Hebdomadaire"],
      ["es", "Semanal"],
      ["de", "Wöchentlich"],
      ["it", "Settimanale"],
      ["pt", "Semanal"],
      ["zh", "每周"],
      ["ja", "ウィークリー"],
    ])
  ],

  [
    "Select Ticket", 
    new Map<string, string>([
      ["en", "Select Ticket"],
      ["fr", "Sélectionner un Billet"],
      ["es", "Seleccionar Billete"],
      ["de", "Ticket Auswählen"],
      ["it", "Seleziona Biglietto"],
      ["pt", "Selecionar Bilhete"],
      ["zh", "选择票"],
      ["ja", "チケットを選択"],
    ])
  ],

  [
    "Children age 0-13 do not have to pay.", 
    new Map<string, string>([
      ["en", "Children age 0-13 do not have to pay."],
      ["fr", "Les enfants âgés de 0 à 13 ans ne paient pas."],
      ["es", "Los niños de 0 a 13 años no tienen que pagar."],
      ["de", "Kinder im Alter von 0 bis 13 Jahren müssen nicht zahlen."],
      ["it", "I bambini di età compresa tra 0 e 13 anni non pagano."],
      ["pt", "Crianças de 0 a 13 anos não precisam pagar."],
      ["zh", "0至13岁的儿童无需付款。"],
      ["ja", "0～13歳の子供は料金が不要です。"],
    ])
  ],

  [
    "Purchase",
    new Map<string, string>([
      ["en", "Purchase"],
      ["fr", "Acheter"],
      ["es", "Comprar"],
      ["de", "Kaufen"],
      ["it", "Acquista"],
      ["pt", "Comprar"],
      ["zh", "购买"],
      ["ja", "購入"],
    ]),
  ],

  [
    "Total",
    new Map<string, string>([
      ["en", "Total"],
      ["fr", "Total"],
      ["es", "Total"],
      ["de", "Gesamt"],
      ["it", "Totale"],
      ["pt", "Total"],
      ["zh", "总计"],
      ["ja", "合計"],
    ]),
  ],

  [
    "Adult",
    new Map<string, string>([
      ["en", "Adult"],
      ["fr", "Adulte"],
      ["es", "Adulto"],
      ["de", "Erwachsener"],
      ["it", "Adulto"],
      ["pt", "Adulto"],
      ["zh", "成人"],
      ["ja", "大人"],
    ]),
  ],

  [
    "Youth",
    new Map<string, string>([
      ["en", "Youth"],
      ["fr", "Jeune"],
      ["es", "Jóvenes"],
      ["de", "Jugendlicher"],
      ["it", "Giovane"],
      ["pt", "Juventude"],
      ["zh", "青少年"],
      ["ja", "若者"],
    ]),
  ],

  ["Home Screen", new Map<string, string>([
    ["en", "Home Screen"],
    ["fr", "Écran d'Accueil"],
    ["es", "Pantalla de Inicio"],
    ["de", "Startbildschirm"],
    ["it", "Schermata Iniziale"],
    ["pt", "Tela Inicial"],
    ["zh", "主屏幕"],
    ["ja", "ホーム画面"],
  ])],

  [
    "Ticket",
    new Map<string, string>([
      ["en", "Ticket"],
      ["fr", "Billet"],
      ["es", "Billete"],
      ["de", "Ticket"],
      ["it", "Biglietto"],
      ["pt", "Bilhete"],
      ["zh", "票"],
      ["ja", "チケット"],
    ]),
  ],

  [
    "Your Purchase",
    new Map<string, string>([
      ["en", "Your Purchase"],
      ["fr", "Votre Achat"],
      ["es", "Su Compra"],
      ["de", "Ihr Einkauf"],
      ["it", "Il Tuo Acquisto"],
      ["pt", "Sua Compra"],
      ["zh", "您的购买"],
      ["ja", "購入内容"],
    ]),
  ],

  [
    "Cancel",
    new Map<string, string>([
      ["en", "Cancel"],
      ["fr", "Annuler"],
      ["es", "Cancelar"],
      ["de", "Abbrechen"],
      ["it", "Annulla"],
      ["pt", "Cancelar"],
      ["zh", "取消"],
      ["ja", "キャンセル"],
    ]),
  ],

  [
    "Payment Complete",
    new Map<string, string>([
      ["en", "Payment Complete"],
      ["fr", "Paiement Terminé"],
      ["es", "Pago Completado"],
      ["de", "Zahlung Abgeschlossen"],
      ["it", "Pagamento Completato"],
      ["pt", "Pagamento Concluído"],
      ["zh", "支付完成"],
      ["ja", "支払い完了"],
    ]),
  ],

  [
    "Info Screen",
    new Map<string, string>([
      ["en", "Info Screen"],
      ["fr", "Écran d'info"],
      ["es", "Pantalla de información"],
      ["de", "Informationsbildschirm"],
      ["it", "Schermata informazioni"],
      ["pt", "Tela de informações"],
      ["zh", "信息屏幕"],
      ["ja", "情報画面"],
    ]),
  ],
  ["Receipt", new Map<string, string>([
    ["en", "Receipt"],
    ["fr", "Reçu"],
    ["es", "Recibo"],
    ["de", "Quittung"],
    ["it", "Ricevuta"],
    ["pt", "Recibo"],
    ["zh", "收据"],
    ["ja", "領収書"],
  ])],

  ["Pay", new Map<string, string>([
    ["en", "Pay"],
    ["fr", "Payer"],
    ["es", "Pagar"],
    ["de", "Bezahlen"],
    ["it", "Pagare"],
    ["pt", "Pagar"],
    ["zh", "支付"],
    ["ja", "支払う"],
  ])],

  ["Please use pinpad or insert cash to complete transaction", new Map<string, string>([
    ["en", "Please use pinpad or insert cash to complete transaction"],
    ["fr", "Veuillez utiliser le terminal de paiement ou insérer des espèces pour terminer la transaction"],
    ["es", "Por favor, use el datáfono o inserte efectivo para completar la transacción"],
    ["de", "Bitte verwenden Sie das Eingabegerät oder legen Sie Bargeld ein, um die Transaktion abzuschließen"],
    ["it", "Utilizzare il terminale di pagamento o inserire contanti per completare la transazione"],
    ["pt", "Por favor, use o terminal de pagamento ou insira dinheiro para concluir a transação"],
    ["zh", "请使用支付终端或插入现金以完成交易"],
    ["ja", "取引を完了するには、端末またはキャッシュを使用してください"],
  ])],

  ["Date", new Map<string, string>([
    ["en", "Date:"],
    ["fr", "Date :"],
    ["es", "Fecha:"],
    ["de", "Datum:"],
    ["it", "Data:"],
    ["pt", "Data:"],
    ["zh", "日期："],
    ["ja", "日付："],
  ])],

  ["Thankyou", new Map<string, string>([
    ["en", "Thank you for your purchase!"],
    ["fr", "Merci pour votre achat !"],
    ["es", "¡Gracias por su compra!"],
    ["de", "Vielen Dank für Ihren Einkauf!"],
    ["it", "Grazie per il tuo acquisto!"],
    ["pt", "Obrigado pela sua compra!"],
    ["zh", "感谢您的购买！"],
    ["ja", "ご購入ありがとうございます！"],
  ])],

  ["Payment Pending", new Map<string, string>([
    ["en", "Payment Pending"],
    ["fr", "Paiement en attente"],
    ["es", "Pago pendiente"],
    ["de", "Zahlung ausstehend"],
    ["it", "Pagamento in sospeso"],
    ["pt", "Pagamento pendente"],
    ["zh", "支付待定"],
    ["ja", "支払い保留中"],
  ])],

  ["Arriving at", new Map<string, string>([
    ["en", "Arriving at"],
    ["fr", "Arrivant à"],
    ["es", "Llegando a"],
    ["de", "Ankunft um"],
    ["it", "In arrivo a"],
    ["pt", "Chegando em"],
    ["zh", "到达"],
    ["ja", "到着予定"],
  ])],

  ["Next at", new Map<string, string>([
    ["en", "Next at"],
    ["fr", "Prochain à"],
    ["es", "Próximo a"],
    ["de", "Nächster um"],
    ["it", "Prossimo a"],
    ["pt", "Próximo em"],
    ["zh", "下一个在"],
    ["ja", "次は"],
  ])],

  ["No arrival times found.", new Map<string, string>([
    ["en", "No arrival times found."],
    ["fr", "Aucun horaire trouvé."],
    ["es", "No se encontraron horarios de llegada."],
    ["de", "Keine Ankunftszeiten gefunden."],
    ["it", "Nessun orario di arrivo trovato."],
    ["pt", "Nenhum horário de chegada encontrado."],
    ["zh", "未找到到达时间。"],
    ["ja", "到着時間が見つかりません。"],
  ])],

  ["Nearby Routes", new Map<string, string>([
    ["en", "Nearby Routes"],
    ["fr", "Itinéraires à proximité"],
    ["es", "Rutas cercanas"],
    ["de", "Nahegelegene Routen"],
    ["it", "Itinerari nelle vicinanze"],
    ["pt", "Rotas próximas"],
    ["zh", "附近路线"],
    ["ja", "近くのルート"],
  ])],

  ["Loading routes...", new Map<string, string>([
    ["en", "Loading routes..."],
    ["fr", "Chargement des itinéraires..."],
    ["es", "Cargando rutas..."],
    ["de", "Routen werden geladen..."],
    ["it", "Caricamento percorsi..."],
    ["pt", "Carregando rotas..."],
    ["zh", "加载路线..."],
    ["ja", "ルートを読み込み中..."],
  ])],

]);

export function translate(value: string, language: string) {
  const res = translateMap.get(value)?.get(language);
  if (res == undefined && value != "") {
    console.error('\"' + value + '\"' + " is undefined for language " + '\"' + language + '\"')
  }
  return res;
}
