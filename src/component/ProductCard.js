import Card from './css-component/Card';
const ProductCard = ({name, price}) => {
    return(
        <Card className='purpal-border'>
            <div className='card-title'>
                <h1 className='title purpal-text'>Course card</h1>
            </div>
            <div className='card-content'>
                <p><strong>Name : </strong><span>{name}</span></p>
                <p><strong>Age : </strong><span>{price}</span></p>
            </div>
        </Card>
    );
}

export default ProductCard;