import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    axios.get(apiEndpoint)
      .then(res => setAlbums(res.data))
      .catch(err => console.error('API Error:', err));
  }, [apiEndpoint]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.toggleBtn} onClick={toggleCollapse}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>

      {!isCollapsed && (
        <div className={styles.cardGrid}>
          {albums.map(album => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
