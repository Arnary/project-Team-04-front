import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange, visiblePages = 3 }) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Перша сторінка
    pageNumbers.push(
      <button
        key={1}
        className={`${styles.paginationButton} ${1 === currentPage ? styles.active : ''}`}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
    );

    if (currentPage > visiblePages) {
      pageNumbers.push(<span key="left-ellipsis">...</span>);
    }

    // Сторінки навколо поточної
    const start = Math.max(2, currentPage - Math.floor(visiblePages / 2));
    const end = Math.min(totalPages - 1, start + visiblePages - 1);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${styles.paginationButton} ${i === currentPage ? styles.active : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - visiblePages + 1) {
      pageNumbers.push(<span key="right-ellipsis">...</span>);
    }

    // Остання сторінка
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          className={`${styles.paginationButton} ${totalPages === currentPage ? styles.active : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Попередня сторінка"
      >
        <FaChevronLeft size={16} />
      </button>

      {renderPageNumbers()}

      <button
        className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Наступна сторінка"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  visiblePages: PropTypes.number,
};

Pagination.defaultProps = {
  visiblePages: 3,
};

export default React.memo(Pagination);


//<Pagination
//        currentPage={currentPage}
//totalPages={totalPages}
//       onPageChange={handlePageChange}
//      />