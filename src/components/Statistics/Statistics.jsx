import PropTypes from "prop-types";

import data from "components/Statistics/data.json";
import css from "components/Statistics/Statistics.module.css"

const StatisticMarcup = () => {
    const {title, stats } = data;
return(
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.stat_list}>
    <li className={css.item}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
    </li>
  </ul>
</section>
)}

StatisticMarcup.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.string.isRequired, 
  }

export default StatisticMarcup;