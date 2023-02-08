import PropTypes from "prop-types";

import css from 'components/Statistics/Stats/Stats.module.css'

const Stats = ({data}) =>{

    return <ul className={css.stat_list}>
    {data.map(item => 
        <li className={css.item} style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
        <span className={css.label}>{item.label}</span>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>)}
  </ul>
}

export default Stats;

Stats.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }),
      ).isRequired
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
