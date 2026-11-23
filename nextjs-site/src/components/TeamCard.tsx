/* eslint-disable @next/next/no-img-element */
import { TeamMember } from '@/types';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
  const isExternal = member.image.startsWith('http');
  
  return (
    <div className={`${styles.card} fi d${delay}`}>
      <div className={styles.top}>
        <div className={styles.avatarWrapper}>
          <img
            src={isExternal ? member.image : `/Myocarditis_group${member.image}`}
            alt={member.name}
            width={80}
            height={80}
            className={styles.avatar}
          />
        </div>
        <div>
          <div className={styles.name}>{member.name}</div>
          <div className={styles.role}>{member.role}</div>
          <div className={styles.affiliation}>
            {member.affiliation.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </div>
        </div>
      </div>
      
      <p className={styles.bio}>{member.bio}</p>
      
      <div className={styles.tags}>
        {member.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <div className={styles.links}>
        {member.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className={`fas ${link.icon}`}></i> {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
