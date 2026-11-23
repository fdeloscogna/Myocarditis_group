'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import { teamMembers, researchAreas, publications, networkPartners, escBodies } from '@/data/content';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fi').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <div className={styles.heroPill}>
                <i className="fas fa-certificate"></i> Research Group for Myocarditis, Pericarditis & Inflammatory Heart Diseases
              </div>
              <h1 className={styles.heroTitle}>
                Cardioimmunology, Myocarditis & <span className={styles.redText}>Pericarditis</span> Research
              </h1>
              <p className={styles.heroDesc}>
                Multidisciplinary clinical and academic team at the University of Padova dedicated to the study, diagnosis, and treatment of myocarditis, acute and recurrent pericarditis, and immune mediated heart diseases.
              </p>
              <div className={styles.heroActions}>
                <a href="#team" className="btn btn-primary">
                  <i className="fas fa-users"></i> Research Team
                </a>
                <a href="#contact" className="btn btn-outline">
                  <i className="fas fa-handshake"></i> Propose Collaboration
                </a>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.statBox}>
                  <h3>30+</h3>
                  <p>Years of Research</p>
                </div>
                <div className={styles.statBox}>
                  <h3>200+</h3>
                  <p>Peer Reviewed Papers</p>
                </div>
                <div className={styles.statBox}>
                  <h3>15+</h3>
                  <p>International Centers</p>
                </div>
                <div className={styles.statBox}>
                  <h3>60 ECTS</h3>
                  <p>CARDIM Master</p>
                </div>
              </div>
            </div>

            <div className={styles.heroCards}>
              {[
                { icon: 'fa-dna', title: 'Immunophenotyping & Autoantibodies', sub: 'Myocarditis & Pericarditis Biomarkers', desc: 'Serum cardiac autoantibodies and immune cell profiling to classify etiology and monitor immunosuppressive and biologic therapies.' },
                { icon: 'fa-radiation', title: 'Cardiovascular Magnetic Resonance', sub: 'Myocardial & Pericardial Imaging', desc: 'Parametric T1 and T2 mapping, extracellular volume fraction, and LGE protocols for myocarditis, pericarditis, and constrictive physiology.' },
                { icon: 'fa-shield-virus', title: 'Recurrent Pericarditis & Anti IL 1 Therapies', sub: 'Targeted Immunomodulation', desc: 'Autoinflammatory mechanisms, interleukin 1 receptor blockade, colchicine response evaluation, and recurrence prevention.' },
                { icon: 'fa-microscope', title: 'Endomyocardial Biopsy & Registries', sub: 'Histology & Clinical Data Science', desc: 'Histological characterization, viral PCR, and multicenter registry data integration for clinical risk stratification.' },
              ].map((card, i) => (
                <div key={i} className={`${styles.featureCard} fi d${i + 1}`}>
                  <div className={styles.fcHead}>
                    <div className={styles.fcIcon}><i className={`fas ${card.icon}`}></i></div>
                    <div>
                      <div className={styles.fcTitle}>{card.title}</div>
                      <div className={styles.fcSub}>{card.sub}</div>
                    </div>
                  </div>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className="fi">
              <div className={styles.missionCard}>
                <div className="section-label">Clinical & Academic Activity</div>
                <h2 className={styles.missionTitle}>Cardioimmunology, Myocarditis & Pericardial Diseases</h2>
                <p className={styles.missionDesc}>
                  The group runs a specialized outpatient clinic, clinical trial unit, and registries for patients with acute myocarditis, inflammatory cardiomyopathies, and acute or recurrent pericarditis. Research directly links immunological findings with targeted medical therapies, including immunosuppression and anti IL 1 biological agents.
                </p>
                <div className={styles.missionBadges}>
                  {[
                    { num: '1,000+', label: 'Cohort Patients Followed' },
                    { num: 'ESC', label: 'Guidelines & Working Groups' },
                    { num: 'EACVI', label: 'CMR Certified Specialists' },
                    { num: 'LT-CMY', label: 'Registry Coordination' },
                  ].map((badge) => (
                    <div key={badge.label} className={styles.mbItem}>
                      <div className={styles.mbNum}>{badge.num}</div>
                      <div className={styles.mbLabel}>{badge.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="fi d2">
              <div className="section-label">About the Group</div>
              <h2 className="section-title">Clinical & Translational Cardioimmunology</h2>
              <p className="section-desc">
                Based at the Department of Cardiac, Thoracic, Vascular Sciences and Public Health, University of Padova, the group integrates clinical cardiology, advanced cardiac MRI, molecular immunology, and biostatistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={styles.research}>
        <div className="container">
          <div className={`${styles.rHeader} fi`}>
            <div className="section-label">Research Areas</div>
            <h2 className="section-title">Scientific Focus Areas</h2>
            <p className="section-desc" style={{ margin: '14px auto 0' }}>
              Primary research domains in myocarditis, pericarditis, and inflammatory heart diseases.
            </p>
          </div>
          <div className={styles.rGrid}>
            {researchAreas.map((area, i) => (
              <div key={area.number} className={`${styles.rCard} fi d${(i % 3)}`}>
                <div className={styles.rNum}>{area.number}</div>
                <div className={styles.rIcon}><i className={`fas ${area.icon}`}></i></div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className={styles.rTags}>
                  {area.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className="fi">
            <div className="section-label">Faculty & Researchers</div>
            <h2 className="section-title">Research Team</h2>
            <p className="section-desc">
              Cardiologists, imaging specialists, clinical researchers, and biostatisticians working jointly on myocarditis, pericarditis, and inflammatory heart diseases.
            </p>
          </div>
          <div className={styles.tGrid}>
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i % 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={styles.publications}>
        <div className="container">
          <div className="fi">
            <div className="section-label">Publications</div>
            <h2 className="section-title">Selected Key Papers</h2>
            <p className="section-desc">
              Representative peer reviewed studies in myocarditis, pericarditis, cardiovascular magnetic resonance, and cardioimmunology.
            </p>
          </div>
          <div className={styles.pubList}>
            {publications.map((pub, i) => (
              <div key={i} className={`${styles.pubCard} fi d${i % 3}`}>
                <div className={styles.pubYear}>{pub.year}</div>
                <div className={styles.pubContent}>
                  <h4>{pub.title}</h4>
                  <div className={styles.pubAuthors}>{pub.authors}</div>
                  <div className={styles.pubJournal}>
                    <i className="fas fa-book-journal-whills"></i> {pub.journal}
                  </div>
                </div>
                <a href={pub.pubmedUrl} target="_blank" rel="noopener noreferrer" className={styles.pubBtn}>
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className={styles.network}>
        <div className="container">
          <div className={`${styles.nHeader} fi`}>
            <div className="section-label">International Network</div>
            <h2 className="section-title">Academic Collaborations</h2>
            <p className="section-desc" style={{ margin: '14px auto 0' }}>
              Active research partnerships with European and international cardiology departments and registries.
            </p>
          </div>
          <div className={`${styles.nGrid} fi`}>
            {networkPartners.map((partner) => (
              <div key={partner.name} className={styles.nCard}>
                <div className={styles.nFlag}>{partner.flag}</div>
                <div className={styles.nName}>{partner.name}</div>
                <div className={styles.nCountry}>{partner.country}</div>
              </div>
            ))}
          </div>
          <div className={`${styles.bodiesEsc} fi`}>
            <div className={styles.bodiesTitle}>Scientific Society Memberships</div>
            <div className={styles.escPills}>
              {escBodies.map((body) => (
                <div key={body.label} className={styles.escPill}>
                  <i className={`fas ${body.icon}`}></i> {body.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles.cGrid}>
            <div className="fi">
              <div className="section-label">Collaboration & Contact</div>
              <h2 className="section-title">Scientific Inquiries</h2>
              <p className="section-desc">
                The group welcomes research proposals, clinical registry participation, and educational inquiries from physicians and academic centers.
              </p>
              <div className={styles.cItems}>
                <div className={styles.cItem}>
                  <div className={styles.cIco}><i className="fas fa-university"></i></div>
                  <div>
                    <h5>Department & Institution</h5>
                    <p>Department of Cardiac, Thoracic, Vascular Sciences and Public Health<br/>University of Padova, Padova University Hospital</p>
                  </div>
                </div>
                <div className={styles.cItem}>
                  <div className={styles.cIco}><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h5>Address</h5>
                    <p>Via Giustiniani 2, 35128 Padova (PD), Italy</p>
                  </div>
                </div>
                <div className={styles.cItem}>
                  <div className={styles.cIco}><i className="fas fa-graduation-cap"></i></div>
                  <div>
                    <h5>CARDIM Master</h5>
                    <a href="https://uel.unipd.it/master-e-corsi/cardim-cardioimmunologia/" target="_blank" rel="noopener noreferrer">UniPD Executive Learning Portal</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.formCard} fi d2`}>
              <h3>Send a Message</h3>
              <p>For scientific collaborations, registry studies, or CARDIM course information.</p>
              <form>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" placeholder="e.g. Maria" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" placeholder="e.g. Rossi" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Institutional Email</label>
                  <input type="email" placeholder="name@hospital.org" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Institution</label>
                  <input type="text" placeholder="University or Hospital name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <select required>
                    <option value="">Select subject...</option>
                    <option>Scientific Research Collaboration</option>
                    <option>Recurrent Pericarditis / Myocarditis Registry</option>
                    <option>CARDIM Master Inquiry</option>
                    <option>Visiting Fellowship</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea placeholder="Describe your proposal or inquiry..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.fGrid}>
            <div className={styles.fBrand}>
              <div className={styles.fLogo}>
                <div className={styles.logoBadge}><i className="fas fa-heart-pulse"></i></div>
                <div>
                  Cardioimmunology Lab
                  <span style={{ color: '#E82C48' }}>University of Padova</span>
                </div>
              </div>
              <p>Research group in cardioimmunology, myocarditis, and pericardial diseases at the Department of Cardiac, Thoracic, Vascular Sciences and Public Health, University of Padova, Italy.</p>
            </div>
            <div className={styles.fCol}>
              <h5>Navigation</h5>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#publications">Publications</a></li>
              </ul>
            </div>
            <div className={styles.fCol}>
              <h5>Academic Links</h5>
              <ul>
                <li><a href="https://uel.unipd.it/master-e-corsi/cardim-cardioimmunologia/" target="_blank" rel="noopener noreferrer">CARDIM Master</a></li>
                <li><a href="https://esc365.escardio.org/person/9537" target="_blank" rel="noopener noreferrer">ESC 365 Profile</a></li>
                <li><a href="https://orcid.org/0000-0002-4901-5655" target="_blank" rel="noopener noreferrer">Prof. Caforio ORCID</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.fBottom}>
            <p>© 2025 Cardioimmunology Research Group, University of Padova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
