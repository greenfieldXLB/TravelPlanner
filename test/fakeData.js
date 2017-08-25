dmodule.exports.fakeFlight = {
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "VJLQqAUTFG3i6USMc0R607",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "HKG",
     "city": "HKG",
     "name": "Hong Kong International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "SFO",
     "city": "SFO",
     "name": "San Francisco International"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "HKG",
     "name": "Hong Kong"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "SFO",
     "name": "San Francisco"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "77W",
     "name": "Boeing 777"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "AY_001",
     "name": "US September 11th Security Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "US_002",
     "name": "US International Departure Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YQ_I",
     "name": "UA YQ surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "XF",
     "name": "US Passenger Facility Charge"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "UA",
     "name": "United Airlines, Inc."
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD519.70",
    "id": "ezRj1i1sjmFRPBlgwZjcJA001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 855,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 855,
        "flight": {
         "carrier": "UA",
         "number": "869"
        },
        "id": "G3Fu0wOGQADE-nOE",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LJ6ttrh7ENxtr+ku",
          "aircraft": "77W",
          "arrivalTime": "2017-08-25T18:45+08:00",
          "departureTime": "2017-08-24T13:30-07:00",
          "origin": "SFO",
          "destination": "HKG",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 855,
          "mileage": 6911,
          "meal": "Lunch",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AeitKnqNyj9ax78OoDA2LFgf8Agryoj8v9PCxyKN8pSM",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "HKG",
        "basisCode": "WLE0OPM9"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AeitKnqNyj9ax78OoDA2LFgf8Agryoj8v9PCxyKN8pSM",
        "segmentId": "G3Fu0wOGQADE-nOE"
       }
      ],
      "baseFareTotal": "USD469.00",
      "saleFareTotal": "USD469.00",
      "saleTaxTotal": "USD50.70",
      "saleTotal": "USD519.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD22.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD18.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO UA HKG 469.00WLE0OPM9 NUC 469.00 END ROE 1.00 FARE USD 469.00 XT 18.00US 5.60AY 22.60YQ 4.50XF SFO4.50",
      "latestTicketingTime": "2017-08-15T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   }
  ]
 }
}
