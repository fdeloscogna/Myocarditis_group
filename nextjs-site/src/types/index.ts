export interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  image: string;
  tags: string[];
  links: {
    label: string;
    url: string;
    icon: string;
  }[];
  badge?: string;
}

export interface ResearchArea {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Publication {
  year: string;
  title: string;
  authors: string;
  journal: string;
  pubmedUrl: string;
}

export interface NetworkPartner {
  flag: string;
  name: string;
  country: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  content: string;
  link?: string;
}
