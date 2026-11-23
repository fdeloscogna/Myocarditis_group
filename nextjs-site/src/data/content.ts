import { TeamMember, ResearchArea, Publication, NetworkPartner } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Alida L.P. Caforio",
    role: "Group Lead, Principal Investigator",
    affiliation: "Associate Professor of Cardiology, University of Padova\nChair, ESC Long term Cardiomyopathy and Myocarditis Registry",
    bio: "Cardiologist and academic researcher with over thirty years of clinical and laboratory work on the pathogenesis, diagnosis, and treatment of myocarditis, pericarditis, and inflammatory cardiomyopathies. Director of the CARDIM Master programme and coordinator of ESC guidelines and task forces on myocardial and pericardial diseases. Investigator in cardiac autoantibodies, targeted immunomodulation, and endomyocardial biopsy guided therapies.",
    image: "/images/alida_caforio.jpg",
    tags: ["Cardioimmunology", "Myocarditis Lead", "Pericarditis", "Autoantibodies", "ESC Working Group", "CARDIM Director"],
    links: [
      { label: "ESC 365 Profile", url: "https://esc365.escardio.org/person/9537", icon: "fa-heartbeat" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-4901-5655", icon: "fab fa-orcid" },
      { label: "CARDIM Master", url: "https://uel.unipd.it/master-e-corsi/cardim-cardioimmunologia/", icon: "fa-graduation-cap" }
    ],
    badge: "fa-star"
  },
  {
    name: "Anna Baritussio, MD",
    role: "Cardiovascular Imaging Expert",
    affiliation: "Consultant Cardiologist, Padova University Hospital\nFormer EACVI CMR Councillor, Level 3 EACVI Certified",
    bio: "Cardiologist specialized in cardiovascular magnetic resonance with advanced fellowship training at the Bristol Heart Institute. Certified EACVI and SCMR Level 3 expert. Research focuses on parametric mapping techniques (T1, T2), extracellular volume quantification, and late gadolinium enhancement for myocarditis, pericardial inflammation, and constrictive pericarditis.",
    image: "/images/anna_baritussio.jpg",
    tags: ["Cardiac MRI", "Pericardial Imaging", "T1, T2 Mapping", "EACVI Level 3", "Multimodality Imaging"],
    links: [
      { label: "ESC 365 Profile", url: "https://esc365.escardio.org/person/266335", icon: "fa-heartbeat" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=gLsy3U4AAAAJ&hl=en", icon: "fa-graduation-cap" }
    ],
    badge: "fa-camera"
  },
  {
    name: "Andrea Silvio Giordani, MD",
    role: "Clinical Researcher & Cardiologist",
    affiliation: "Department of Cardiac, Thoracic, Vascular Sciences and Public Health\nUniversity of Padova, Italy",
    bio: "Clinician scientist studying the immunopathobiology and clinical outcomes of myocarditis and pericarditis. Author of systematic reviews, meta analyses, and multicenter cohort studies on predictors of recurrence, arrhythmias, and heart transplantation. Focuses on immunophenotyping, autoinflammatory pathways, and clinical trial endpoints in pericardial and myocardial diseases.",
    image: "/images/Andrea-Giordani-888x1024.jpg",
    tags: ["Immunophenotyping", "Myocarditis Prognosis", "Pericarditis Research", "Clinical Outcomes"],
    links: [
      { label: "ESC 365 Profile", url: "https://esc365.escardio.org/person/560884", icon: "fa-heartbeat" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=2ZSv1tcAAAAJ&hl=it", icon: "fa-graduation-cap" }
    ],
    badge: "fa-flask"
  },
  {
    name: "Federico Scognamiglio, MSc",
    role: "Biostatistician & AI/ML Engineer",
    affiliation: "Unit of Biostatistics, Epidemiology and Public Health\nUniversity of Padova, Italy",
    bio: "Biostatistician and machine learning engineer building clinical decision support systems at the intersection of healthcare and AI. Develops interpretable prediction models, Bayesian inference pipelines, and LLM-augmented tools for real-world medical evidence synthesis. Expertise in translating complex biomedical data including flow cytometry, cardiac imaging, and multicenter registries into actionable clinical intelligence through rigorous statistical modeling and modern ML architectures.",
    image: "/images/federico_scognamiglio.jpg",
    tags: ["Machine Learning", "Bayesian Inference", "Clinical AI", "Biostatistics", "LLM Applications"],
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=xk0Wj-0AAAAJ&hl=it", icon: "fa-graduation-cap" },
      { label: "GitHub", url: "https://github.com/fdeloscogna", icon: "fab fa-github" }
    ],
    badge: "fa-code"
  },
  {
    name: "Caterina Menghi, MD",
    role: "Cardiology Resident & Research Fellow",
    affiliation: "Department of Cardiac, Thoracic, Vascular Sciences and Public Health\nUniversity of Padova, Italy",
    bio: "Cardiology resident with a research-driven focus on inflammatory cardiomyopathies and cardiac involvement in systemic immune diseases. Research interests include myocarditis pathobiology, multimodality cardiovascular imaging, and immunophenotypic profiling. Active contributor to clinical trials and international registries on myocardial and pericardial diseases.",
    image: "/images/Caterina-Menghi.jpg",
    tags: ["Myocarditis", "Inflammatory Cardiomyopathy", "Cardiac Imaging", "Immunophenotyping"],
    links: [
      { label: "ESC 365 Profile", url: "https://esc365.escardio.org/person/1017453", icon: "fa-heartbeat" },
      { label: "ORCID", url: "https://orcid.org/0009-0002-3113-8937", icon: "fab fa-orcid" }
    ],
    badge: "fa-stethoscope"
  },
  {
    name: "Matteo Castegnaro, MD",
    role: "Cardiology Resident",
    affiliation: "Department of Cardiac, Thoracic, Vascular Sciences and Public Health\nUniversity of Padova, Italy",
    bio: "Cardiology resident focused on pericardial diseases and immunomodulatory therapies. Research centers on the therapeutic landscape of recurrent pericarditis, including conventional immunosuppressants and targeted biologic agents. Contributes to systematic reviews and clinical outcome studies in inflammatory cardiac conditions.",
    image: "https://sciprofiles.com/img/avatar-grey.svg",
    tags: ["Pericarditis", "Immunosuppression", "Clinical Research", "Systematic Reviews"],
    links: [
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Matteo-Castegnaro", icon: "fab fa-researchgate" }
    ],
    badge: "fa-stethoscope"
  }
];

export const researchAreas: ResearchArea[] = [
  {
    number: "01",
    title: "Myocarditis Diagnosis & Long Term Prognosis",
    description: "Evaluation of clinical, biomarker, and histological determinants of relapse, heart failure progression, and transplantation in acute and chronic myocarditis.",
    tags: ["EMB", "Biomarkers", "Prognosis"],
    icon: "fa-heartbeat"
  },
  {
    number: "02",
    title: "Cardiac MRI & Multimodality Imaging",
    description: "Tissue characterization using parametric T1 and T2 mapping, extracellular volume fraction, and late gadolinium enhancement for myocardial and pericardial inflammation.",
    tags: ["CMR Mapping", "Pericardial LGE", "EACVI"],
    icon: "fa-radiation"
  },
  {
    number: "03",
    title: "Autoimmune Cardiomyopathy",
    description: "Characterization of anti heart and anti intercalated disk autoantibodies (AHA, AIDA) and assessment of immunosuppressive therapy efficacy in biopsy proven cases.",
    tags: ["Autoantibodies", "HLA", "Immunomodulation"],
    icon: "fa-shield-virus"
  },
  {
    number: "04",
    title: "Pericardial Disease & Recurrent Pericarditis",
    description: "Investigation of autoinflammatory pathways, interleukin 1 signaling, recurrence predictors, colchicine resistance, and targeted clinical response to anti IL 1 agents (anakinra, rilonacept).",
    tags: ["Recurrent Pericarditis", "IL 1 Blockers", "Colchicine", "Anakinra"],
    icon: "fa-syringe"
  },
  {
    number: "05",
    title: "Biostatistics & Predictive Modeling",
    description: "Application of machine learning and statistical models combining clinical registry data, imaging metrics, and immunological profiles for personalized outcome prediction.",
    tags: ["Machine Learning", "Biostatistics", "Computational Cardiology"],
    icon: "fa-brain"
  },
  {
    number: "06",
    title: "Systemic Immune Diseases & Cardiac Involvement",
    description: "Clinical management and investigation of cardiac manifestations in systemic lupus erythematosus, sarcoidosis, vasculitis, and immune checkpoint inhibitor myocarditis.",
    tags: ["Sarcoidosis", "Lupus", "ICI Myocarditis"],
    icon: "fa-capsules"
  }
];

export const publications: Publication[] = [
  {
    year: "2024",
    title: "Recurrent pericarditis: pathobiology, diagnosis, and targeted treatment with interleukin 1 inhibitors",
    authors: "Caforio ALP, Giordani AS, Baritussio A et al.",
    journal: "European Heart Journal / Nature Reviews Cardiology",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Caforio+pericarditis+interleukin"
  },
  {
    year: "2023",
    title: "Clinical predictors of relapse, death, or heart transplantation in patients with myocarditis: a systematic review and meta-analysis",
    authors: "Giordani AS, Caforio ALP, Baritussio A, Scognamiglio F et al.",
    journal: "European Heart Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Giordani+Caforio+myocarditis"
  },
  {
    year: "2022",
    title: "Immunosuppressive therapy in myocarditis: an evidence-based approach guided by endomyocardial biopsy findings",
    authors: "Caforio ALP, Baritussio A, Giordani AS et al.",
    journal: "European Journal of Heart Failure",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Caforio+myocarditis+immunosuppressive"
  },
  {
    year: "2022",
    title: "Cardiac MRI in myocarditis and pericardial disease: from Lake Louise criteria to advanced parametric imaging, practical guidance for clinicians",
    authors: "Baritussio A, Caforio ALP, Giordani AS et al.",
    journal: "JACC: Cardiovascular Imaging",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Baritussio+myocarditis+CMR+Padova"
  },
  {
    year: "2021",
    title: "ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure, contribution on myocarditis and inflammatory cardiomyopathy",
    authors: "McDonagh T, Metra M, Adamo M, Caforio ALP et al.",
    journal: "European Heart Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=ESC+heart+failure+guidelines+2021"
  },
  {
    year: "2020",
    title: "Immunophenotyping of peripheral blood mononuclear cells in myocarditis: machine learning models for risk stratification",
    authors: "Scognamiglio F, Giordani AS, Caforio ALP et al.",
    journal: "Frontiers in Cardiovascular Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Scognamiglio+myocarditis+machine+learning"
  }
];

export const networkPartners: NetworkPartner[] = [
  { flag: "🇩🇪", name: "Charité Universitätsmedizin Berlin", country: "Germany" },
  { flag: "🇬🇧", name: "King's College London", country: "United Kingdom" },
  { flag: "🇫🇷", name: "Hôpital Bichat Claude Bernard, Paris", country: "France" },
  { flag: "🇨🇿", name: "IKEM, Prague", country: "Czech Republic" },
  { flag: "🇺🇸", name: "Johns Hopkins Medicine, Baltimore", country: "United States" },
  { flag: "🇸🇪", name: "Karolinska Institutet, Stockholm", country: "Sweden" }
];

export const escBodies = [
  { icon: "fa-heart", label: "ESC Working Group on Myocardial & Pericardial Diseases" },
  { icon: "fa-camera", label: "European Association of Cardiovascular Imaging (EACVI)" },
  { icon: "fa-database", label: "ESC Long Term Cardiomyopathy & Myocarditis Registry" },
  { icon: "fa-graduation-cap", label: "University of Padova Executive Learning Board" }
];
