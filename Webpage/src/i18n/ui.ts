export const languages = {
    en: 'EN',
    sl: 'SL',
  };
  
  export const defaultLang = 'sl';

  export const showDefaultLang = false;

  export const routes = {
    en: {
      'resitvenexavia': 'solutions/nexavia',
      'resitvethynkr': 'solutions/thynkr',
      'storitverazvoj-programske-opreme': 'services/software-development',
      'storitvearhitektura-programske-opreme-in-svetovanje': 'services/software-arhitecture-and-consulting',
      'storitvedevops-in-platform-engineering': 'services/devops-and-platform-engineering',
      'o-nas': 'about',
      'kontakt': 'contact',
    }
  }
  
  export const ui = {
    en: {
      'global:moreinfo': 'More info',

      'nav.contact': 'Contact',
      'nav.solutions': 'Solutions',
      'nav.services': 'Additional Services',
      'nav.about': 'About',
      'nav.softwaredevelopment': 'Software Development',
      'nav.softwarearhitectureandconsulting': 'Software Arhitecture and Consulting',
      'nav.devopsandplatformengineering': 'DevOps and Platform Engineering',

      'landingpage:maincompanytitle': 'KUEM solutions and services',
      'landingpage:maincompanytitledescription': 'Tailored software solutions and consulting services designed to meet the most demanding challenges.',
      'landingpage:maincompanytitledescriptioninformation': 'KUEM brings together experts with extensive experience in various complex software solutions.',
      'landingpage:trustedby': 'Trusted by',

      'footer:allrightsreserved': 'All rights reserved',
      'footer:socialnetworks': 'Social Networks',
    },
    sl: {
      'kuem': 'Kuem',
      'kuemdoo': 'Kuem d.o.o.',

      'global:moreinfo': 'Več informacij',

      'nav.contact': 'Kontakt',
      'nav.solutions': 'Rešitve',
      'nav.services': 'Dodatne storitve',
      'nav.about': 'O nas',
      'nav.softwaredevelopment': 'Razvoj programske opreme',
      'nav.softwarearhitectureandconsulting': 'Arhitektura programske opreme in svetovanje',
      'nav.devopsandplatformengineering': 'DevOps in Platform Engineering',

      'landingpage:maincompanytitle': 'KUEM rešitve in storitve',
      'landingpage:maincompanytitledescription': 'Dovršene programske rešitve in svetovanja primerna za najzahtevnajše izzive.',
      'landingpage:maincompanytitledescriptioninformation': 'KUEM združuje strokovnjake z bogatimi izkušnjami na področju najrazličnejših kompleksnih programskih rešitev.',
      'landingpage:trustedby': 'Zaupajo nam',

      'footer:allrightsreserved': 'Vse pravice pridržane',
      'footer:socialnetworks': 'Socialna omrežja',

      'nexavia': 'Nexavia',
      'thynkr': 'Thynkr',
    },
  } as const;