// used with https://www.json-generator.com/

[
  '{{repeat(100)}}',
  {
    _id: '{{index() + 100}}',
    name: '{{random("Voyager", "Bourbon Rose", "Denali", "Maverick", "Mariner", "Abyss", "Gold Coast", "Calypso", "Thirteen", "Hustle", "Joyride", "Ghost", "Gotham", "Avalon")}}',
    series: '{{random("Voyager", "ARC Automatic", "Blacktop", "Chrono", "Classic", "Forty", "Modern Sport", "Revolver", "Rise" )}}',
    main_photo: '{{random("https://s3-us-west-1.amazonaws.com/fecphotos/100-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/101-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/102-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/103-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/104-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/105-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/106-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/107-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/108-main.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/109-main.jpg")}}',
    fit_photo: '{{random("https://s3-us-west-1.amazonaws.com/fecphotos/100-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/101-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/102-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/103-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/104-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/105-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/106-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/107-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/108-fit.jpg", "https://s3-us-west-1.amazonaws.com/fecphotos/109-fit.jpg")}}',
    case_size: '{{random(40, 41, 42, 45, 47)}}',
    case_thickness: '{{random(7, 9, 11, 12, 13.25, 13.5)}}',
    strap_width: '{{integer(20, 24)}}',
    movement: '{{random("Battery powered 5 hand Miyota dual time movement", "Battery powered 3 hand Miyota quartz", "Miyota 821A automatic", "Battery powered 5 hand Miyota with center chronograph hand", "Battery powered 6 hand chronograph with date", "Battery powered 3 hand Miyota quartz with date")}}',
    glass: '{{random("Hardened mineral crystal", "Hardened K1 mineral crystal")}}',
    water_resistance: '{{random(3, 5, 7, 10)}}',
    case_description: '{{random("Brushed smoke stainless steel", "Matte smoke stainless steel", "Matte gunmetal stainless steel", "Brushed black stainless steel", "Brushed rose gold stainless steel")}}',
    dial: '{{random("White", "Grey", "Black", "Dark grey")}}',
    dial_details: '{{random("Gunmetal hands & markers / Gunmetal second hand", "Grey hands / Gunmetal markers / Grey second hand", "Gunmetal hands & markers", "Gunmetal hands & markers / White second hand", "Rose gold hands & markers")}}',
    strap: '{{random("Matte smoke 100% genuine leather", "Matte smoke stainless steel", "Caramel leather", "Black 100% genuine leather")}}',
    interchangeable_strap: 'Yes',
    subdials: '{{random("N/A", "2 subdials - dual time zone", "60 minute timer, running seconds", "24 hour clock, 30 minute timer, and 60 second timer")}}'
  }
]