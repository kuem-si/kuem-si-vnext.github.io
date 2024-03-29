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
      'nav.contact': 'Contact',
      'nav.solutions': 'Solutions',
      'nav.services': 'Additional Services',
      'nav.about': 'About',
      'nav.softwaredevelopment': 'Software Development',
      'nav.softwarearhitectureandconsulting': 'Software Arhitecture and Consulting',
      'nav.devopsandplatformengineering': 'DevOps and Platform Engineering',

      'footer:allrightsreserved': 'All rights reserved',
      'footer:socialnetworks': 'Social Networks',
    },
    sl: {
      'kuem': 'Kuem',
      'kuemdoo': 'Kuem d.o.o.',

      'nav.contact': 'Kontakt',
      'nav.solutions': 'Rešitve',
      'nav.services': 'Dodatne storitve',
      'nav.about': 'O nas',
      'nav.softwaredevelopment': 'Razvoj programske opreme',
      'nav.softwarearhitectureandconsulting': 'Arhitektura programske opreme in svetovanje',
      'nav.devopsandplatformengineering': 'DevOps in Platform Engineering',

      'footer:allrightsreserved': 'Vse pravice pridržane',
      'footer:socialnetworks': 'Socialna omrežja',

      'nexavia': 'Nexavia',
      'thynkr': 'Thynkr',
    },
  } as const;