// CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

export default function CohortDetails({ cohort }) {
  // cohort is assumed to be an object like:
  // { name: "Spring 2025", status: "ongoing", startDate: "...", ... }

  // decide the <h3> color based on status
  const headingColor = cohort.status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>
        {cohort.name}
      </h3>
      <dl>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>
        {/* add more details as needed */}
      </dl>
    </div>
  );
}
