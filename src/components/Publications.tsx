import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaFilter } from 'react-icons/fa';
import './Publications.css';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  link?: string;
}

const Publications: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const researchArticles: Publication[] = [
    {
      id: '1',
      title: 'Prompt injection attacks on vision-language models for surgical decision support',
      authors: ['Zhang, Z.', 'Qadir, M. I.', 'Cartstens, M.', 'Zhang, E.H.', 'Loiselle, M.S.', 'Martinus, F.M.', 'Mroczkowski, M.K.', 'Clusmann, J.', 'Kather, J.N.', 'Kolbinger, F.R.'],
      journal: 'medRxiv',
      year: 2025,
      doi: '10.1101/2025.07.16.25331645',
      link: 'https://www.medrxiv.org/content/10.1101/2025.07.16.25331645v1'
    },
    {
      id: '2',
      title: 'Unmanned surface vehicle for intelligent water quality assessment to promote sustainable human health',
      authors: ['Qadir, M. I.', 'Mumtaz, R.', 'Manzoor, M.', 'Saleem, M.', 'Khan, M. A.', 'Charlesworth, S.'],
      journal: 'Water Supply',
      year: 2024,
      doi: '10.2166/ws.2024.141',
      link: 'https://iwaponline.com/ws/article/24/7/2259/102957/Unmanned-surface-vehicle-for-intelligent-water'
    }
  ];

  const reviewArticles: Publication[] = [
    {
      id: '3',
      title: 'Artificial Intelligence in Pancreatic Intraductal Papillary Mucinous Neoplasm Imaging: A Systematic Review',
      authors: ['Qadir, M. I.', 'Baril, J.', 'Yip-Schneider, M. T.', 'Schonlau, D.', 'Tran, TTT.', 'Schmidt, C. M.', 'Kolbinger, F. R.'],
      journal: 'PLOS Digital Health',
      year: 2025,
      doi: '10.1371/journal.pdig.0000920',
      link: 'https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000920'
    },
    {
      id: '4',
      title: 'From marginal gains to clinical utility: machine learning-based percutaneous coronary intervention risk prediction models',
      authors: ['Qadir, M. I.', 'Hira, R. S.', 'Kolbinger, F. R.'],
      journal: 'European Heart Journal - Digital Health',
      year: 2025,
      doi: '10.1093/ehjdh/ztaf001',
      link: 'https://doi.org/10.1093/ehjdh/ztaf001'
    }
  ];

  const conferenceAbstracts: Publication[] = [
    {
      id: '5',
      title: 'Towards personalized management of intraductal papillary mucinous neoplasms with multimodal artificial intelligence',
      authors: ['Qadir, M. I.', 'Baril, J.', 'Yip-Schneider, M. T.', 'Schonlau, D.', 'Tran, TTT.', 'Schmidt, C. M.', 'Kolbinger, F. R.'],
      journal: 'American Society of Clinical Oncology (ASCO) Annual Meeting',
      year: 2025,
      doi: '10.1200/JCO.2025.43.16_suppl.e16461',
      link: 'https://doi.org/10.1200/JCO.2025.43.16_suppl.e16461'
    }
  ];

  const allPublications = [...researchArticles, ...reviewArticles, ...conferenceAbstracts];

  const years = ['all', ...Array.from(new Set(allPublications.map(p => p.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a))];

  const filteredResearchArticles = selectedYear === 'all' 
    ? researchArticles 
    : researchArticles.filter(pub => pub.year.toString() === selectedYear);

  const filteredReviewArticles = selectedYear === 'all' 
    ? reviewArticles 
    : reviewArticles.filter(pub => pub.year.toString() === selectedYear);

  const filteredConferenceAbstracts = selectedYear === 'all' 
    ? conferenceAbstracts 
    : conferenceAbstracts.filter(pub => pub.year.toString() === selectedYear);

  const getJournalBadgeColor = (journal: string) => {
    if (journal.includes('Nature') || journal.includes('Science')) return 'nature';
    if (journal.includes('IEEE')) return 'ieee';
    if (journal.includes('ACM')) return 'acm';
    if (journal.includes('Water Supply')) return 'water-supply';
    if (journal.includes('medRxiv')) return 'medrxiv';
    if (journal.includes('PLOS')) return 'plos';
    if (journal.includes('European Heart Journal')) return 'ehj';
    if (journal.includes('ASCO')) return 'asco';
    return 'default';
  };

  return (
    <section id="publications" className="publications">
      <div className="publications-container">
        <motion.div
          className="publications-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">
          Full publication list available on Google Scholar
          </p>
        </motion.div>

        <motion.div
          className="publications-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="filter-container">
            <FaFilter className="filter-icon" />
            <span className="filter-label">Filter by year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="year-select"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
          <div className="publication-count">
            {filteredResearchArticles.length + filteredReviewArticles.length + filteredConferenceAbstracts.length} publication{(filteredResearchArticles.length + filteredReviewArticles.length + filteredConferenceAbstracts.length) !== 1 ? 's' : ''}
          </div>
        </motion.div>

        {/* Research Articles Section */}
        <motion.h3
          className="research-articles-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Research Articles
        </motion.h3>

        <div className="publications-list">
          {filteredResearchArticles.map((publication, index) => (
            <motion.div
              key={publication.id}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="publication-header">
                <div className="publication-info">
                  <div className="publication-meta">
                    <span className="publication-year">
                      <FaCalendarAlt className="meta-icon" />
                      {publication.year}
                    </span>
                    <span className={`journal-badge ${getJournalBadgeColor(publication.journal)}`}>
                      {publication.journal}
                    </span>
                  </div>
                  <h3 className="publication-title">{publication.title}</h3>
                  <div className="publication-authors">
                    <FaUsers className="authors-icon" />
                    <span>
                      {publication.authors.map((author, index) => (
                        <React.Fragment key={index}>
                          {author === 'Qadir, M. I.' ? (
                            <span className="highlighted-author">{author}</span>
                          ) : (
                            author
                          )}
                          {index < publication.authors.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="publication-actions">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                      title="View publication"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {publication.doi && (
                <div className="publication-doi">
                  <FaFileAlt className="doi-icon" />
                  <span>DOI: </span>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    {publication.doi}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Review & Comment Articles Section */}
        {filteredReviewArticles.length > 0 && (
          <>
            <motion.h3
              className="research-articles-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Review & Comment Articles
            </motion.h3>

            <div className="publications-list">
              {filteredReviewArticles.map((publication, index) => (
            <motion.div
              key={publication.id}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="publication-header">
                <div className="publication-info">
                  <div className="publication-meta">
                    <span className="publication-year">
                      <FaCalendarAlt className="meta-icon" />
                      {publication.year}
                    </span>
                    <span className={`journal-badge ${getJournalBadgeColor(publication.journal)}`}>
                      {publication.journal}
                    </span>
                  </div>
                  <h3 className="publication-title">{publication.title}</h3>
                  <div className="publication-authors">
                    <FaUsers className="authors-icon" />
                    <span>
                      {publication.authors.map((author, index) => (
                        <React.Fragment key={index}>
                          {author === 'Qadir, M. I.' ? (
                            <span className="highlighted-author">{author}</span>
                          ) : (
                            author
                          )}
                          {index < publication.authors.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="publication-actions">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                      title="View publication"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {publication.doi && (
                <div className="publication-doi">
                  <FaFileAlt className="doi-icon" />
                  <span>DOI: </span>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    {publication.doi}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
            </div>
          </>
        )}

        {/* Conference Abstracts Section */}
        {filteredConferenceAbstracts.length > 0 && (
          <>
            <motion.h3
              className="research-articles-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Conference Abstracts
            </motion.h3>

            <div className="publications-list">
              {filteredConferenceAbstracts.map((publication, index) => (
            <motion.div
              key={publication.id}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="publication-header">
                <div className="publication-info">
                  <div className="publication-meta">
                    <span className="publication-year">
                      <FaCalendarAlt className="meta-icon" />
                      {publication.year}
                    </span>
                    <span className={`journal-badge ${getJournalBadgeColor(publication.journal)}`}>
                      {publication.journal}
                    </span>
                  </div>
                  <h3 className="publication-title">{publication.title}</h3>
                  <div className="publication-authors">
                    <FaUsers className="authors-icon" />
                    <span>
                      {publication.authors.map((author, index) => (
                        <React.Fragment key={index}>
                          {author === 'Qadir, M. I.' ? (
                            <span className="highlighted-author">{author}</span>
                          ) : (
                            author
                          )}
                          {index < publication.authors.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="publication-actions">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                      title="View publication"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {publication.doi && (
                <div className="publication-doi">
                  <FaFileAlt className="doi-icon" />
                  <span>DOI: </span>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    {publication.doi}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
            </div>
          </>
        )}

        {(filteredResearchArticles.length === 0 && filteredReviewArticles.length === 0 && filteredConferenceAbstracts.length === 0) && (
          <motion.div
            className="no-publications"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaFileAlt className="no-pub-icon" />
            <p>No publications found for the selected year.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Publications;
