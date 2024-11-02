import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from './patient-card.module.scss';

const CLOSED_CARD = false;
const VIEW_MORE = 'View More';
const VIEW_LESS = 'View Less';

export const PatientCard = () => {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(CLOSED_CARD);

  function onCardDeatilsClick() {
    setIsCardExpanded((current) => !current);
  }

  return (
    <div className={styles['card']}>
      <div className={styles['name']}>Real nuevoss</div>
      <img
        className={styles['image']}
        src="http://res.cloudinary.com/duaace1ft/image/upload/v1724979774/pukichwcfa0sdmhq5irm.jpg"
        alt="Patient Image"
      />
      <a className={styles['website']}>https://squeaky-angstrom.com</a>
      <div className={styles['actions']} onClick={onCardDeatilsClick}>
        {isCardExpanded ? VIEW_LESS : VIEW_MORE}
        {isCardExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isCardExpanded && (
        <div className={styles['details']}>
          Pariatur repellat voluptas perferendis error. Sint maiores recusandae
          minus accusamus sapiente delectus eveniet expedita. Impedit deleniti
          aliquam non.\nExpedita odit nobis ipsa incidunt in praesentium beatae.
          Necessitatibus animi ex vero repellendus ipsum quidem sequi. Sint
          architecto officiis vero labore totam perspiciatis perferendis nisi
          aspernatur.\nIllum reprehenderit suscipit suscipit sequi libero enim
          veniam. Aperiam accusantium recusandae blanditiis porro. Laudantium
          qui harum voluptatem sint tempora. Deleniti nesciunt ratione at minima
          quaerat.
        </div>
      )}
    </div>
  );
};
