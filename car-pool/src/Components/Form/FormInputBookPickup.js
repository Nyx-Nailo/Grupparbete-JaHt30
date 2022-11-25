export const inputs = [
  {
    id: 1,
    name: 'firstname',
    type: 'text',
    placeholder: 'Förnamn',
    label: 'Förnamn',
    pattern: '^[A-ZÅÄÖa-zåäö]+',
    required: true,
  },
  {
    id: 2,
    name: 'lastname',
    type: 'text',
    placeholder: 'Efternamn',
    label: 'Efternamn',
    pattern: '^[A-ZÅÄÖa-zåäö]+',
    required: true,
  },
  {
    id: 3,
    name: 'phonenr',
    type: 'tel',
    placeholder: '070-1234567',
    label: 'Mobil nummer',
    pattern: '[0-9]{3}-[0-9]{7}',
    required: true,
  },
  {
    id: 4,
    name: 'email',
    type: 'tel',
    placeholder: 'email@domän.domän',
    label: 'E-post adress',
    pattern: '[A-ZÅÄÖa-zåäö0-9._%+-]+@[A-ZÅÄÖa-zåäö0-9.-]+.[A-ZÅÄÖa-zåäö]{2,}$',
    required: true,
  },
  {
    id: 5,
    name: 'pickupcity',
    type: 'text',
    placeholder: 'Upphämtnings ort',
    label: 'Upphämtnings ort',
    pattern: '^[A-ZÅÄÖa-zåäö]+',
    required: true,
  },
  {
    id: 6,
    name: 'traveldate',
    type: 'datetime-local',
    label: 'Datum för resa',
    required: true,
  },
  {
    id: 7,
    name: 'allergy',
    type: 'text',
    placeholder: 'Allergier',
    label: 'Allergier',
    pattern: '^[A-ZÅÄÖa-zåäö]+',
    required: true,
  },
  {
    id: 8,
    name: 'animal',
    type: 'checkbox',
    placeholder: 'Djur',
    label: 'Djur med på resa',
    required: true,
  },
  {
    id: 9,
    name: 'payment',
    type: 'checkbox',
    placeholder: '',
    label: 'Ersättning',
    required: true,
  },
  {
    id: 10,
    name: 'extradriver',
    type: 'checkbox',
    label: 'Kan du köra en del av sträckan',
    required: true,
  },
  {
    id: 11,
    name: 'moretravels',
    type: 'checkbox',
    label: 'Upprepande resa',
    required: true,
  },
  {
    id: 12,
    name: 'moretravelsdatestart',
    type: 'datetime-local',
    label: 'Datum för avgång',
    className: 'hide',
  },
  {
    id: 13,
    name: 'moretravelsdateend',
    type: 'date',
    label: 'Datum för sista dagen',
    className: 'hide',
  },
];
