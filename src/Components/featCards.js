import '../Sass/featCard.scss';

const FeatureCards = ({ img, title, desc }) => {
  return (
    <div className='card'>
      <img src={img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCards;
