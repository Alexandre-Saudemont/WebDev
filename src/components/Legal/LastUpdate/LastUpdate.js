'use client';

import { useTranslation } from 'react-i18next';
import './LastUpdate.css';

export default function LastUpdate() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div data-reveal className="last-update">
      <p>{t('legal.mention.lastUpdate')} {currentYear}</p>
    </div>
  );
}
